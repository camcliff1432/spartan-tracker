// IndexedDB wrapper for Spartan Training Tracker

const DB_NAME = 'spartan-tracker';
const DB_VERSION = 1;

let db = null;

// Initialize the database
function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      // Settings store (key-value)
      if (!database.objectStoreNames.contains('settings')) {
        database.createObjectStore('settings', { keyPath: 'key' });
      }

      // Workout logs store
      if (!database.objectStoreNames.contains('workoutLogs')) {
        const logsStore = database.createObjectStore('workoutLogs', {
          keyPath: 'id',
          autoIncrement: true
        });
        logsStore.createIndex('date', 'date', { unique: false });
      }
    };
  });
}

// Settings functions
async function getSetting(key) {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['settings'], 'readonly');
    const store = transaction.objectStore('settings');
    const request = store.get(key);

    request.onsuccess = () => {
      resolve(request.result ? request.result.value : null);
    };
    request.onerror = () => reject(request.error);
  });
}

async function setSetting(key, value) {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['settings'], 'readwrite');
    const store = transaction.objectStore('settings');
    const request = store.put({ key, value });

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Workout log functions
async function saveWorkoutLog(log) {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['workoutLogs'], 'readwrite');
    const store = transaction.objectStore('workoutLogs');

    // If log has an id, update it; otherwise, add new
    const request = log.id ? store.put(log) : store.add(log);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getWorkoutLog(id) {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['workoutLogs'], 'readonly');
    const store = transaction.objectStore('workoutLogs');
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getWorkoutLogByDate(date) {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['workoutLogs'], 'readonly');
    const store = transaction.objectStore('workoutLogs');
    const index = store.index('date');
    const request = index.get(date);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllWorkoutLogs() {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['workoutLogs'], 'readonly');
    const store = transaction.objectStore('workoutLogs');
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function deleteWorkoutLog(id) {
  if (!db) await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['workoutLogs'], 'readwrite');
    const store = transaction.objectStore('workoutLogs');
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Get logs for a specific month (for calendar view)
async function getLogsForMonth(year, month) {
  const allLogs = await getAllWorkoutLogs();
  return allLogs.filter(log => {
    const logDate = new Date(log.date);
    return logDate.getFullYear() === year && logDate.getMonth() === month;
  });
}

// Get weekly stats
async function getWeeklyStats(startDate) {
  const allLogs = await getAllWorkoutLogs();
  const start = new Date(startDate);
  const end = new Date(startDate);
  end.setDate(end.getDate() + 7);

  const weekLogs = allLogs.filter(log => {
    const logDate = new Date(log.date);
    return logDate >= start && logDate < end;
  });

  let totalMiles = 0;
  let workoutsCompleted = weekLogs.length;

  weekLogs.forEach(log => {
    log.exercises.forEach(ex => {
      if (ex.distance && ex.distanceUnit === 'mi') {
        totalMiles += ex.distance;
      }
    });
  });

  return {
    workoutsCompleted,
    totalMiles: Math.round(totalMiles * 10) / 10
  };
}

// Export all data (for backup)
async function exportData() {
  const settings = {};
  const settingsKeys = ['programStartDate'];

  for (const key of settingsKeys) {
    settings[key] = await getSetting(key);
  }

  const workoutLogs = await getAllWorkoutLogs();

  return {
    exportDate: new Date().toISOString(),
    settings,
    workoutLogs
  };
}

// Import data (restore from backup)
async function importData(data) {
  if (!db) await initDB();

  // Clear existing data
  await clearAllData();

  // Import settings
  if (data.settings) {
    for (const [key, value] of Object.entries(data.settings)) {
      if (value !== null) {
        await setSetting(key, value);
      }
    }
  }

  // Import workout logs
  if (data.workoutLogs) {
    for (const log of data.workoutLogs) {
      // Remove id to let IndexedDB assign new ones
      const { id, ...logData } = log;
      await saveWorkoutLog(logData);
    }
  }
}

// Clear all data
async function clearAllData() {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['settings', 'workoutLogs'], 'readwrite');

    transaction.objectStore('settings').clear();
    transaction.objectStore('workoutLogs').clear();

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

// Calculate current week and day based on start date
function getCurrentWeekDay(startDateStr) {
  if (!startDateStr) return null;

  const startDate = new Date(startDateStr);
  const today = new Date();

  // Reset time to midnight for accurate day calculation
  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    // Program hasn't started yet
    return { weekNumber: 0, dayNumber: 0, daysUntilStart: Math.abs(diffDays) };
  }

  const weekNumber = Math.floor(diffDays / 7) + 1;
  const dayNumber = (diffDays % 7) + 1;

  if (weekNumber > 12) {
    // Program is complete
    return { weekNumber: 13, dayNumber: 0, programComplete: true };
  }

  return { weekNumber, dayNumber };
}

// Get today's date in YYYY-MM-DD format
function getTodayString() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

// Format date for display
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}
