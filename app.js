// Spartan Training Tracker - Main Application

// Password protection
const PASS_KEY = 'spartan_unlocked';
const PASS_CODE = 'workout';

// State
let currentTab = 'today';
let selectedWeek = 1;
let currentLogExercises = [];
let currentLogNotes = '';
let editingLogId = null;
let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth();
let selectedCalendarDate = null;

// Check if already unlocked
function isUnlocked() {
  return localStorage.getItem(PASS_KEY) === 'true';
}

// Unlock the app
function unlock() {
  localStorage.setItem(PASS_KEY, 'true');
  document.getElementById('lock-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
}

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
  // Password check
  const passwordInput = document.getElementById('password-input');

  if (isUnlocked()) {
    document.getElementById('lock-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
  }

  passwordInput.addEventListener('input', (e) => {
    if (e.target.value.toLowerCase() === PASS_CODE) {
      unlock();
      initializeApp();
    }
  });

  if (isUnlocked()) {
    await initializeApp();
  }
});

async function initializeApp() {
  await initDB();

  // Set up navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });

  // Set up modal close
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('log-modal').addEventListener('click', (e) => {
    if (e.target.id === 'log-modal') closeModal();
  });

  // Load initial tab
  await switchTab('today');
}

// Tab switching
async function switchTab(tab) {
  currentTab = tab;

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  // Render tab content
  const content = document.getElementById('content');

  switch (tab) {
    case 'today':
      await renderTodayTab(content);
      break;
    case 'plan':
      await renderPlanTab(content);
      break;
    case 'history':
      await renderHistoryTab(content);
      break;
    case 'settings':
      await renderSettingsTab(content);
      break;
  }
}

