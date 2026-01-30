// 12-Week Spartan Beast Training Plan
// Based on the Official Spartan Beast Training Plan

const trainingPlan = {
  weeks: [
    // WEEK 1
    {
      weekNumber: 1,
      title: "Foundation Week",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Endurance Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "2 miles at a steady pace" },
            { name: "Cool-down", description: "5-10 minute walk and stretching" }
          ],
          exercises: [
            { id: "w1d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w1d1e2", name: "Steady pace run", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w1d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Bodyweight Strength (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching, t-spine rotations, marching in place" },
            { name: "Circuit", description: "3 rounds of the following exercises" },
            { name: "Cool-down", description: "10-minute walk and static stretching" }
          ],
          exercises: [
            { id: "w1d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w1d2e2", name: "Squats", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w1d2e3", name: "Push-ups", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w1d2e4", name: "Lunges", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w1d2e5", name: "Plank up-downs", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w1d2e6", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w1d2e7", name: "Single-leg pistol squats", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating" },
            { id: "w1d2e8", name: "Burpees", type: "strength", defaultSets: 3, defaultReps: 5 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Agility and Speed Work",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "Sprint intervals and moderate pace repeats" },
            { name: "Cool-down", description: "10-minute walk and static stretching" }
          ],
          exercises: [
            { id: "w1d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w1d3e2", name: "100m repeats (80-90% effort)", type: "cardio", defaultSets: 4, notes: "2 min rest between" },
            { id: "w1d3e3", name: "400m repeats (60-70% effort)", type: "cardio", defaultSets: 4, notes: "2 min rest between" },
            { id: "w1d3e4", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w1d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes of dynamic stretching" },
            { name: "Circuit", description: "3 rounds of the following exercises" },
            { name: "Cool-down", description: "Static stretching" }
          ],
          exercises: [
            { id: "w1d5e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w1d5e2", name: "Pull-ups", type: "strength", defaultSets: 3, defaultReps: 10, notes: "or until failure" },
            { id: "w1d5e3", name: "Supine leg lifts", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w1d5e4", name: "Inverted rows", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w1d5e5", name: "Kettlebell halos", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating sides" },
            { id: "w1d5e6", name: "Dead hang", type: "timed", defaultSets: 3, notes: "until failure" },
            { id: "w1d5e7", name: "Dumbbell wrist curls", type: "strength", defaultSets: 3, defaultReps: 12, notes: "each side, light weight" },
            { id: "w1d5e8", name: "Dumbbell farmer carry", type: "timed", defaultSets: 3, defaultTime: 1, notes: "light weight" }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Longer Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "4 miles at a moderate pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w1d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w1d6e2", name: "Moderate pace run", type: "cardio", defaultDistance: 4, defaultUnit: "mi" },
            { id: "w1d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 2
    {
      weekNumber: 2,
      title: "Building Week",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Endurance Running with Intervals",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "1 mile steady, then 2 miles alternating 1 min fast/1 min slow" },
            { name: "Cool-down", description: "5-10 minutes walking and stretching" }
          ],
          exercises: [
            { id: "w2d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w2d1e2", name: "Steady mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w2d1e3", name: "Interval miles (1 min fast/1 min slow)", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w2d1e4", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching, skipping, walking lunges" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Static stretching" }
          ],
          exercises: [
            { id: "w2d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w2d2e2", name: "Dumbbell deadlifts", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w2d2e3", name: "Dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w2d2e4", name: "Single-leg unweighted deadlifts", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w2d2e5", name: "Dumbbell shoulder press", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w2d2e6", name: "Bent-knee calf raise on leg press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg, light weight" },
            { id: "w2d2e7", name: "Skull crushers", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w2d2e8", name: "Bear crawls", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Hill Sprints and Lower-Body Muscular Endurance",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "Hill sprints followed by stairmaster/bleachers" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w2d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w2d3e2", name: "30-second hill sprints (max effort)", type: "cardio", defaultSets: 8, notes: "90 sec rest, walk back down" },
            { id: "w2d3e3", name: "Stairmaster or bleachers", type: "cardio", defaultTime: 15, notes: "slow/walking pace" },
            { id: "w2d3e4", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w2d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2-mile jog" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w2d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w2d5e2", name: "Pull-ups", type: "strength", defaultSets: 3, defaultReps: 10, notes: "or until failure" },
            { id: "w2d5e3", name: "Supine leg lifts", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w2d5e4", name: "Inverted rows", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w2d5e5", name: "Standing single-arm kettlebell marches", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating sides" },
            { id: "w2d5e6", name: "Dead hang", type: "timed", defaultSets: 3, notes: "until failure" },
            { id: "w2d5e7", name: "Dumbbell wrist curls", type: "strength", defaultSets: 3, defaultReps: 12, notes: "each side, light weight" },
            { id: "w2d5e8", name: "Dead ball over-the-shoulder throws", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run with Obstacles",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "6 miles at moderate pace, stopping to do 15 burpees every mile" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w2d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w2d6e2", name: "Long run with burpees", type: "cardio", defaultDistance: 6, defaultUnit: "mi", notes: "15 burpees every mile" },
            { id: "w2d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 3
    {
      weekNumber: 3,
      title: "Intensity Week",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Tempo Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "3 miles at a comfortably hard pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w3d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w3d1e2", name: "Tempo run", type: "cardio", defaultDistance: 3, defaultUnit: "mi", notes: "comfortably hard pace" },
            { id: "w3d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes of dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w3d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w3d2e2", name: "Jump squats", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w3d2e3", name: "Push-ups with resistance band", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w3d2e4", name: "Walking lunges", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg, light weight" },
            { id: "w3d2e5", name: "Supine dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w3d2e6", name: "Single-leg pistol squats with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating" },
            { id: "w3d2e7", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w3d2e8", name: "Burpees", type: "strength", defaultSets: 3, defaultReps: 5 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Interval Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "10 x 200m repeats at 75% effort with 2 min rest" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w3d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w3d3e2", name: "200m repeats (75% effort)", type: "cardio", defaultSets: 10, notes: "2 min rest or 100m walk between" },
            { id: "w3d3e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w3d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1-mile jog" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w3d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w3d5e2", name: "Standing bent-over double-arm dumbbell row", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w3d5e3", name: "Med ball sit-up wall throws", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w3d5e4", name: "Supine dumbbell pull-overs", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w3d5e5", name: "Inchworms", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w3d5e6", name: "Dumbbell shoulder shrugs", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w3d5e7", name: "Monkey bars or dead hang", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w3d5e8", name: "Burpees", type: "strength", defaultSets: 3, defaultReps: 5 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long and Steady Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 minutes easy jog with dynamic stretches" },
            { name: "Workout", description: "8 miles total at a moderate, steady pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w3d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w3d6e2", name: "Long steady run", type: "cardio", defaultDistance: 8, defaultUnit: "mi" },
            { id: "w3d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 4
    {
      weekNumber: 4,
      title: "Peak Week 1",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Fartlek Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "3 miles total with 1 min fast/2 min slow intervals" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w4d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w4d1e2", name: "Fartlek run (1 min fast/2 min slow)", type: "cardio", defaultDistance: 3, defaultUnit: "mi" },
            { id: "w4d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w4d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w4d2e2", name: "Squat to overhead dumbbell press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w4d2e3", name: "Dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w4d2e4", name: "Single-leg deadlifts with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w4d2e5", name: "Dumbbell shoulder press", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w4d2e6", name: "Bent-knee calf raise on leg press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg, light weight" },
            { id: "w4d2e7", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w4d2e8", name: "Bear crawls", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Obstacle Course Simulation",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "Run/crawl/burpee circuit simulating race conditions" },
            { name: "Cool-down", description: "5-10 minutes walking and stretching" }
          ],
          exercises: [
            { id: "w4d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w4d3e2", name: "Run 1 mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w4d3e3", name: "Burpees", type: "strength", defaultReps: 15 },
            { id: "w4d3e4", name: "Run 400m", type: "cardio" },
            { id: "w4d3e5", name: "Bear crawl", type: "timed", defaultTime: 1 },
            { id: "w4d3e6", name: "Run 400m", type: "cardio" },
            { id: "w4d3e7", name: "Burpees", type: "strength", defaultReps: 15 },
            { id: "w4d3e8", name: "Run 400m", type: "cardio" },
            { id: "w4d3e9", name: "Bear crawl", type: "timed", defaultTime: 1 },
            { id: "w4d3e10", name: "Run 1.25 miles", type: "cardio", defaultDistance: 1.25, defaultUnit: "mi" },
            { id: "w4d3e11", name: "Rope climb (if available)", type: "strength", defaultReps: 3, notes: "climb to top 3 times" },
            { id: "w4d3e12", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w4d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w4d5e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w4d5e2", name: "Pull-ups", type: "strength", defaultSets: 3, defaultReps: 10, notes: "or until failure" },
            { id: "w4d5e3", name: "Supine leg lifts", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w4d5e4", name: "Inverted rows", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w4d5e5", name: "Standing single-arm kettlebell marches", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating sides" },
            { id: "w4d5e6", name: "Dead hang", type: "timed", defaultSets: 3, notes: "until failure" },
            { id: "w4d5e7", name: "Dumbbell wrist curls", type: "strength", defaultSets: 3, defaultReps: 12, notes: "each side, light weight" },
            { id: "w4d5e8", name: "Dead ball over-the-shoulder throws", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "9 miles at a moderate pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w4d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w4d6e2", name: "Long run", type: "cardio", defaultDistance: 9, defaultUnit: "mi" },
            { id: "w4d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 5 - DELOAD
    {
      weekNumber: 5,
      title: "Deload Week",
      description: "A week to reduce training load and intensity to recover from four weeks of commitment",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Endurance Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "2 miles at a steady pace" },
            { name: "Cool-down", description: "5-10 minute walk and stretching" }
          ],
          exercises: [
            { id: "w5d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w5d1e2", name: "Steady pace run", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w5d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes of dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w5d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w5d2e2", name: "Jump squats", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w5d2e3", name: "Push-ups with resistance band", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w5d2e4", name: "Walking lunges", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg, light weight" },
            { id: "w5d2e5", name: "Supine dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w5d2e6", name: "Single-leg pistol squats with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating" },
            { id: "w5d2e7", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w5d2e8", name: "Burpees", type: "strength", defaultSets: 3, defaultReps: 5 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Interval Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "5 x 200m repeats at 50% effort" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w5d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w5d3e2", name: "200m repeats (50% effort)", type: "cardio", defaultSets: 5, notes: "2 min rest or 100m walk between" },
            { id: "w5d3e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w5d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1-mile jog" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w5d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w5d5e2", name: "Standing bent-over double-arm dumbbell row", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w5d5e3", name: "Med ball sit-up wall throws", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w5d5e4", name: "Supine dumbbell pull-overs", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w5d5e5", name: "Inchworms", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w5d5e6", name: "Dumbbell shoulder shrugs", type: "strength", defaultSets: 3, defaultReps: 12, notes: "light weight" },
            { id: "w5d5e7", name: "Monkey bars or dead hang", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w5d5e8", name: "Burpees", type: "strength", defaultSets: 3, defaultReps: 5 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Longer Endurance",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "1 hour of moderate hiking" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w5d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w5d6e2", name: "Moderate hiking", type: "cardio", defaultTime: 60 },
            { id: "w5d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 6
    {
      weekNumber: 6,
      title: "Building Back",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Endurance Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "4 miles at a moderate pace" },
            { name: "Cool-down", description: "5-10 minutes walking and stretching" }
          ],
          exercises: [
            { id: "w6d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w6d1e2", name: "Moderate pace run", type: "cardio", defaultDistance: 4, defaultUnit: "mi" },
            { id: "w6d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w6d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w6d2e2", name: "Squat to overhead dumbbell press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w6d2e3", name: "Dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w6d2e4", name: "Single-leg deadlifts with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w6d2e5", name: "Dumbbell shoulder press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w6d2e6", name: "Bent-knee calf raise on leg press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w6d2e7", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w6d2e8", name: "Bear crawls", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Endurance and Hill Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "2 miles moderate + hill sprints" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w6d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w6d3e2", name: "Moderate pace run", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w6d3e3", name: "30-second hill sprints (max effort)", type: "cardio", defaultSets: 4, notes: "90 sec rest, walk back down" },
            { id: "w6d3e4", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w6d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes of dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w6d5e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w6d5e2", name: "Standing bent-over double-arm dumbbell row", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w6d5e3", name: "Med ball sit-up wall throws", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w6d5e4", name: "Supine dumbbell pull-overs", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w6d5e5", name: "Inchworms", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w6d5e6", name: "Dumbbell shoulder shrugs", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w6d5e7", name: "Monkey bars or dead hang", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w6d5e8", name: "Farmer carries", type: "timed", defaultSets: 3, defaultTime: 1, notes: "moderate weight" }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long and Steady Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "10 miles at a comfortable pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w6d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w6d6e2", name: "Long steady run", type: "cardio", defaultDistance: 10, defaultUnit: "mi" },
            { id: "w6d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 7
    {
      weekNumber: 7,
      title: "Peak Week 2",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Tempo Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "3 miles at a comfortably hard pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w7d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w7d1e2", name: "Tempo run", type: "cardio", defaultDistance: 3, defaultUnit: "mi", notes: "comfortably hard pace" },
            { id: "w7d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w7d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w7d2e2", name: "Squat to overhead dumbbell press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w7d2e3", name: "Dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w7d2e4", name: "Single-leg deadlifts with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w7d2e5", name: "Dumbbell shoulder press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w7d2e6", name: "Bent-knee calf raise on leg press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg, moderate weight" },
            { id: "w7d2e7", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w7d2e8", name: "Bear crawls", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Interval Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "3 miles with 200m sprints between each mile" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w7d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w7d3e2", name: "Mile run with sprints", type: "cardio", defaultDistance: 3, defaultUnit: "mi", notes: "200m sprint at 75% after each mile, 2 min rest" },
            { id: "w7d3e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w7d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2-mile jog" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w7d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w7d5e2", name: "Pull-ups", type: "strength", defaultSets: 3, defaultReps: 10, notes: "or until failure" },
            { id: "w7d5e3", name: "Supine leg lifts", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w7d5e4", name: "Inverted rows", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w7d5e5", name: "Standing single-arm kettlebell marches", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating sides" },
            { id: "w7d5e6", name: "Dead hang", type: "timed", defaultSets: 3, notes: "until failure" },
            { id: "w7d5e7", name: "Dumbbell wrist curls", type: "strength", defaultSets: 3, defaultReps: 12, notes: "each side, moderate weight" },
            { id: "w7d5e8", name: "Ball slams", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w7d5e9", name: "Farmer carries", type: "timed", defaultSets: 3, defaultTime: 1, notes: "moderate weight" }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "10 miles at a comfortable pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w7d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w7d6e2", name: "Long run", type: "cardio", defaultDistance: 10, defaultUnit: "mi" },
            { id: "w7d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 8
    {
      weekNumber: 8,
      title: "Peak Week 3",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Fartlek Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "4 miles total with 1 min fast/2 min slow intervals" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w8d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w8d1e2", name: "Fartlek run (1 min fast/2 min slow)", type: "cardio", defaultDistance: 4, defaultUnit: "mi" },
            { id: "w8d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes of dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w8d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w8d2e2", name: "Jump squats", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w8d2e3", name: "Push-ups with resistance band", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w8d2e4", name: "Walking lunges", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg, moderate weight" },
            { id: "w8d2e5", name: "Supine dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w8d2e6", name: "Single-leg pistol squats with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating" },
            { id: "w8d2e7", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w8d2e8", name: "Burpees", type: "strength", defaultSets: 3, defaultReps: 5 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Obstacle Course Simulation",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "Run/crawl/burpee circuit simulating race conditions" },
            { name: "Cool-down", description: "5-10 minutes walking and stretching" }
          ],
          exercises: [
            { id: "w8d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w8d3e2", name: "Run 1 mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w8d3e3", name: "Burpees", type: "strength", defaultReps: 15 },
            { id: "w8d3e4", name: "Run 400m", type: "cardio" },
            { id: "w8d3e5", name: "Bear crawl", type: "timed", defaultTime: 1 },
            { id: "w8d3e6", name: "Run 400m", type: "cardio" },
            { id: "w8d3e7", name: "Burpees", type: "strength", defaultReps: 15 },
            { id: "w8d3e8", name: "Run 400m", type: "cardio" },
            { id: "w8d3e9", name: "Bear crawl", type: "timed", defaultTime: 1 },
            { id: "w8d3e10", name: "Run 1.25 miles", type: "cardio", defaultDistance: 1.25, defaultUnit: "mi" },
            { id: "w8d3e11", name: "Rope climb (if available)", type: "strength", defaultReps: 3, notes: "climb to top 3 times" },
            { id: "w8d3e12", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w8d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2-mile jog" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w8d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w8d5e2", name: "Pull-ups", type: "strength", defaultSets: 3, defaultReps: 10, notes: "or until failure" },
            { id: "w8d5e3", name: "Supine leg lifts", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w8d5e4", name: "Inverted rows", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w8d5e5", name: "Standing single-arm kettlebell marches", type: "strength", defaultSets: 3, defaultReps: 12, notes: "alternating sides" },
            { id: "w8d5e6", name: "Dead hang", type: "timed", defaultSets: 3, notes: "until failure" },
            { id: "w8d5e7", name: "Dumbbell wrist curls", type: "strength", defaultSets: 3, defaultReps: 12, notes: "each side, moderate weight" },
            { id: "w8d5e8", name: "Dead ball over-the-shoulder throws", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "11 miles" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w8d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w8d6e2", name: "Long run", type: "cardio", defaultDistance: 11, defaultUnit: "mi" },
            { id: "w8d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // WEEKS 9-12: Taper phase (following similar pattern with decreasing volume)
    // Week 9: Peak mileage maintained
    {
      weekNumber: 9,
      title: "Final Push",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Tempo Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "4 miles at a comfortably hard pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w9d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w9d1e2", name: "Tempo run", type: "cardio", defaultDistance: 4, defaultUnit: "mi", notes: "comfortably hard pace" },
            { id: "w9d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Training (Push & Lower)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w9d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w9d2e2", name: "Squat to overhead dumbbell press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w9d2e3", name: "Dumbbell chest press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w9d2e4", name: "Single-leg deadlifts with kettlebell", type: "strength", defaultSets: 3, defaultReps: 12, notes: "per leg" },
            { id: "w9d2e5", name: "Dumbbell shoulder press", type: "strength", defaultSets: 3, defaultReps: 12, notes: "moderate weight" },
            { id: "w9d2e6", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w9d2e7", name: "Bear crawls", type: "timed", defaultSets: 3, defaultTime: 1 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Interval Running",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "8 x 400m repeats at 80% effort" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w9d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w9d3e2", name: "400m repeats (80% effort)", type: "cardio", defaultSets: 8, notes: "2 min rest between" },
            { id: "w9d3e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w9d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Training (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2-mile jog" },
            { name: "Circuit", description: "3 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w9d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w9d5e2", name: "Pull-ups", type: "strength", defaultSets: 3, defaultReps: 10, notes: "or until failure" },
            { id: "w9d5e3", name: "Supine leg lifts", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w9d5e4", name: "Inverted rows", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w9d5e5", name: "Dead hang", type: "timed", defaultSets: 3, notes: "until failure" },
            { id: "w9d5e6", name: "Farmer carries", type: "timed", defaultSets: 3, defaultTime: 1, notes: "moderate weight" }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "12 miles at a comfortable pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w9d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w9d6e2", name: "Long run", type: "cardio", defaultDistance: 12, defaultUnit: "mi" },
            { id: "w9d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // Week 10: Beginning taper
    {
      weekNumber: 10,
      title: "Taper Week 1",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Easy Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "3 miles at an easy pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w10d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w10d1e2", name: "Easy run", type: "cardio", defaultDistance: 3, defaultUnit: "mi" },
            { id: "w10d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Light Strength Training",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 minutes dynamic stretching" },
            { name: "Circuit", description: "2 rounds (reduced volume)" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w10d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w10d2e2", name: "Squats", type: "strength", defaultSets: 2, defaultReps: 12, notes: "light weight" },
            { id: "w10d2e3", name: "Push-ups", type: "strength", defaultSets: 2, defaultReps: 12 },
            { id: "w10d2e4", name: "Lunges", type: "strength", defaultSets: 2, defaultReps: 12, notes: "per leg" },
            { id: "w10d2e5", name: "Tricep dips", type: "strength", defaultSets: 2, defaultReps: 12 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Short Intervals",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "4 x 200m at 70% effort" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w10d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w10d3e2", name: "200m repeats (70% effort)", type: "cardio", defaultSets: 4, notes: "2 min rest between" },
            { id: "w10d3e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Light Activity",
          type: "rest",
          sections: [
            { name: "Optional", description: "Light activity like yoga, stretching, or a gentle walk" }
          ],
          exercises: [
            { id: "w10d4e1", name: "Light activity (optional)", type: "timed", defaultTime: 30, notes: "yoga, stretching, or walk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Light Strength (Pull & Core)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1-mile jog" },
            { name: "Circuit", description: "2 rounds" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w10d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w10d5e2", name: "Pull-ups", type: "strength", defaultSets: 2, defaultReps: 8 },
            { id: "w10d5e3", name: "Inverted rows", type: "strength", defaultSets: 2, defaultReps: 10 },
            { id: "w10d5e4", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.5 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Medium Long Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10-minute jog with dynamic stretches" },
            { name: "Workout", description: "8 miles at a comfortable pace" },
            { name: "Cool-down", description: "5-10 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w10d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w10d6e2", name: "Long run", type: "cardio", defaultDistance: 8, defaultUnit: "mi" },
            { id: "w10d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // Week 11: Deeper taper
    {
      weekNumber: 11,
      title: "Taper Week 2",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Easy Run",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "5-minute easy jog with dynamic stretches" },
            { name: "Workout", description: "2 miles at an easy pace" },
            { name: "Cool-down", description: "5 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w11d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 5 },
            { id: "w11d1e2", name: "Easy run", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w11d1e3", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Maintenance Strength",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5 minutes dynamic stretching" },
            { name: "Circuit", description: "2 rounds, light weight" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w11d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 5 },
            { id: "w11d2e2", name: "Squats", type: "strength", defaultSets: 2, defaultReps: 10, notes: "bodyweight" },
            { id: "w11d2e3", name: "Push-ups", type: "strength", defaultSets: 2, defaultReps: 10 },
            { id: "w11d2e4", name: "Pull-ups", type: "strength", defaultSets: 2, defaultReps: 6 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Easy Jog with Strides",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "5-minute easy jog" },
            { name: "Workout", description: "1.5 miles easy with 4 x 100m strides" },
            { name: "Cool-down", description: "5 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w11d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 5 },
            { id: "w11d3e2", name: "Easy jog with strides", type: "cardio", defaultDistance: 1.5, defaultUnit: "mi", notes: "include 4 x 100m strides" },
            { id: "w11d3e3", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day - stay off your feet" }
          ],
          exercises: []
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Shakeout Run",
          type: "cardio",
          sections: [
            { name: "Workout", description: "20 minutes very easy jogging" }
          ],
          exercises: [
            { id: "w11d5e1", name: "Easy shakeout jog", type: "cardio", defaultTime: 20 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Short Easy Run",
          type: "cardio",
          sections: [
            { name: "Workout", description: "4 miles at an easy pace" },
            { name: "Cool-down", description: "5 minutes of walking and stretching" }
          ],
          exercises: [
            { id: "w11d6e1", name: "Easy run", type: "cardio", defaultDistance: 4, defaultUnit: "mi" },
            { id: "w11d6e2", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day for recovery" }
          ],
          exercises: []
        }
      ]
    },

    // Week 12: Race week
    {
      weekNumber: 12,
      title: "Race Week",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Easy Shakeout",
          type: "cardio",
          sections: [
            { name: "Workout", description: "15-20 minutes very easy jogging" }
          ],
          exercises: [
            { id: "w12d1e1", name: "Easy shakeout jog", type: "cardio", defaultTime: 20 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Rest or Light Walk",
          type: "rest",
          sections: [
            { name: "Optional", description: "Short walk or complete rest" }
          ],
          exercises: [
            { id: "w12d2e1", name: "Light walk (optional)", type: "cardio", defaultTime: 20 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Short Easy Jog",
          type: "cardio",
          sections: [
            { name: "Workout", description: "10-15 minutes very easy with a few strides" }
          ],
          exercises: [
            { id: "w12d3e1", name: "Easy jog with strides", type: "cardio", defaultTime: 15, notes: "include 2-3 short strides" }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Complete rest - hydrate and eat well" }
          ],
          exercises: []
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Rest or Light Walk",
          type: "rest",
          sections: [
            { name: "Optional", description: "Short 10-minute walk to stay loose" }
          ],
          exercises: [
            { id: "w12d5e1", name: "Light walk (optional)", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "RACE DAY",
          type: "race",
          sections: [
            { name: "Race", description: "Spartan Beast - 21K / 30 obstacles. You're ready!" }
          ],
          exercises: [
            { id: "w12d6e1", name: "Spartan Beast Race", type: "race", notes: "21K with 30 obstacles" }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Recovery",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Rest and recover - you did it!" }
          ],
          exercises: []
        }
      ]
    }
  ]
};

// Helper function to get a specific day's workout
function getWorkout(weekNumber, dayNumber) {
  const week = trainingPlan.weeks.find(w => w.weekNumber === weekNumber);
  if (!week) return null;
  return week.days.find(d => d.dayNumber === dayNumber);
}

// Helper function to get all exercises across all weeks (for browse functionality)
function getAllExercises() {
  const exercises = [];
  trainingPlan.weeks.forEach(week => {
    week.days.forEach(day => {
      day.exercises.forEach(exercise => {
        exercises.push({
          ...exercise,
          weekNumber: week.weekNumber,
          dayNumber: day.dayNumber,
          dayTitle: day.title
        });
      });
    });
  });
  return exercises;
}

// Helper function to search exercises by name
function searchExercises(query) {
  const allExercises = getAllExercises();
  const lowerQuery = query.toLowerCase();
  return allExercises.filter(e => e.name.toLowerCase().includes(lowerQuery));
}