// TODAY TAB
async function renderTodayTab(container) {
  const startDate = await getSetting('programStartDate');

  if (!startDate) {
    container.innerHTML = `
      <div class="card">
        <div class="empty-state">
          <div class="empty-state-icon">&#127939;</div>
          <div class="empty-state-text">
            <p>Welcome to Spartan Training Tracker!</p>
            <p class="mt-16">Set your program start date in Settings to begin.</p>
          </div>
          <button class="btn btn-primary mt-16" onclick="switchTab('settings')">Go to Settings</button>
        </div>
      </div>
    `;
    return;
  }

  const current = getCurrentWeekDay(startDate);
  const today = getTodayString();
  const todayLog = await getWorkoutLogByDate(today);

  if (current.daysUntilStart) {
    container.innerHTML = `
      <div class="card">
        <div class="not-started">
          <h3>Program Starts Soon!</h3>
          <p class="text-muted">Get ready for your Spartan Beast journey</p>
          <div class="countdown">${current.daysUntilStart} days</div>
          <p class="text-small text-muted">until your training begins</p>
        </div>
      </div>
    `;
    return;
  }

  if (current.programComplete) {
    container.innerHTML = `
      <div class="card">
        <div class="program-complete">
          <h3>Program Complete!</h3>
          <p class="text-muted">Congratulations on completing your 12-week Spartan Beast training!</p>
          <p class="mt-16">You can still log workouts and view your history.</p>
          <button class="btn btn-primary mt-16" onclick="openLogModal()">Log a Workout</button>
        </div>
      </div>
    `;
    return;
  }

  const workout = getWorkout(current.weekNumber, current.dayNumber);

  let html = `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">Week ${current.weekNumber} &middot; Day ${current.dayNumber}</div>
          <div class="card-subtitle">${formatDate(today)}</div>
        </div>
      </div>
  `;

  if (todayLog) {
    html += `
      <div class="logged-summary">
        <div class="logged-summary-title">
          &#10003; Workout Logged
        </div>
        <div class="logged-summary-exercises">
          ${todayLog.exercises.map(e => e.name).join(', ')}
        </div>
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary" onclick="editTodayLog(${todayLog.id})">Edit Log</button>
        <button class="btn btn-primary" onclick="addMoreToLog(${todayLog.id}, ${current.weekNumber}, ${current.dayNumber})">Add More</button>
      </div>
    `;
  }

  if (workout) {
    html += `
      <span class="workout-type ${workout.type}">${workout.type}</span>
      <h2 class="workout-title">${workout.title}</h2>
    `;

    workout.sections.forEach(section => {
      html += `
        <div class="section">
          <div class="section-title">${section.name}</div>
          <div class="section-content">${section.description}</div>
        </div>
      `;
    });

    if (!todayLog) {
      html += `
        <div class="btn-group">
          <button class="btn btn-primary" onclick="openLogModal(${current.weekNumber}, ${current.dayNumber})">Log Workout</button>
        </div>
      `;
    }
  }

  html += `</div>`;

  // Weekly stats
  const weekStart = parseLocalDate(startDate);
  weekStart.setDate(weekStart.getDate() + (current.weekNumber - 1) * 7);
  const stats = await getWeeklyStats(weekStart.toISOString().split('T')[0]);

  html += `
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-value">${stats.workoutsCompleted}</div>
        <div class="stat-label">Workouts This Week</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.totalMiles}</div>
        <div class="stat-label">Miles This Week</div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// PLAN TAB
async function renderPlanTab(container) {
  const startDate = await getSetting('programStartDate');
  const current = startDate ? getCurrentWeekDay(startDate) : null;
  const allLogs = await getAllWorkoutLogs();

  // Create a set of logged dates for quick lookup
  const loggedDates = new Set(allLogs.map(l => l.date));

  const week = trainingPlan.weeks.find(w => w.weekNumber === selectedWeek);

  let html = `
    <div class="week-header">
      <button class="week-nav-btn" onclick="changeWeek(-1)" ${selectedWeek === 1 ? 'disabled' : ''}>&#8249;</button>
      <div class="week-title">Week ${selectedWeek}: ${week.title}</div>
      <button class="week-nav-btn" onclick="changeWeek(1)" ${selectedWeek === 12 ? 'disabled' : ''}>&#8250;</button>
    </div>
  `;

  html += `<ul class="day-list">`;

  week.days.forEach(day => {
    const isToday = current && current.weekNumber === selectedWeek && current.dayNumber === day.dayNumber;

    // Calculate actual date for this day
    let dayDate = null;
    let isLogged = false;
    let actualDayName = day.day.substring(0, 3); // fallback to plan day name
    if (startDate) {
      const date = parseLocalDate(startDate);
      date.setDate(date.getDate() + (selectedWeek - 1) * 7 + (day.dayNumber - 1));
      dayDate = date.toISOString().split('T')[0];
      isLogged = loggedDates.has(dayDate);
      // Get the actual day of week from the calculated date
      actualDayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    }

    html += `
      <li class="day-item ${isToday ? 'today' : ''}" onclick="showDayDetail(${selectedWeek}, ${day.dayNumber})">
        <span class="day-name">${actualDayName}</span>
        <span class="day-workout">${day.title}</span>
        <span class="day-status ${isLogged ? 'completed' : ''} ${isToday && !isLogged ? 'today' : ''}">
          ${isLogged ? '&#10003;' : (isToday ? '&#9679;' : '')}
        </span>
      </li>
    `;
  });

  html += `</ul>`;

  container.innerHTML = html;
}

function changeWeek(delta) {
  selectedWeek = Math.max(1, Math.min(12, selectedWeek + delta));
  renderPlanTab(document.getElementById('content'));
}

async function showDayDetail(weekNumber, dayNumber) {
  const workout = getWorkout(weekNumber, dayNumber);
  if (!workout) return;

  const modal = document.getElementById('log-modal');
  const modalBody = document.getElementById('modal-body');

  // Calculate actual day name from start date
  const startDate = await getSetting('programStartDate');
  let dayLabel = workout.day;
  if (startDate) {
    const date = parseLocalDate(startDate);
    date.setDate(date.getDate() + (weekNumber - 1) * 7 + (dayNumber - 1));
    dayLabel = date.toLocaleDateString('en-US', { weekday: 'long' });
  }
  document.querySelector('.modal-header h2').textContent = `Week ${weekNumber} - ${dayLabel}`;

  let html = `
    <span class="workout-type ${workout.type}">${workout.type}</span>
    <h2 class="workout-title">${workout.title}</h2>
  `;

  workout.sections.forEach(section => {
    html += `
      <div class="section">
        <div class="section-title">${section.name}</div>
        <div class="section-content">${section.description}</div>
      </div>
    `;
  });

  if (workout.exercises.length > 0) {
    html += `<div class="section-title mt-16">Exercises</div>`;
    html += `<ul class="exercise-list">`;
    workout.exercises.forEach(ex => {
      let details = [];
      if (ex.defaultSets) details.push(`${ex.defaultSets} sets`);
      if (ex.defaultReps) details.push(`${ex.defaultReps} reps`);
      if (ex.defaultTime) details.push(`${ex.defaultTime} min`);
      if (ex.defaultDistance) details.push(`${ex.defaultDistance} ${ex.defaultUnit || 'mi'}`);
      if (ex.notes) details.push(ex.notes);

      html += `
        <li class="exercise-item" onclick="addExerciseFromPlan('${ex.id}')">
          <div class="exercise-info">
            <div class="exercise-name">${ex.name}</div>
            ${details.length ? `<div class="exercise-details">${details.join(' &middot; ')}</div>` : ''}
          </div>
          <span style="color: var(--primary)">+ Add</span>
        </li>
      `;
    });
    html += `</ul>`;
  }

  modalBody.innerHTML = html;
  modal.classList.remove('hidden');
}

// HISTORY TAB
async function renderHistoryTab(container) {
  const allLogs = await getAllWorkoutLogs();
  const loggedDates = new Set(allLogs.map(l => l.date));

  // Calendar
  let html = `<div class="calendar">`;
  html += `
    <div class="calendar-header">
      <div class="calendar-title">${new Date(calendarYear, calendarMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
      <div class="calendar-nav">
        <button onclick="changeMonth(-1)">&#8249;</button>
        <button onclick="changeMonth(1)">&#8250;</button>
      </div>
    </div>
  `;

  html += `<div class="calendar-grid">`;

  // Day labels
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayLabels.forEach(d => {
    html += `<div class="calendar-day-label">${d}</div>`;
  });

  // Calendar days
  const firstDay = new Date(calendarYear, calendarMonth, 1);
  const lastDay = new Date(calendarYear, calendarMonth + 1, 0);
  const today = getTodayString();

  // Previous month padding
  for (let i = 0; i < firstDay.getDay(); i++) {
    const prevDate = new Date(calendarYear, calendarMonth, -firstDay.getDay() + i + 1);
    html += `<div class="calendar-day other-month">${prevDate.getDate()}</div>`;
  }

  // Current month days
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isToday = dateStr === today;
    const hasWorkout = loggedDates.has(dateStr);
    const isSelected = dateStr === selectedCalendarDate;

    html += `
      <div class="calendar-day ${isToday ? 'today' : ''} ${hasWorkout ? 'has-workout' : ''} ${isSelected ? 'selected' : ''}"
           onclick="selectCalendarDate('${dateStr}')">
        ${day}
      </div>
    `;
  }

  html += `</div></div>`;

  // Selected date details
  if (selectedCalendarDate) {
    const log = await getWorkoutLogByDate(selectedCalendarDate);
    if (log) {
      html += `
        <div class="card mt-16">
          <div class="card-header">
            <div class="card-title">${formatDate(selectedCalendarDate)}</div>
            <button class="settings-btn" onclick="editLog(${log.id})">Edit</button>
          </div>
          <ul class="exercise-list">
      `;
      log.exercises.forEach(ex => {
        let details = [];
        if (ex.sets) details.push(`${ex.sets} sets`);
        if (ex.reps) details.push(`${ex.reps} reps`);
        if (ex.weight) details.push(`${ex.weight} ${ex.weightUnit || 'lb'}`);
        if (ex.time) details.push(`${ex.time} min`);
        if (ex.distance) details.push(`${ex.distance} ${ex.distanceUnit || 'mi'}`);

        html += `
          <li class="exercise-item">
            <div class="exercise-info">
              <div class="exercise-name">${ex.name}</div>
              ${details.length ? `<div class="exercise-details">${details.join(' &middot; ')}</div>` : ''}
              ${ex.source && ex.source !== 'custom' ? `<div class="exercise-source">From ${ex.source}</div>` : ''}
            </div>
          </li>
        `;
      });
      html += `</ul>`;
      if (log.notes) {
        html += `<p class="text-muted text-small mt-16">${log.notes}</p>`;
      }
      html += `</div>`;
    } else {
      html += `
        <div class="card mt-16">
          <div class="empty-state">
            <p class="text-muted">No workout logged for ${formatDate(selectedCalendarDate)}</p>
          </div>
        </div>
      `;
    }
  }

  // Overall stats
  let totalWorkouts = allLogs.length;
  let totalMiles = 0;
  allLogs.forEach(log => {
    log.exercises.forEach(ex => {
      if (ex.distance && ex.distanceUnit === 'mi') {
        totalMiles += ex.distance;
      }
    });
  });

  html += `
    <div class="stats-row mt-16">
      <div class="stat-card">
        <div class="stat-value">${totalWorkouts}</div>
        <div class="stat-label">Total Workouts</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${Math.round(totalMiles * 10) / 10}</div>
        <div class="stat-label">Total Miles</div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function changeMonth(delta) {
  calendarMonth += delta;
  if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear--;
  } else if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear++;
  }
  selectedCalendarDate = null;
  renderHistoryTab(document.getElementById('content'));
}

function selectCalendarDate(dateStr) {
  selectedCalendarDate = dateStr;
  renderHistoryTab(document.getElementById('content'));
}

// SETTINGS TAB
async function renderSettingsTab(container) {
  const startDate = await getSetting('programStartDate');
  const debugDate = localStorage.getItem('debugDate');

  let html = `
    <div class="settings-item">
      <div>
        <div class="settings-label">Program Start Date</div>
        <div class="settings-value">${startDate ? formatDate(startDate) : 'Not set'}</div>
      </div>
      <button class="settings-btn" onclick="editStartDate()">Change</button>
    </div>

    <div class="settings-item">
      <div>
        <div class="settings-label">Export Data</div>
        <div class="settings-value">Download backup file</div>
      </div>
      <button class="settings-btn" onclick="downloadExport()">Export</button>
    </div>

    <div class="settings-item">
      <div>
        <div class="settings-label">Import Data</div>
        <div class="settings-value">Restore from backup</div>
      </div>
      <button class="settings-btn" onclick="triggerImport()">Import</button>
    </div>

    <div class="settings-item">
      <div>
        <div class="settings-label">Clear All Data</div>
        <div class="settings-value">Delete all workouts and settings</div>
      </div>
      <button class="settings-btn" style="color: #f44336" onclick="confirmClearData()">Clear</button>
    </div>

    <input type="file" id="import-file" accept=".json" style="display: none" onchange="handleImport(event)">

    <div class="card mt-16">
      <div class="card-title" style="margin-bottom: 12px;">Testing Mode</div>
      <div class="settings-item" style="margin-bottom: 0;">
        <div>
          <div class="settings-label">Simulate Date</div>
          <div class="settings-value">${debugDate ? formatDate(debugDate) + ' (active)' : 'Using real date'}</div>
        </div>
        <button class="settings-btn" onclick="editDebugDate()">${debugDate ? 'Change' : 'Set'}</button>
      </div>
      ${debugDate ? `
      <button class="btn btn-secondary btn-small mt-16" onclick="clearDebugDate()">Reset to Real Date</button>
      ` : ''}
    </div>
  `;

  html += `
    <div class="card mt-16">
      <p class="text-small text-muted text-center">
        Spartan Training Tracker v1.0<br>
        Based on the Official 12-Week Spartan Beast Training Plan
      </p>
    </div>
  `;

  container.innerHTML = html;
}

async function editStartDate() {
  const currentDate = await getSetting('programStartDate') || getTodayString();

  const modal = document.getElementById('log-modal');
  const modalBody = document.getElementById('modal-body');
  document.querySelector('.modal-header h2').textContent = 'Set Start Date';

  modalBody.innerHTML = `
    <div class="form-group">
      <label class="form-label">Program Start Date</label>
      <input type="date" class="form-input" id="start-date-input" value="${currentDate}">
    </div>
    <p class="text-muted text-small mb-16">
      Choose the Monday you want Week 1 to start. This determines which week/day is shown on the Today tab.
    </p>
    <button class="btn btn-primary" onclick="saveStartDate()">Save</button>
  `;

  modal.classList.remove('hidden');
}

async function saveStartDate() {
  const input = document.getElementById('start-date-input');
  await setSetting('programStartDate', input.value);
  closeModal();
  switchTab('settings');
}

async function downloadExport() {
  const data = await exportData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `spartan-tracker-backup-${getTodayString()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function triggerImport() {
  document.getElementById('import-file').click();
}

async function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const text = await file.text();
    const data = JSON.parse(text);
    await importData(data);
    alert('Data imported successfully!');
    switchTab('settings');
  } catch (err) {
    alert('Failed to import data: ' + err.message);
  }

  event.target.value = '';
}

function confirmClearData() {
  if (confirm('Are you sure you want to delete all data? This cannot be undone.')) {
    clearAllData().then(() => {
      alert('All data cleared.');
      switchTab('settings');
    });
  }
}

// Debug date functions for testing
function editDebugDate() {
  const currentDebug = localStorage.getItem('debugDate') || getTodayString();

  const modal = document.getElementById('log-modal');
  const modalBody = document.getElementById('modal-body');
  document.querySelector('.modal-header h2').textContent = 'Simulate Date';

  modalBody.innerHTML = `
    <div class="form-group">
      <label class="form-label">Pretend today is:</label>
      <input type="date" class="form-input" id="debug-date-input" value="${currentDebug}">
    </div>
    <p class="text-muted text-small mb-16">
      This lets you test different weeks/days without waiting. The app will behave as if it's this date.
    </p>
    <button class="btn btn-primary" onclick="saveDebugDate()">Set Date</button>
  `;

  modal.classList.remove('hidden');
}

function saveDebugDate() {
  const input = document.getElementById('debug-date-input');
  localStorage.setItem('debugDate', input.value);
  closeModal();
  switchTab('today');
}

function clearDebugDate() {
  localStorage.removeItem('debugDate');
  switchTab('settings');
}

// LOG WORKOUT MODAL
async function openLogModal(weekNumber, dayNumber) {
  currentLogExercises = [];
  currentLogNotes = '';
  editingLogId = null;

  const modal = document.getElementById('log-modal');
  document.querySelector('.modal-header h2').textContent = 'Log Workout';

  renderLogModal(weekNumber, dayNumber);
  modal.classList.remove('hidden');
}

async function editTodayLog(logId) {
  await editLog(logId);
}

async function addMoreToLog(logId, weekNumber, dayNumber) {
  const log = await getWorkoutLog(logId);
  if (!log) return;

  currentLogExercises = [...log.exercises];
  currentLogNotes = log.notes || '';
  editingLogId = logId;

  const modal = document.getElementById('log-modal');
  document.querySelector('.modal-header h2').textContent = 'Add to Workout';

  renderLogModal(weekNumber, dayNumber, log.date);
  modal.classList.remove('hidden');
}

async function editLog(logId) {
  const log = await getWorkoutLog(logId);
  if (!log) return;

  currentLogExercises = [...log.exercises];
  currentLogNotes = log.notes || '';
  editingLogId = logId;

  const modal = document.getElementById('log-modal');
  document.querySelector('.modal-header h2').textContent = 'Edit Workout';

  renderLogModal(null, null, log.date);
  modal.classList.remove('hidden');
}

function renderLogModal(weekNumber, dayNumber, logDate) {
  const modalBody = document.getElementById('modal-body');
  const today = logDate || getTodayString();

  let html = `
    <div class="form-group">
      <label class="form-label">Date</label>
      <input type="date" class="form-input" id="log-date" value="${today}" ${editingLogId ? 'disabled' : ''}>
    </div>

    <div class="add-exercise-btns">
      ${weekNumber ? `<button class="add-exercise-btn" onclick="showTodayExercises(${weekNumber}, ${dayNumber})">+ From Today</button>` : ''}
      <button class="add-exercise-btn" onclick="showPlanBrowser()">+ Browse Plan</button>
      <button class="add-exercise-btn" onclick="showCustomExerciseForm()">+ Custom</button>
    </div>

    <div id="exercise-picker-area"></div>

    <div class="section-title">Your Log</div>
    <ul class="exercise-list" id="current-log-exercises">
  `;

  if (currentLogExercises.length === 0) {
    html += `<li class="text-muted text-center" style="padding: 20px;">No exercises added yet</li>`;
  } else {
    currentLogExercises.forEach((ex, index) => {
      let details = [];
      if (ex.sets) details.push(`${ex.sets} sets`);
      if (ex.reps) details.push(`${ex.reps} reps`);
      if (ex.weight) details.push(`${ex.weight} ${ex.weightUnit || 'lb'}`);
      if (ex.time) details.push(`${ex.time} min`);
      if (ex.distance) details.push(`${ex.distance} ${ex.distanceUnit || 'mi'}`);

      html += `
        <li class="exercise-item">
          <div class="exercise-info" onclick="editExerciseInLog(${index})">
            <div class="exercise-name">${ex.name}</div>
            ${details.length ? `<div class="exercise-details">${details.join(' &middot; ')}</div>` : ''}
            ${ex.source && ex.source !== 'custom' ? `<div class="exercise-source">From ${ex.source}</div>` : ''}
          </div>
          <span class="exercise-edit" onclick="removeExerciseFromLog(${index})">&#10005;</span>
        </li>
      `;
    });
  }

  html += `
    </ul>

    <div class="form-group mt-16">
      <label class="form-label">Notes (optional)</label>
      <textarea class="form-input" id="log-notes" placeholder="How did it feel?">${currentLogNotes}</textarea>
    </div>

    <div class="btn-group">
      ${editingLogId ? `<button class="btn btn-secondary" onclick="deleteCurrentLog()">Delete</button>` : ''}
      <button class="btn btn-primary" onclick="saveLog()">Save</button>
    </div>
  `;

  modalBody.innerHTML = html;
}

function showTodayExercises(weekNumber, dayNumber) {
  const workout = getWorkout(weekNumber, dayNumber);
  if (!workout) return;

  const pickerArea = document.getElementById('exercise-picker-area');
  let html = `
    <div class="card">
      <div class="card-title mb-16">Today's Exercises</div>
      <div class="exercise-picker">
  `;

  workout.exercises.forEach(ex => {
    let details = [];
    if (ex.defaultSets) details.push(`${ex.defaultSets} sets`);
    if (ex.defaultReps) details.push(`${ex.defaultReps} reps`);
    if (ex.defaultTime) details.push(`${ex.defaultTime} min`);
    if (ex.defaultDistance) details.push(`${ex.defaultDistance} ${ex.defaultUnit || 'mi'}`);

    html += `
      <div class="picker-item" onclick="addExerciseToLog('${ex.id}')">
        <div class="picker-item-name">${ex.name}</div>
        ${details.length ? `<div class="picker-item-source">${details.join(' &middot; ')}</div>` : ''}
      </div>
    `;
  });

  html += `</div></div>`;
  pickerArea.innerHTML = html;
}

function showPlanBrowser() {
  const pickerArea = document.getElementById('exercise-picker-area');
  let html = `
    <div class="card">
      <div class="card-title mb-16">Browse Plan</div>
      <div class="form-group">
        <select class="form-input" id="plan-week-select" onchange="loadWeekExercises()">
  `;

  for (let w = 1; w <= 12; w++) {
    html += `<option value="${w}">Week ${w}</option>`;
  }

  html += `
        </select>
      </div>
      <div id="week-exercises-list" class="exercise-picker"></div>
    </div>
  `;

  pickerArea.innerHTML = html;
  loadWeekExercises();
}

function loadWeekExercises() {
  const weekNum = parseInt(document.getElementById('plan-week-select').value);
  const week = trainingPlan.weeks.find(w => w.weekNumber === weekNum);
  const container = document.getElementById('week-exercises-list');

  let html = '';
  week.days.forEach(day => {
    day.exercises.forEach(ex => {
      let details = [];
      if (ex.defaultSets) details.push(`${ex.defaultSets} sets`);
      if (ex.defaultReps) details.push(`${ex.defaultReps} reps`);
      if (ex.defaultTime) details.push(`${ex.defaultTime} min`);
      if (ex.defaultDistance) details.push(`${ex.defaultDistance} ${ex.defaultUnit || 'mi'}`);

      html += `
        <div class="picker-item" onclick="addExerciseToLog('${ex.id}')">
          <div class="picker-item-name">${ex.name}</div>
          <div class="picker-item-source">${day.day} &middot; ${details.join(' &middot; ')}</div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

function showCustomExerciseForm() {
  const pickerArea = document.getElementById('exercise-picker-area');
  pickerArea.innerHTML = `
    <div class="card">
      <div class="card-title mb-16">Add Custom Exercise</div>
      <div class="form-group">
        <label class="form-label">Exercise Name</label>
        <input type="text" class="form-input" id="custom-exercise-name" placeholder="e.g., Swimming">
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-input" id="custom-exercise-type">
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="timed">Timed</option>
        </select>
      </div>
      <button class="btn btn-primary" onclick="addCustomExercise()">Add Exercise</button>
    </div>
  `;
}

function addCustomExercise() {
  const name = document.getElementById('custom-exercise-name').value.trim();
  const type = document.getElementById('custom-exercise-type').value;

  if (!name) {
    alert('Please enter an exercise name');
    return;
  }

  const exercise = {
    name,
    type,
    source: 'custom'
  };

  currentLogExercises.push(exercise);
  renderLogModal();
  document.getElementById('exercise-picker-area').innerHTML = '';
}

function addExerciseToLog(exerciseId) {
  // Find exercise in plan
  const allExercises = getAllExercises();
  const planExercise = allExercises.find(e => e.id === exerciseId);

  if (!planExercise) return;

  const exercise = {
    name: planExercise.name,
    type: planExercise.type,
    source: `Week ${planExercise.weekNumber} ${planExercise.dayTitle}`
  };

  // Add defaults
  if (planExercise.defaultSets) exercise.sets = planExercise.defaultSets;
  if (planExercise.defaultReps) exercise.reps = planExercise.defaultReps;
  if (planExercise.defaultTime) exercise.time = planExercise.defaultTime;
  if (planExercise.defaultDistance) {
    exercise.distance = planExercise.defaultDistance;
    exercise.distanceUnit = planExercise.defaultUnit || 'mi';
  }

  currentLogExercises.push(exercise);
  renderLogModal();
}

function addExerciseFromPlan(exerciseId) {
  addExerciseToLog(exerciseId);
  closeModal();
  openLogModal();
}

function removeExerciseFromLog(index) {
  currentLogExercises.splice(index, 1);
  renderLogModal();
}

function editExerciseInLog(index) {
  const exercise = currentLogExercises[index];
  const pickerArea = document.getElementById('exercise-picker-area');

  let html = `
    <div class="card">
      <div class="card-title mb-16">Edit: ${exercise.name}</div>
  `;

  if (exercise.type === 'cardio') {
    html += `
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Distance</label>
          <input type="number" step="0.1" class="form-input" id="edit-distance" value="${exercise.distance || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Unit</label>
          <select class="form-input" id="edit-distance-unit">
            <option value="mi" ${exercise.distanceUnit === 'mi' ? 'selected' : ''}>miles</option>
            <option value="km" ${exercise.distanceUnit === 'km' ? 'selected' : ''}>km</option>
            <option value="m" ${exercise.distanceUnit === 'm' ? 'selected' : ''}>meters</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Time (minutes)</label>
        <input type="number" class="form-input" id="edit-time" value="${exercise.time || ''}">
      </div>
    `;
  } else if (exercise.type === 'strength') {
    html += `
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Sets</label>
          <input type="number" class="form-input" id="edit-sets" value="${exercise.sets || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Reps</label>
          <input type="number" class="form-input" id="edit-reps" value="${exercise.reps || ''}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Weight</label>
          <input type="number" class="form-input" id="edit-weight" value="${exercise.weight || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Unit</label>
          <select class="form-input" id="edit-weight-unit">
            <option value="lb" ${exercise.weightUnit === 'lb' ? 'selected' : ''}>lb</option>
            <option value="kg" ${exercise.weightUnit === 'kg' ? 'selected' : ''}>kg</option>
          </select>
        </div>
      </div>
    `;
  } else if (exercise.type === 'timed') {
    html += `
      <div class="form-group">
        <label class="form-label">Time (minutes)</label>
        <input type="number" step="0.5" class="form-input" id="edit-time" value="${exercise.time || ''}">
      </div>
    `;
  }

  html += `
      <button class="btn btn-primary" onclick="saveExerciseEdit(${index})">Save</button>
    </div>
  `;

  pickerArea.innerHTML = html;
}

function saveExerciseEdit(index) {
  const exercise = currentLogExercises[index];

  if (exercise.type === 'cardio') {
    const distance = document.getElementById('edit-distance').value;
    const distanceUnit = document.getElementById('edit-distance-unit').value;
    const time = document.getElementById('edit-time').value;

    if (distance) exercise.distance = parseFloat(distance);
    exercise.distanceUnit = distanceUnit;
    if (time) exercise.time = parseInt(time);
  } else if (exercise.type === 'strength') {
    const sets = document.getElementById('edit-sets').value;
    const reps = document.getElementById('edit-reps').value;
    const weight = document.getElementById('edit-weight').value;
    const weightUnit = document.getElementById('edit-weight-unit').value;

    if (sets) exercise.sets = parseInt(sets);
    if (reps) exercise.reps = parseInt(reps);
    if (weight) exercise.weight = parseFloat(weight);
    exercise.weightUnit = weightUnit;
  } else if (exercise.type === 'timed') {
    const time = document.getElementById('edit-time').value;
    if (time) exercise.time = parseFloat(time);
  }

  renderLogModal();
}

async function saveLog() {
  const date = document.getElementById('log-date').value;
  const notes = document.getElementById('log-notes').value;

  if (currentLogExercises.length === 0) {
    alert('Please add at least one exercise');
    return;
  }

  const log = {
    date,
    exercises: currentLogExercises,
    notes
  };

  if (editingLogId) {
    log.id = editingLogId;
  }

  await saveWorkoutLog(log);
  closeModal();
  switchTab(currentTab);
}

async function deleteCurrentLog() {
  if (!editingLogId) return;

  if (confirm('Delete this workout log?')) {
    await deleteWorkoutLog(editingLogId);
    closeModal();
    switchTab(currentTab);
  }
}

function closeModal() {
  document.getElementById('log-modal').classList.add('hidden');
  currentLogExercises = [];
  currentLogNotes = '';
  editingLogId = null;
}
