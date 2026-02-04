// 12-Week Spartan Beast Training Plan
// Based on the Official Spartan Beast Training Plan

const trainingPlan = {
  weeks: [
    // WEEK 1
    {
      weekNumber: 1,
      title: "Foundation Week",
      focus: "Establish baseline fitness, movement patterns, and grip foundation",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Easy Run + Grip Foundation",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min dynamic stretching (leg swings, arm circles, walking lunges)" },
            { name: "Run", description: "3 miles at conversational pace (Zone 2)" },
            { name: "Post-Run Grip Work", description: "Dead hang, farmer carry, towel wringing" },
            { name: "Cool-down", description: "5 min walk + static stretching" }
          ],
          exercises: [
            { id: "w1d1e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10, notes: "leg swings, arm circles, walking lunges" },
            { id: "w1d1e2", name: "Easy run (Zone 2)", type: "cardio", defaultDistance: 3, defaultUnit: "mi", notes: "conversational pace" },
            { id: "w1d1e3", name: "Dead hang", type: "timed", defaultSets: 3, defaultTime: 0.5, notes: "30-60 sec, max time" },
            { id: "w1d1e4", name: "Farmer carry", type: "timed", defaultSets: 3, defaultTime: 1, notes: "1 min each" },
            { id: "w1d1e5", name: "Towel wringing", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec each direction" },
            { id: "w1d1e6", name: "Cool-down walk + stretching", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Push/Lower + Core",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 min dynamic movement" },
            { name: "Circuit", description: "4 rounds of the following exercises" },
            { name: "Finisher", description: "20 burpees for time" },
            { name: "Cool-down", description: "10 min stretching" }
          ],
          exercises: [
            { id: "w1d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 10 },
            { id: "w1d2e2", name: "Goblet squats", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w1d2e3", name: "Push-ups", type: "strength", defaultSets: 4, defaultReps: 15 },
            { id: "w1d2e4", name: "Walking lunges", type: "strength", defaultSets: 4, defaultReps: 10, notes: "each leg" },
            { id: "w1d2e5", name: "Plank", type: "timed", defaultSets: 4, defaultTime: 0.75, notes: "45 sec" },
            { id: "w1d2e6", name: "Box step-ups", type: "strength", defaultSets: 4, defaultReps: 10, notes: "each leg" },
            { id: "w1d2e7", name: "Tricep dips", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w1d2e8", name: "Burpees (finisher)", type: "strength", defaultReps: 20, notes: "for time" },
            { id: "w1d2e9", name: "Cool-down stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Trail/Hill Work + Obstacle Prep",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Set", description: "Hill repeats and stairmaster/stadium stairs" },
            { name: "Obstacle Skills", description: "Wall climb/box jumps, bear crawls, burpee broad jumps" },
            { name: "Cool-down", description: "5-10 min walk" }
          ],
          exercises: [
            { id: "w1d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w1d3e2", name: "Hill repeats (2 min hard effort)", type: "cardio", defaultSets: 4, notes: "walk down recovery" },
            { id: "w1d3e3", name: "Stairmaster/stadium stairs", type: "cardio", defaultTime: 15 },
            { id: "w1d3e4", name: "Wall climb/box jumps", type: "strength", defaultSets: 3, defaultReps: 8 },
            { id: "w1d3e5", name: "Bear crawls", type: "timed", defaultSets: 4, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w1d3e6", name: "Burpee broad jumps", type: "strength", defaultSets: 3, defaultReps: 5 },
            { id: "w1d3e7", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Mobility",
          type: "rest",
          sections: [
            { name: "Recovery", description: "30-45 min yoga/stretching, foam rolling, hip mobility, shoulder mobility" },
            { name: "Optional", description: "Light 20 min walk" },
            { name: "Mental Training", description: "10 min visualization of race obstacles" }
          ],
          exercises: [
            { id: "w1d4e1", name: "Yoga/stretching", type: "timed", defaultTime: 45 },
            { id: "w1d4e2", name: "Foam rolling", type: "timed", defaultTime: 10 },
            { id: "w1d4e3", name: "Hip mobility (90/90, pigeon, frog)", type: "timed", defaultTime: 10 },
            { id: "w1d4e4", name: "Shoulder mobility (wall slides, band pull-aparts)", type: "timed", defaultTime: 10 },
            { id: "w1d4e5", name: "Light walk (optional)", type: "cardio", defaultTime: 20 },
            { id: "w1d4e6", name: "Visualization of race obstacles", type: "timed", defaultTime: 10, notes: "mental training" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Pull/Grip Focus",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1 mile easy jog + dynamic stretching" },
            { name: "Main Circuit", description: "4 rounds of pull and grip exercises" },
            { name: "Grip Finisher", description: "Plate pinches and farmer carry" },
            { name: "Cool-down", description: "Static stretching" }
          ],
          exercises: [
            { id: "w1d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w1d5e2", name: "Dynamic stretching", type: "timed", defaultTime: 5 },
            { id: "w1d5e3", name: "Pull-ups", type: "strength", defaultSets: 4, notes: "max reps each set" },
            { id: "w1d5e4", name: "Inverted rows", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w1d5e5", name: "Dumbbell rows", type: "strength", defaultSets: 4, defaultReps: 12, notes: "each arm" },
            { id: "w1d5e6", name: "Dead hang", type: "timed", defaultSets: 4, notes: "max time each set" },
            { id: "w1d5e7", name: "Wrist curls", type: "strength", defaultSets: 4, defaultReps: 15, notes: "each direction" },
            { id: "w1d5e8", name: "Plate pinches", type: "timed", defaultSets: 3, defaultTime: 0.5, notes: "30 sec holds" },
            { id: "w1d5e9", name: "Farmer carry", type: "cardio", defaultSets: 2, notes: "200m each" },
            { id: "w1d5e10", name: "Static stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run with Obstacle Simulation",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog + dynamic stretches" },
            { name: "Main Workout", description: "5 miles total, every mile: 10 burpees + 30 sec dead hang, include trail terrain, practice race nutrition" },
            { name: "Cool-down", description: "10 min walk + stretching" },
            { name: "Post-Run", description: "5 min grip work" }
          ],
          exercises: [
            { id: "w1d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w1d6e2", name: "Dynamic stretches", type: "timed", defaultTime: 5 },
            { id: "w1d6e3", name: "Long run with obstacles", type: "cardio", defaultDistance: 5, defaultUnit: "mi", notes: "every mile: 10 burpees + 30 sec dead hang, trail terrain, practice race nutrition" },
            { id: "w1d6e4", name: "Cool-down walk + stretching", type: "cardio", defaultTime: 10 },
            { id: "w1d6e5", name: "Post-run grip work", type: "timed", defaultTime: 5 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest day - no training" },
            { name: "Focus", description: "Sleep, nutrition, hydration" },
            { name: "Optional", description: "Light walk if feeling good" },
            { name: "Prep", description: "Meal prep for the week ahead" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 2
    {
      weekNumber: 2,
      title: "Building Week",
      focus: "Build aerobic base, introduce weighted carries, increase grip volume",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Tempo Run + Grip Endurance",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog + dynamic stretches" },
            { name: "Main Set", description: "1 mile easy, 2 miles at tempo pace (Zone 3), 1 mile easy" },
            { name: "Grip Work", description: "Dead hang 4x max (45+ sec), towel pull-ups/hangs 3x max, bucket carry 2x100m (40-50 lbs)" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w2d1e1", name: "Easy jog warm-up + dynamic stretches", type: "cardio", defaultTime: 10 },
            { id: "w2d1e2", name: "Easy mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi", notes: "easy pace" },
            { id: "w2d1e3", name: "Tempo miles (Zone 3)", type: "cardio", defaultDistance: 2, defaultUnit: "mi", notes: "tempo pace" },
            { id: "w2d1e4", name: "Easy mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi", notes: "easy pace" },
            { id: "w2d1e5", name: "Dead hang", type: "timed", defaultSets: 4, notes: "max time, aim for 45+ sec" },
            { id: "w2d1e6", name: "Towel pull-ups/hangs", type: "strength", defaultSets: 3, notes: "max reps" },
            { id: "w2d1e7", name: "Bucket carry", type: "cardio", defaultSets: 2, notes: "100m each, 40-50 lbs" },
            { id: "w2d1e8", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Push/Lower (Loaded)",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "5-10 min dynamic movement" },
            { name: "Main Set", description: "4 rounds of push and lower body exercises" },
            { name: "Finisher", description: "3x1 min bear crawls" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w2d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 10 },
            { id: "w2d2e2", name: "DB deadlifts", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w2d2e3", name: "DB chest press", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w2d2e4", name: "Bulgarian split squats", type: "strength", defaultSets: 4, defaultReps: 10, notes: "each leg" },
            { id: "w2d2e5", name: "Overhead press", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w2d2e6", name: "Calf raises", type: "strength", defaultSets: 4, defaultReps: 15, notes: "each leg" },
            { id: "w2d2e7", name: "Skull crushers", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w2d2e8", name: "Bear crawls (finisher)", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w2d2e9", name: "Cool-down stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Hill Intervals + Carries",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Set", description: "6x30 sec hill sprints (max effort, walk down, 2 min rest between)" },
            { name: "Carry Circuit", description: "3 rounds: sandbag carry 100m, farmer carry 100m, bear crawl 50m" },
            { name: "Cool-down", description: "10 min easy walk + stretching" }
          ],
          exercises: [
            { id: "w2d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w2d3e2", name: "Hill sprints (30 sec max effort)", type: "cardio", defaultSets: 6, notes: "walk down, 2 min rest between" },
            { id: "w2d3e3", name: "Sandbag carry", type: "cardio", defaultSets: 3, notes: "100m each" },
            { id: "w2d3e4", name: "Farmer carry", type: "cardio", defaultSets: 3, notes: "100m each" },
            { id: "w2d3e5", name: "Bear crawl", type: "timed", defaultSets: 3, notes: "50m each" },
            { id: "w2d3e6", name: "Cool-down walk + stretching", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Mental Training",
          type: "rest",
          sections: [
            { name: "Recovery", description: "45 min recovery: 20 min yoga/mobility, foam rolling, band work for shoulders/hips" },
            { name: "Mental Prep", description: "Study Beast obstacle videos, visualize obstacles, positive self-talk scripts" }
          ],
          exercises: [
            { id: "w2d4e1", name: "Yoga/mobility", type: "timed", defaultTime: 20 },
            { id: "w2d4e2", name: "Foam rolling", type: "timed", defaultTime: 15 },
            { id: "w2d4e3", name: "Band work (shoulders/hips)", type: "timed", defaultTime: 10 },
            { id: "w2d4e4", name: "Mental training (obstacle videos/visualization)", type: "timed", defaultTime: 15, notes: "study Beast obstacle videos, visualize obstacles, positive self-talk" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Pull/Grip Intensive",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1.5 mile easy jog" },
            { name: "Main Circuit", description: "4 rounds of pull and grip exercises" },
            { name: "Grip Gauntlet", description: "Dead hang max -> immediately farmer carry 1 min -> immediately plate pinch 30 sec, rest 2 min, repeat 2x" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w2d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 1.5, defaultUnit: "mi" },
            { id: "w2d5e2", name: "Pull-ups", type: "strength", defaultSets: 4, notes: "max reps" },
            { id: "w2d5e3", name: "Hanging leg raises", type: "strength", defaultSets: 4, defaultReps: 10 },
            { id: "w2d5e4", name: "Lat pulldowns", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w2d5e5", name: "KB swings", type: "strength", defaultSets: 4, defaultReps: 15 },
            { id: "w2d5e6", name: "Face pulls", type: "strength", defaultSets: 4, defaultReps: 15 },
            { id: "w2d5e7", name: "Grip Gauntlet: Dead hang max", type: "timed", defaultSets: 2, notes: "immediately to farmer carry" },
            { id: "w2d5e8", name: "Grip Gauntlet: Farmer carry", type: "timed", defaultSets: 2, defaultTime: 1, notes: "immediately to plate pinch" },
            { id: "w2d5e9", name: "Grip Gauntlet: Plate pinch", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec, rest 2 min between rounds" },
            { id: "w2d5e10", name: "Cool-down stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run + Terrain Training",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Workout", description: "6-7 miles, trail/uneven terrain, every 1.5 miles: 15 burpees + 45 sec dead hang, rope climbs if available, run through water/mud if possible" },
            { name: "Cool-down", description: "10 min walk" },
            { name: "Post-Run", description: "Sandbag carry 3x50m" }
          ],
          exercises: [
            { id: "w2d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w2d6e2", name: "Long run with obstacles", type: "cardio", defaultDistance: 6.5, defaultUnit: "mi", notes: "trail/uneven terrain, every 1.5 miles: 15 burpees + 45 sec dead hang, rope climbs if available" },
            { id: "w2d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 },
            { id: "w2d6e4", name: "Sandbag carry (post-run)", type: "cardio", defaultSets: 3, notes: "50m each" }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest, 8+ hours sleep, hydration focus" },
            { name: "Optional", description: "Light stretching if desired" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 3
    {
      weekNumber: 3,
      title: "Intensity Week",
      focus: "Increase intensity and volume, add obstacle-specific drills",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Interval Run + Grip",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog + dynamic stretches" },
            { name: "Main Set", description: "8x400m at 80% effort, 90 sec recovery" },
            { name: "Grip Work", description: "Monkey bar traverse 3x across and back, weighted dead hang (5-10 lb vest) 3x max, rope climb 3 OR towel pull-ups 3x max" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w3d1e1", name: "Easy jog warm-up + dynamic stretches", type: "cardio", defaultTime: 10 },
            { id: "w3d1e2", name: "400m intervals (80% effort)", type: "cardio", defaultSets: 8, notes: "90 sec recovery between" },
            { id: "w3d1e3", name: "Monkey bar traverse", type: "strength", defaultSets: 3, notes: "across and back" },
            { id: "w3d1e4", name: "Weighted dead hang", type: "timed", defaultSets: 3, notes: "max time, 5-10 lb vest" },
            { id: "w3d1e5", name: "Rope climb OR towel pull-ups", type: "strength", defaultSets: 3, notes: "rope climb 3 or towel pull-ups max" },
            { id: "w3d1e6", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Full Body Power",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement + jumps" },
            { name: "Power Circuit", description: "4 rounds of explosive exercises" },
            { name: "Strength", description: "3 rounds of strength exercises" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w3d2e1", name: "Dynamic movement + jumps warm-up", type: "timed", defaultTime: 10 },
            { id: "w3d2e2", name: "Jump squats", type: "strength", defaultSets: 4, defaultReps: 10 },
            { id: "w3d2e3", name: "Medicine ball slams", type: "strength", defaultSets: 4, defaultReps: 12 },
            { id: "w3d2e4", name: "Box jumps", type: "strength", defaultSets: 4, defaultReps: 8 },
            { id: "w3d2e5", name: "Clap push-ups", type: "strength", defaultSets: 4, defaultReps: 8 },
            { id: "w3d2e6", name: "KB snatches", type: "strength", defaultSets: 4, defaultReps: 8, notes: "each arm" },
            { id: "w3d2e7", name: "Front squats", type: "strength", defaultSets: 3, defaultReps: 8, notes: "heavier weight" },
            { id: "w3d2e8", name: "Single-leg deadlifts", type: "strength", defaultSets: 3, defaultReps: 8, notes: "each leg" },
            { id: "w3d2e9", name: "Dips", type: "strength", defaultSets: 3, defaultReps: 10 },
            { id: "w3d2e10", name: "Cool-down stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "OCR Simulation Day",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "OCR Circuit", description: "Run 800m hard -> 20 burpees -> Run 400m -> Bear crawl 1 min -> Run 400m -> Box jumps/wall climbs 10 -> Run 400m -> Farmer carry 200m -> Run 800m -> Dead hang max + Rope climb x2 -> Run 400m to finish" },
            { name: "Cool-down", description: "10 min walk + stretch" }
          ],
          exercises: [
            { id: "w3d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w3d3e2", name: "Run 800m hard", type: "cardio" },
            { id: "w3d3e3", name: "Burpees", type: "strength", defaultReps: 20 },
            { id: "w3d3e4", name: "Run 400m", type: "cardio" },
            { id: "w3d3e5", name: "Bear crawl", type: "timed", defaultTime: 1 },
            { id: "w3d3e6", name: "Run 400m", type: "cardio" },
            { id: "w3d3e7", name: "Box jumps/wall climbs", type: "strength", defaultReps: 10 },
            { id: "w3d3e8", name: "Run 400m", type: "cardio" },
            { id: "w3d3e9", name: "Farmer carry", type: "cardio", notes: "200m" },
            { id: "w3d3e10", name: "Run 800m", type: "cardio" },
            { id: "w3d3e11", name: "Dead hang max + Rope climb x2", type: "strength", notes: "dead hang max then 2 rope climbs" },
            { id: "w3d3e12", name: "Run 400m to finish", type: "cardio" },
            { id: "w3d3e13", name: "Cool-down walk + stretch", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Technique",
          type: "rest",
          sections: [
            { name: "Recovery", description: "30 min yoga/mobility, foam rolling" },
            { name: "Technique Practice", description: "Low intensity: spear throw practice, balance beam walking, crawling patterns (bear, crab, army)" },
            { name: "Mental", description: "Obstacle strategy planning" }
          ],
          exercises: [
            { id: "w3d4e1", name: "Yoga/mobility", type: "timed", defaultTime: 30 },
            { id: "w3d4e2", name: "Foam rolling", type: "timed", defaultTime: 10 },
            { id: "w3d4e3", name: "Spear throw practice", type: "timed", defaultTime: 10, notes: "low intensity technique" },
            { id: "w3d4e4", name: "Balance beam walking", type: "timed", defaultTime: 5, notes: "low intensity technique" },
            { id: "w3d4e5", name: "Crawling patterns (bear, crab, army)", type: "timed", defaultTime: 10, notes: "low intensity technique" },
            { id: "w3d4e6", name: "Mental: obstacle strategy planning", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Pull Focus + Grip Max",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2 mile easy jog" },
            { name: "Pull Strength", description: "5 sets of weighted pull-ups 5 (or BW max), bent-over rows 8 (heavy), face pulls 12" },
            { name: "Grip Challenge", description: "Rope climb max in 5 min, dead hang ladder (30s, 45s, 60s, 45s, 30s), farmer carry 3x100m (heavy)" },
            { name: "Finisher", description: "30 burpees for time" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w3d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w3d5e2", name: "Weighted pull-ups", type: "strength", defaultSets: 5, defaultReps: 5, notes: "or bodyweight max" },
            { id: "w3d5e3", name: "Bent-over rows", type: "strength", defaultSets: 5, defaultReps: 8, notes: "heavy" },
            { id: "w3d5e4", name: "Face pulls", type: "strength", defaultSets: 5, defaultReps: 12 },
            { id: "w3d5e5", name: "Rope climb (max in 5 min)", type: "timed", defaultTime: 5, notes: "as many climbs as possible" },
            { id: "w3d5e6", name: "Dead hang ladder", type: "timed", notes: "30s, 45s, 60s, 45s, 30s" },
            { id: "w3d5e7", name: "Farmer carry (heavy)", type: "cardio", defaultSets: 3, notes: "100m each, heavy weight" },
            { id: "w3d5e8", name: "Burpees (finisher)", type: "strength", defaultReps: 30, notes: "for time" },
            { id: "w3d5e9", name: "Cool-down stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run Endurance Building",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Workout", description: "8 miles, 2-3 miles trail terrain, every 2 miles: 15 burpees + 1 min plank + 30 sec hang, practice race nutrition (intake every 45 min)" },
            { name: "Cool-down", description: "10 min walk" },
            { name: "Post-Run", description: "Light grip work" }
          ],
          exercises: [
            { id: "w3d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w3d6e2", name: "Long run with obstacles", type: "cardio", defaultDistance: 8, defaultUnit: "mi", notes: "2-3 miles trail, every 2 miles: 15 burpees + 1 min plank + 30 sec hang, practice race nutrition" },
            { id: "w3d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 10 },
            { id: "w3d6e4", name: "Light grip work (post-run)", type: "timed", defaultTime: 5 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest, recovery focus: sleep/nutrition/hydration" },
            { name: "Review", description: "Review week and plan adjustments" },
            { name: "Optional", description: "Light walking only if desired" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 4
    {
      weekNumber: 4,
      title: "Peak Foundation Week",
      focus: "Peak of foundation phase - highest volume before deload",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Fartlek Run + Advanced Grip",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Fartlek", description: "4 miles total, alternate 2 min fast / 3 min moderate, include hills" },
            { name: "Advanced Grip", description: "Monkey bars 5x across and back, single-arm dead hangs 3x max each arm, rope climb 3-4, thick bar holds 3x30 sec" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w4d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w4d1e2", name: "Fartlek run", type: "cardio", defaultDistance: 4, defaultUnit: "mi", notes: "alternate 2 min fast / 3 min moderate, include hills" },
            { id: "w4d1e3", name: "Monkey bars", type: "strength", defaultSets: 5, notes: "across and back" },
            { id: "w4d1e4", name: "Single-arm dead hangs", type: "timed", defaultSets: 3, notes: "max time each arm" },
            { id: "w4d1e5", name: "Rope climb", type: "strength", defaultReps: 4, notes: "3-4 climbs" },
            { id: "w4d1e6", name: "Thick bar holds", type: "timed", defaultSets: 3, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w4d1e7", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Heavy Day",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement" },
            { name: "Main Lifts", description: "5 sets of 5: deadlifts (challenging weight), bench press/weighted push-ups, weighted lunges" },
            { name: "Accessory", description: "3 sets: single-arm rows 10 each, overhead press 8, core (hanging leg raises + plank circuit)" },
            { name: "Carry Finisher", description: "Sandbag over-shoulder throws 3x10" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w4d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 10 },
            { id: "w4d2e2", name: "Deadlifts", type: "strength", defaultSets: 5, defaultReps: 5, notes: "challenging weight" },
            { id: "w4d2e3", name: "Bench press/weighted push-ups", type: "strength", defaultSets: 5, defaultReps: 5 },
            { id: "w4d2e4", name: "Weighted lunges", type: "strength", defaultSets: 5, defaultReps: 5, notes: "each leg" },
            { id: "w4d2e5", name: "Single-arm rows", type: "strength", defaultSets: 3, defaultReps: 10, notes: "each arm" },
            { id: "w4d2e6", name: "Overhead press", type: "strength", defaultSets: 3, defaultReps: 8 },
            { id: "w4d2e7", name: "Hanging leg raises", type: "strength", defaultSets: 3, defaultReps: 10 },
            { id: "w4d2e8", name: "Plank circuit", type: "timed", defaultSets: 3, defaultTime: 1 },
            { id: "w4d2e9", name: "Sandbag over-shoulder throws (finisher)", type: "strength", defaultSets: 3, defaultReps: 10 },
            { id: "w4d2e10", name: "Cool-down stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Race Simulation Extended",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Extended OCR Simulation", description: "~4 miles running: Run 1 mile -> 20 burpees + 1 min bear crawl -> Run 800m -> Farmer carry 200m + 10 box jumps -> Run 800m uphill -> Rope climb x3 + wall climb practice -> Run 800m -> Bucket carry 150m + 30 sec dead hang -> Run 1 mile to finish" },
            { name: "Cool-down", description: "10 min walk + stretch" }
          ],
          exercises: [
            { id: "w4d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w4d3e2", name: "Run 1 mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w4d3e3", name: "Burpees", type: "strength", defaultReps: 20 },
            { id: "w4d3e4", name: "Bear crawl", type: "timed", defaultTime: 1 },
            { id: "w4d3e5", name: "Run 800m", type: "cardio" },
            { id: "w4d3e6", name: "Farmer carry", type: "cardio", notes: "200m" },
            { id: "w4d3e7", name: "Box jumps", type: "strength", defaultReps: 10 },
            { id: "w4d3e8", name: "Run 800m uphill", type: "cardio", notes: "uphill" },
            { id: "w4d3e9", name: "Rope climb x3 + wall climb practice", type: "strength", defaultReps: 3, notes: "3 rope climbs + wall climb practice" },
            { id: "w4d3e10", name: "Run 800m", type: "cardio" },
            { id: "w4d3e11", name: "Bucket carry", type: "cardio", notes: "150m" },
            { id: "w4d3e12", name: "Dead hang", type: "timed", defaultTime: 0.5, notes: "30 sec" },
            { id: "w4d3e13", name: "Run 1 mile to finish", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w4d3e14", name: "Cool-down walk + stretch", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery",
          type: "rest",
          sections: [
            { name: "Recovery", description: "45-60 min recovery: swimming (excellent) OR yoga/mobility, foam rolling, hip/shoulder mobility focus" },
            { name: "Mental", description: "Detailed obstacle visualization" },
            { name: "Light Grip Work", description: "Stress ball squeezes only" }
          ],
          exercises: [
            { id: "w4d4e1", name: "Swimming OR yoga/mobility", type: "timed", defaultTime: 45, notes: "swimming excellent, or yoga/mobility" },
            { id: "w4d4e2", name: "Foam rolling", type: "timed", defaultTime: 10 },
            { id: "w4d4e3", name: "Hip/shoulder mobility", type: "timed", defaultTime: 10 },
            { id: "w4d4e4", name: "Detailed obstacle visualization", type: "timed", defaultTime: 10, notes: "mental training" },
            { id: "w4d4e5", name: "Stress ball squeezes", type: "timed", defaultTime: 5, notes: "light grip work only" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Pull Max + Grip Test",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2 mile jog" },
            { name: "Pull Max Effort", description: "Pull-up test: max reps (record), weighted rows 5x6 (heavy), lat pulldowns 4x10" },
            { name: "Grip Test", description: "RECORD ALL TIMES: Dead hang max, single-arm hang max each arm, farmer carry max distance with challenging weight" },
            { name: "Note", description: "This is your baseline - retest in Week 8 and 12" },
            { name: "Cool-down", description: "Extended stretching" }
          ],
          exercises: [
            { id: "w4d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w4d5e2", name: "Pull-up test (RECORD)", type: "strength", notes: "max reps - record for baseline" },
            { id: "w4d5e3", name: "Weighted rows", type: "strength", defaultSets: 5, defaultReps: 6, notes: "heavy" },
            { id: "w4d5e4", name: "Lat pulldowns", type: "strength", defaultSets: 4, defaultReps: 10 },
            { id: "w4d5e5", name: "Dead hang max (RECORD)", type: "timed", notes: "record time - baseline test" },
            { id: "w4d5e6", name: "Single-arm hang max - left (RECORD)", type: "timed", notes: "record time - baseline test" },
            { id: "w4d5e7", name: "Single-arm hang max - right (RECORD)", type: "timed", notes: "record time - baseline test" },
            { id: "w4d5e8", name: "Farmer carry max distance (RECORD)", type: "cardio", notes: "challenging weight, record distance - baseline test" },
            { id: "w4d5e9", name: "Extended stretching", type: "timed", defaultTime: 15 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run Peak Volume",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Workout", description: "9-10 miles, significant trail/technical terrain, major hill(s), every 2.5 miles: 10 burpees + obstacle simulation, practice full race nutrition protocol" },
            { name: "Cool-down", description: "15 min walk" },
            { name: "Post-Run", description: "Light stretching only (prepare for deload)" }
          ],
          exercises: [
            { id: "w4d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w4d6e2", name: "Long run peak volume", type: "cardio", defaultDistance: 9.5, defaultUnit: "mi", notes: "trail/technical terrain, major hills, every 2.5 miles: 10 burpees + obstacle simulation, practice full race nutrition" },
            { id: "w4d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 15 },
            { id: "w4d6e4", name: "Light stretching (post-run)", type: "timed", defaultTime: 10, notes: "prepare for deload week" }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest - important before deload week" },
            { name: "Focus", description: "Sleep/recovery" },
            { name: "Review", description: "Reflect on Phase 1 progress, plan equipment needs for Phase 2" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 5: DELOAD WEEK
    {
      weekNumber: 5,
      title: "Deload Week",
      focus: "Recovery week - reduce volume 40-50% while maintaining frequency",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Easy Run + Light Grip",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "5 min walk" },
            { name: "Run", description: "2 miles very easy (Zone 1-2)" },
            { name: "Light Grip Maintenance", description: "Dead hang 2x30 sec, Light farmer carry 2x30 sec" },
            { name: "Cool-down", description: "5 min walk + stretching" },
            { name: "Focus", description: "Recovery, not building" }
          ],
          exercises: [
            { id: "w5d1e1", name: "Walk warm-up", type: "cardio", defaultTime: 5 },
            { id: "w5d1e2", name: "Easy run (Zone 1-2)", type: "cardio", defaultDistance: 2, defaultUnit: "mi", notes: "very easy pace" },
            { id: "w5d1e3", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec, light" },
            { id: "w5d1e4", name: "Farmer carry (light)", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w5d1e5", name: "Cool-down walk + stretching", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Light Strength Movement Quality",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic stretching" },
            { name: "Light Circuit", description: "2 rounds only - focus on perfect form, not fatigue" },
            { name: "Extended Stretching", description: "15 min" }
          ],
          exercises: [
            { id: "w5d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 10 },
            { id: "w5d2e2", name: "Bodyweight squats", type: "strength", defaultSets: 2, defaultReps: 15, notes: "perfect form focus" },
            { id: "w5d2e3", name: "Push-ups", type: "strength", defaultSets: 2, defaultReps: 10, notes: "perfect form focus" },
            { id: "w5d2e4", name: "Walking lunges", type: "strength", defaultSets: 2, defaultReps: 8, notes: "each leg, perfect form" },
            { id: "w5d2e5", name: "Plank", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec" },
            { id: "w5d2e6", name: "Extended stretching", type: "timed", defaultTime: 15 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Light Trail + Skills",
          type: "cardio",
          sections: [
            { name: "Easy Hike/Trail Walk", description: "45 min" },
            { name: "Light Skill Practice", description: "Crawling patterns 5 min, Balance work 5 min, Spear throw practice" },
            { name: "Recovery", description: "No intense effort - recovery focus" },
            { name: "Foam Rolling", description: "10 min" }
          ],
          exercises: [
            { id: "w5d3e1", name: "Easy hike or trail walk", type: "cardio", defaultTime: 45, notes: "no intense effort" },
            { id: "w5d3e2", name: "Crawling patterns practice", type: "timed", defaultTime: 5, notes: "light skill work" },
            { id: "w5d3e3", name: "Balance work", type: "timed", defaultTime: 5, notes: "light skill work" },
            { id: "w5d3e4", name: "Spear throw practice", type: "strength", notes: "technique focus" },
            { id: "w5d3e5", name: "Foam rolling", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Full Recovery Day",
          type: "rest",
          sections: [
            { name: "Recovery Activities", description: "Complete rest or very light activity" },
            { name: "Options", description: "Gentle yoga 30 min, Foam rolling and stretching, Massage if possible" },
            { name: "Focus", description: "Sleep, nutrition, hydration" },
            { name: "Mental Recovery", description: "Light visualization only" }
          ],
          exercises: [
            { id: "w5d4e1", name: "Gentle yoga (optional)", type: "timed", defaultTime: 30 },
            { id: "w5d4e2", name: "Foam rolling and stretching", type: "timed", defaultTime: 15 },
            { id: "w5d4e3", name: "Light visualization", type: "timed", defaultTime: 10, notes: "mental recovery" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Light Pull + Grip Maintenance",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1 mile easy jog" },
            { name: "Light Pull Work", description: "2 rounds - Pull-ups 50% of max, Light rows 10 reps, Band face pulls 15" },
            { name: "Grip Maintenance", description: "Dead hang 2x30 sec, Light farmer carry 1 min" },
            { name: "Cool-down", description: "Extended stretching" }
          ],
          exercises: [
            { id: "w5d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w5d5e2", name: "Pull-ups (50% of max)", type: "strength", defaultSets: 2, notes: "50% of max reps" },
            { id: "w5d5e3", name: "Light rows", type: "strength", defaultSets: 2, defaultReps: 10, notes: "light weight" },
            { id: "w5d5e4", name: "Band face pulls", type: "strength", defaultSets: 2, defaultReps: 15 },
            { id: "w5d5e5", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec" },
            { id: "w5d5e6", name: "Farmer carry (light)", type: "timed", defaultTime: 1 },
            { id: "w5d5e7", name: "Extended stretching", type: "timed", defaultTime: 15 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Easy Long Run",
          type: "cardio",
          sections: [
            { name: "Main Workout", description: "5-6 miles very easy pace (Zone 2), some trail terrain for variety" },
            { name: "Note", description: "NO burpees or obstacles - just accumulate time on feet" },
            { name: "Cool-down", description: "10 min walk" },
            { name: "Focus", description: "Active recovery, mental refreshment" }
          ],
          exercises: [
            { id: "w5d6e1", name: "Easy long run (Zone 2)", type: "cardio", defaultDistance: 6, defaultUnit: "mi", notes: "very easy pace, some trail terrain, NO obstacles" },
            { id: "w5d6e2", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest" },
            { name: "Sleep", description: "8-9 hours" },
            { name: "Mental Prep", description: "Prepare mentally for Build Phase intensity" },
            { name: "Planning", description: "Week reflection and planning" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 6: BUILD PHASE START
    {
      weekNumber: 6,
      title: "Build Phase Start",
      focus: "Increase intensity - heavier weights, faster runs, more grip volume",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Threshold Run + Grip Progression",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog + drills" },
            { name: "Main Set", description: "2x15 min at threshold pace (hard but sustainable), 5 min recovery jog between" },
            { name: "Grip Progression", description: "Dead hang 4x max (60+ sec target), Weighted dead hang (10 lb) 3x30 sec, Rope climb 4, Farmer carry 3x150m (heavier)" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w6d1e1", name: "Easy jog warm-up + drills", type: "cardio", defaultTime: 10 },
            { id: "w6d1e2", name: "Threshold run", type: "cardio", defaultSets: 2, defaultTime: 15, notes: "hard but sustainable, 5 min recovery jog between" },
            { id: "w6d1e3", name: "Dead hang", type: "timed", defaultSets: 4, notes: "max time, 60+ sec target" },
            { id: "w6d1e4", name: "Weighted dead hang (10 lb)", type: "timed", defaultSets: 3, defaultTime: 0.5, notes: "30 sec" },
            { id: "w6d1e5", name: "Rope climb", type: "strength", defaultReps: 4 },
            { id: "w6d1e6", name: "Farmer carry (heavier)", type: "cardio", defaultSets: 3, notes: "150m each" },
            { id: "w6d1e7", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Heavy Push/Lower",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement" },
            { name: "Main Lifts", description: "4 sets of 6 - heavier weight" },
            { name: "Accessory", description: "3 sets each" },
            { name: "Finisher", description: "25 burpees + 1 min plank" }
          ],
          exercises: [
            { id: "w6d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 10 },
            { id: "w6d2e2", name: "Squat to overhead press", type: "strength", defaultSets: 4, defaultReps: 6, notes: "heavy" },
            { id: "w6d2e3", name: "DB chest press (heavy)", type: "strength", defaultSets: 4, defaultReps: 6, notes: "heavy" },
            { id: "w6d2e4", name: "Romanian deadlifts", type: "strength", defaultSets: 4, defaultReps: 6, notes: "heavy" },
            { id: "w6d2e5", name: "Weighted step-ups", type: "strength", defaultSets: 4, defaultReps: 6, notes: "each leg, heavy" },
            { id: "w6d2e6", name: "Tricep dips", type: "strength", defaultSets: 3, defaultReps: 12 },
            { id: "w6d2e7", name: "Lateral lunges", type: "strength", defaultSets: 3, defaultReps: 10, notes: "each side" },
            { id: "w6d2e8", name: "Ab wheel/rollouts", type: "strength", defaultSets: 3, defaultReps: 10 },
            { id: "w6d2e9", name: "Burpees (finisher)", type: "strength", defaultReps: 25 },
            { id: "w6d2e10", name: "Plank (finisher)", type: "timed", defaultTime: 1 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Hill Repeats + OCR Circuits",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Hill Work", description: "8x45 sec hill sprints (max effort), walk down recovery" },
            { name: "OCR Circuit", description: "2 rounds - Run 400m, Bear crawl 30m, Box jumps 15, Bucket carry 100m, Wall climbs/burpees over box 10" },
            { name: "Cool-down", description: "10 min walk" }
          ],
          exercises: [
            { id: "w6d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w6d3e2", name: "Hill sprints (max effort)", type: "cardio", defaultSets: 8, defaultTime: 0.75, notes: "45 sec, walk down recovery" },
            { id: "w6d3e3", name: "Run 400m", type: "cardio", defaultSets: 2 },
            { id: "w6d3e4", name: "Bear crawl", type: "timed", defaultSets: 2, notes: "30m" },
            { id: "w6d3e5", name: "Box jumps", type: "strength", defaultSets: 2, defaultReps: 15 },
            { id: "w6d3e6", name: "Bucket carry", type: "cardio", defaultSets: 2, notes: "100m" },
            { id: "w6d3e7", name: "Wall climbs/burpees over box", type: "strength", defaultSets: 2, defaultReps: 10 },
            { id: "w6d3e8", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Mobility",
          type: "rest",
          sections: [
            { name: "Recovery", description: "45-60 min total" },
            { name: "Activities", description: "Yoga/mobility 30 min, Foam rolling 15 min, Band work for shoulders/hips" },
            { name: "Mental Training", description: "Race day visualization 15 min, Obstacle strategy review" },
            { name: "Optional", description: "Light 20 min walk" }
          ],
          exercises: [
            { id: "w6d4e1", name: "Yoga/mobility", type: "timed", defaultTime: 30 },
            { id: "w6d4e2", name: "Foam rolling", type: "timed", defaultTime: 15 },
            { id: "w6d4e3", name: "Band work (shoulders/hips)", type: "timed", defaultTime: 10 },
            { id: "w6d4e4", name: "Race day visualization", type: "timed", defaultTime: 15, notes: "mental training" },
            { id: "w6d4e5", name: "Light walk (optional)", type: "cardio", defaultTime: 20 }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Heavy Pull + Grip Challenge",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2 mile easy jog" },
            { name: "Heavy Pull", description: "4 sets - Weighted pull-ups 6, Barbell rows 6, Single-arm DB rows 8 each (all heavy)" },
            { name: "Grip Challenge", description: "Rope climb max in 6 min, Dead hang gauntlet, Pinch grip holds, Farmer carry 200m" },
            { name: "Finisher", description: "30 burpees" }
          ],
          exercises: [
            { id: "w6d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w6d5e2", name: "Weighted pull-ups", type: "strength", defaultSets: 4, defaultReps: 6, notes: "add weight progressively" },
            { id: "w6d5e3", name: "Barbell rows (heavy)", type: "strength", defaultSets: 4, defaultReps: 6, notes: "heavy" },
            { id: "w6d5e4", name: "Single-arm DB rows (heavy)", type: "strength", defaultSets: 4, defaultReps: 8, notes: "each arm, heavy" },
            { id: "w6d5e5", name: "Rope climb (max in 6 min)", type: "timed", defaultTime: 6, notes: "max climbs" },
            { id: "w6d5e6", name: "Dead hang gauntlet", type: "timed", notes: "45s, rest 30s, 45s, rest 30s, max" },
            { id: "w6d5e7", name: "Pinch grip holds with plates", type: "timed", defaultSets: 3, notes: "max time" },
            { id: "w6d5e8", name: "Farmer carry (no put down)", type: "cardio", notes: "200m without putting down" },
            { id: "w6d5e9", name: "Burpees (finisher)", type: "strength", defaultReps: 30 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run Building Distance",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Workout", description: "10 miles, mix trail/road, significant hills" },
            { name: "Obstacles", description: "Every 2.5 miles: 12 burpees + 45 sec hang, Mid-run: 100m farmer carry" },
            { name: "Nutrition", description: "Practice race nutrition protocol" },
            { name: "Cool-down", description: "10 min walk" },
            { name: "Post-Run", description: "Gentle grip work only" }
          ],
          exercises: [
            { id: "w6d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w6d6e2", name: "Long run with obstacles", type: "cardio", defaultDistance: 10, defaultUnit: "mi", notes: "mix trail/road, significant hills, every 2.5 mi: 12 burpees + 45 sec hang" },
            { id: "w6d6e3", name: "Mid-run farmer carry", type: "cardio", notes: "100m" },
            { id: "w6d6e4", name: "Cool-down walk", type: "cardio", defaultTime: 10 },
            { id: "w6d6e5", name: "Post-run gentle grip work", type: "timed", defaultTime: 5 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest" },
            { name: "Focus", description: "Recovery" },
            { name: "Prep", description: "Prepare for high-intensity week" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 7: PEAK INTENSITY WEEK
    {
      weekNumber: 7,
      title: "Peak Intensity Week",
      focus: "Peak intensity week - push limits across all domains",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Speed Work + Advanced Grip",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min jog + strides" },
            { name: "Speed Session", description: "4x800m at 85% effort (2 min recovery), 4x200m sprints (90 sec recovery)" },
            { name: "Advanced Grip", description: "Monkey bar variations 5x, Towel dead hangs 4x max, Rope climb with leg lock 4, Ball/peg grip hangs 3x20 sec" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w7d1e1", name: "Jog warm-up + strides", type: "cardio", defaultTime: 10 },
            { id: "w7d1e2", name: "800m repeats (85% effort)", type: "cardio", defaultSets: 4, notes: "2 min recovery between" },
            { id: "w7d1e3", name: "200m sprints", type: "cardio", defaultSets: 4, notes: "90 sec recovery between" },
            { id: "w7d1e4", name: "Monkey bar variations", type: "strength", defaultSets: 5, notes: "change grip each time" },
            { id: "w7d1e5", name: "Towel dead hangs", type: "timed", defaultSets: 4, notes: "max time" },
            { id: "w7d1e6", name: "Rope climb with leg lock", type: "strength", defaultReps: 4 },
            { id: "w7d1e7", name: "Ball/peg grip hangs", type: "timed", defaultSets: 3, defaultTime: 0.33, notes: "20 sec" },
            { id: "w7d1e8", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Power + Strength Combo",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement + jumps" },
            { name: "Power", description: "4 sets - Power cleans/KB cleans 6, Box jumps (max height) 5, Medicine ball throws 8" },
            { name: "Strength", description: "4 sets of 5 (heavy) - Back/front squats, Bench press, Weighted lunges" },
            { name: "Accessory", description: "Turkish get-ups 3 each side, Hanging windshield wipers 3x8" }
          ],
          exercises: [
            { id: "w7d2e1", name: "Dynamic movement + jumps warm-up", type: "timed", defaultTime: 10 },
            { id: "w7d2e2", name: "Power cleans/KB cleans", type: "strength", defaultSets: 4, defaultReps: 6 },
            { id: "w7d2e3", name: "Box jumps (max height)", type: "strength", defaultSets: 4, defaultReps: 5 },
            { id: "w7d2e4", name: "Medicine ball throws", type: "strength", defaultSets: 4, defaultReps: 8 },
            { id: "w7d2e5", name: "Back/front squats (heavy)", type: "strength", defaultSets: 4, defaultReps: 5, notes: "heavy" },
            { id: "w7d2e6", name: "Bench press (heavy)", type: "strength", defaultSets: 4, defaultReps: 5, notes: "heavy" },
            { id: "w7d2e7", name: "Weighted lunges (heavy)", type: "strength", defaultSets: 4, defaultReps: 5, notes: "each leg, heavy" },
            { id: "w7d2e8", name: "Turkish get-ups", type: "strength", defaultReps: 3, notes: "each side" },
            { id: "w7d2e9", name: "Hanging windshield wipers", type: "strength", defaultSets: 3, defaultReps: 8 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Extended OCR Simulation",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Full OCR Simulation", description: "~5 miles running total with obstacles throughout" },
            { name: "Cool-down", description: "Extended walk and stretch" }
          ],
          exercises: [
            { id: "w7d3e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w7d3e2", name: "Run 1 mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w7d3e3", name: "Burpees", type: "strength", defaultReps: 25 },
            { id: "w7d3e4", name: "Run 800m uphill", type: "cardio", notes: "uphill" },
            { id: "w7d3e5", name: "Wall climb", type: "strength", defaultReps: 3 },
            { id: "w7d3e6", name: "Rope climb", type: "strength", defaultReps: 2 },
            { id: "w7d3e7", name: "Run 800m", type: "cardio" },
            { id: "w7d3e8", name: "Sandbag carry (heavy)", type: "cardio", notes: "200m, heavy" },
            { id: "w7d3e9", name: "Run 400m", type: "cardio" },
            { id: "w7d3e10", name: "Farmer carry", type: "cardio", notes: "150m" },
            { id: "w7d3e11", name: "Monkey bars", type: "strength" },
            { id: "w7d3e12", name: "Run 800m", type: "cardio" },
            { id: "w7d3e13", name: "Bucket carry (uphill)", type: "cardio", notes: "200m, uphill if possible" },
            { id: "w7d3e14", name: "Run 1 mile", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w7d3e15", name: "Dead hang (max)", type: "timed", notes: "max time" },
            { id: "w7d3e16", name: "Burpees (finish)", type: "strength", defaultReps: 10 },
            { id: "w7d3e17", name: "Extended walk and stretch", type: "cardio", defaultTime: 15 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Skill Refinement",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Swimming or yoga 45 min, Foam rolling all muscle groups" },
            { name: "Skill Practice", description: "Low intensity - Spear throw technique 10-15 throws, Balance obstacles practice, Crawling efficiency drills" },
            { name: "Mental", description: "Full race visualization with obstacles" }
          ],
          exercises: [
            { id: "w7d4e1", name: "Swimming or yoga", type: "timed", defaultTime: 45 },
            { id: "w7d4e2", name: "Foam rolling (all muscle groups)", type: "timed", defaultTime: 15 },
            { id: "w7d4e3", name: "Spear throw technique", type: "strength", defaultReps: 15, notes: "10-15 throws, low intensity" },
            { id: "w7d4e4", name: "Balance obstacles practice", type: "timed", defaultTime: 10, notes: "low intensity" },
            { id: "w7d4e5", name: "Crawling efficiency drills", type: "timed", defaultTime: 10, notes: "low intensity" },
            { id: "w7d4e6", name: "Full race visualization", type: "timed", defaultTime: 15, notes: "with obstacles" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Pull Max Effort + Grip Peak",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "2 mile jog" },
            { name: "Max Effort Pull", description: "Pull-ups: work up to max weighted rep, Deadlifts 5x3 (heavy), Pendlay rows 4x5 (heavy)" },
            { name: "Grip Peak Session", description: "Rope climb max in 8 min, Dead hang challenge: 90 sec goal, Heavy farmer carry 2x100m, Pinch grip walk 3x30m" },
            { name: "Finisher", description: "40 burpees for time (record)" }
          ],
          exercises: [
            { id: "w7d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 2, defaultUnit: "mi" },
            { id: "w7d5e2", name: "Weighted pull-ups (max effort)", type: "strength", notes: "work up to max weighted rep" },
            { id: "w7d5e3", name: "Deadlifts (heavy)", type: "strength", defaultSets: 5, defaultReps: 3, notes: "heavy" },
            { id: "w7d5e4", name: "Pendlay rows (heavy)", type: "strength", defaultSets: 4, defaultReps: 5, notes: "heavy" },
            { id: "w7d5e5", name: "Rope climb (max in 8 min)", type: "timed", defaultTime: 8, notes: "max climbs" },
            { id: "w7d5e6", name: "Dead hang challenge", type: "timed", notes: "90 sec goal or max" },
            { id: "w7d5e7", name: "Heavy farmer carry", type: "cardio", defaultSets: 2, notes: "100m each, max weight" },
            { id: "w7d5e8", name: "Pinch grip walk", type: "cardio", defaultSets: 3, notes: "30m each" },
            { id: "w7d5e9", name: "Burpees for time (record)", type: "strength", defaultReps: 40, notes: "record time" }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run Peak Distance",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Workout", description: "11-12 miles (LONGEST TRAINING RUN), mostly trail/technical terrain, 1000+ feet elevation gain" },
            { name: "Obstacles", description: "Every 3 miles: 15 burpees + 1 min hang + obstacle" },
            { name: "Nutrition", description: "Full race nutrition practice, focus on managing effort over distance" },
            { name: "Cool-down", description: "15 min walk" }
          ],
          exercises: [
            { id: "w7d6e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w7d6e2", name: "Peak long run with obstacles", type: "cardio", defaultDistance: 12, defaultUnit: "mi", notes: "LONGEST RUN - trail/technical, 1000+ ft elevation, every 3 mi: 15 burpees + 1 min hang + obstacle" },
            { id: "w7d6e3", name: "Cool-down walk", type: "cardio", defaultTime: 15 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest - essential after peak week" },
            { name: "Focus", description: "Recovery focus, Extra sleep" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 8: TEST WEEK
    {
      weekNumber: 8,
      title: "Test Week",
      focus: "Test week - assess progress, prepare for race phase",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Tempo Test + Grip Assessment",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog + drills" },
            { name: "Tempo Test", description: "5K time trial at tempo effort (not all-out race), Record time for comparison" },
            { name: "Grip Assessment", description: "Compare to Week 4 - Dead hang max (record), Monkey bars timed crossing, Rope climb count in 5 min" },
            { name: "Note", description: "Celebrate improvements!" }
          ],
          exercises: [
            { id: "w8d1e1", name: "Easy jog warm-up + drills", type: "cardio", defaultTime: 10 },
            { id: "w8d1e2", name: "5K tempo time trial", type: "cardio", defaultDistance: 3.1, defaultUnit: "mi", notes: "tempo effort, RECORD TIME" },
            { id: "w8d1e3", name: "Dead hang max (record)", type: "timed", notes: "RECORD TIME - compare to Week 4" },
            { id: "w8d1e4", name: "Monkey bars timed crossing", type: "timed", notes: "RECORD TIME" },
            { id: "w8d1e5", name: "Rope climb count (5 min)", type: "timed", defaultTime: 5, notes: "count climbs in 5 min" }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Test Day",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement" },
            { name: "Test Your Maxes", description: "Pull-ups max reps (compare to Week 4), Deadlift heavy single or 3RM, Bench/push-ups max effort" },
            { name: "Record", description: "Record all numbers - this data helps plan final phase" },
            { name: "Accessory (light)", description: "Core circuit, Mobility work" }
          ],
          exercises: [
            { id: "w8d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 10 },
            { id: "w8d2e2", name: "Pull-ups max reps (test)", type: "strength", notes: "RECORD - compare to Week 4" },
            { id: "w8d2e3", name: "Deadlift heavy single/3RM (test)", type: "strength", notes: "RECORD weight" },
            { id: "w8d2e4", name: "Bench press/push-ups max (test)", type: "strength", notes: "RECORD" },
            { id: "w8d2e5", name: "Core circuit (light)", type: "strength", defaultTime: 10, notes: "light" },
            { id: "w8d2e6", name: "Mobility work", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Race Simulation Full Dress Rehearsal",
          type: "cardio",
          sections: [
            { name: "Gear", description: "Wear race-day gear (shoes, clothes, etc.)" },
            { name: "Full Simulation", description: "~4 miles with obstacles - most race-specific workout" },
            { name: "Practice", description: "Transitions at race pace, Test nutrition timing" }
          ],
          exercises: [
            { id: "w8d3e1", name: "Run 1.5 miles", type: "cardio", defaultDistance: 1.5, defaultUnit: "mi", notes: "in race-day gear" },
            { id: "w8d3e2", name: "Complete all obstacle simulations", type: "strength", notes: "every obstacle available" },
            { id: "w8d3e3", name: "Practice transitions at race pace", type: "cardio", notes: "race pace" },
            { id: "w8d3e4", name: "Test nutrition timing", type: "timed", notes: "practice race nutrition" },
            { id: "w8d3e5", name: "Run 1.5 miles", type: "cardio", defaultDistance: 1.5, defaultUnit: "mi" },
            { id: "w8d3e6", name: "More obstacles", type: "strength", notes: "obstacle simulations" },
            { id: "w8d3e7", name: "Run 1 mile hard to finish", type: "cardio", defaultDistance: 1, defaultUnit: "mi", notes: "hard effort to finish" }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Full recovery day" },
            { name: "Activities", description: "Yoga 45 min, Foam rolling, Massage if possible" },
            { name: "Mental Prep", description: "Review test results, Visualize race success, Plan race day logistics" }
          ],
          exercises: [
            { id: "w8d4e1", name: "Yoga", type: "timed", defaultTime: 45 },
            { id: "w8d4e2", name: "Foam rolling", type: "timed", defaultTime: 15 },
            { id: "w8d4e3", name: "Review test results", type: "timed", defaultTime: 15, notes: "mental prep" },
            { id: "w8d4e4", name: "Race visualization", type: "timed", defaultTime: 10, notes: "visualize success" },
            { id: "w8d4e5", name: "Plan race day logistics", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Moderate Strength + Grip Maintenance",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1.5 mile jog" },
            { name: "Moderate Strength", description: "3 sets - Pull-ups 70% of max, Rows 10 reps moderate, Push-ups 15, Squats 10 moderate" },
            { name: "Grip Maintenance", description: "Dead hang 3x45 sec, Farmer carry 2x100m, Rope climb 2" },
            { name: "Note", description: "Preparing for race phase intensity" }
          ],
          exercises: [
            { id: "w8d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 1.5, defaultUnit: "mi" },
            { id: "w8d5e2", name: "Pull-ups (70% of max)", type: "strength", defaultSets: 3, notes: "70% of max reps" },
            { id: "w8d5e3", name: "Rows (moderate)", type: "strength", defaultSets: 3, defaultReps: 10, notes: "moderate weight" },
            { id: "w8d5e4", name: "Push-ups", type: "strength", defaultSets: 3, defaultReps: 15 },
            { id: "w8d5e5", name: "Squats (moderate)", type: "strength", defaultSets: 3, defaultReps: 10, notes: "moderate weight" },
            { id: "w8d5e6", name: "Dead hang", type: "timed", defaultSets: 3, defaultTime: 0.75, notes: "45 sec" },
            { id: "w8d5e7", name: "Farmer carry", type: "cardio", defaultSets: 2, notes: "100m each" },
            { id: "w8d5e8", name: "Rope climb", type: "strength", defaultReps: 2 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run Moderate",
          type: "cardio",
          sections: [
            { name: "Main Workout", description: "9-10 miles, steady effort throughout, include trail terrain" },
            { name: "Obstacles", description: "Light obstacle work every 3 miles" },
            { name: "Focus", description: "Feeling strong and controlled - last big long run before race phase" },
            { name: "Cool-down", description: "10 min walk" }
          ],
          exercises: [
            { id: "w8d6e1", name: "Long run with light obstacles", type: "cardio", defaultDistance: 10, defaultUnit: "mi", notes: "steady effort, trail terrain, light obstacles every 3 mi - LAST BIG LONG RUN" },
            { id: "w8d6e2", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest" },
            { name: "Celebrate", description: "Celebrate completing Build Phase!" },
            { name: "Prep", description: "Prepare mentally for Race Phase" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 9: Second Deload
    {
      weekNumber: 9,
      title: "Second Deload",
      focus: "Second deload - recover before final race-specific block",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Easy Run + Light Grip",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "5 min walk" },
            { name: "Run", description: "3 miles easy (Zone 2)" },
            { name: "Light Grip Work", description: "Dead hang 2x30 sec, Light farmer carry 2x30 sec, Mobility work 10 min" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w9d1e1", name: "Walk warm-up", type: "cardio", defaultTime: 5 },
            { id: "w9d1e2", name: "Easy run (Zone 2)", type: "cardio", defaultDistance: 3, defaultUnit: "mi", notes: "easy pace" },
            { id: "w9d1e3", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w9d1e4", name: "Light farmer carry", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w9d1e5", name: "Mobility work", type: "timed", defaultTime: 10 },
            { id: "w9d1e6", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Light Strength Maintenance",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic stretching" },
            { name: "Light Full Body", description: "2 rounds: Squats 10 (light), Push-ups 10, Rows 10 (light), Lunges 8 each leg, Plank 30 sec" },
            { name: "Focus", description: "Movement quality" },
            { name: "Cool-down", description: "Extended stretching 15 min" }
          ],
          exercises: [
            { id: "w9d2e1", name: "Dynamic stretching warm-up", type: "timed", defaultTime: 5 },
            { id: "w9d2e2", name: "Squats (light)", type: "strength", defaultSets: 2, defaultReps: 10, notes: "light weight, focus on form" },
            { id: "w9d2e3", name: "Push-ups", type: "strength", defaultSets: 2, defaultReps: 10 },
            { id: "w9d2e4", name: "Rows (light)", type: "strength", defaultSets: 2, defaultReps: 10, notes: "light weight" },
            { id: "w9d2e5", name: "Lunges", type: "strength", defaultSets: 2, defaultReps: 8, notes: "each leg" },
            { id: "w9d2e6", name: "Plank", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec" },
            { id: "w9d2e7", name: "Extended stretching", type: "timed", defaultTime: 15 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Light Trail + Skills",
          type: "cardio",
          sections: [
            { name: "Main Workout", description: "Easy trail run or hike 45-60 min" },
            { name: "Light Skill Practice", description: "Obstacle technique review, Balance work, Crawling patterns" },
            { name: "Note", description: "No intense efforts" }
          ],
          exercises: [
            { id: "w9d3e1", name: "Easy trail run or hike", type: "cardio", defaultTime: 60, notes: "45-60 min, no intense efforts" },
            { id: "w9d3e2", name: "Obstacle technique review", type: "timed", defaultTime: 10, notes: "light practice" },
            { id: "w9d3e3", name: "Balance work", type: "timed", defaultTime: 5 },
            { id: "w9d3e4", name: "Crawling patterns", type: "timed", defaultTime: 5 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Full Recovery",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Complete rest or gentle yoga 30 min" },
            { name: "Self-Care", description: "Foam rolling and stretching" },
            { name: "Mental Preparation", description: "Race day visualization, Obstacle strategy finalization" }
          ],
          exercises: [
            { id: "w9d4e1", name: "Gentle yoga (optional)", type: "timed", defaultTime: 30 },
            { id: "w9d4e2", name: "Foam rolling and stretching", type: "timed", defaultTime: 15 },
            { id: "w9d4e3", name: "Race day visualization", type: "timed", defaultTime: 10, notes: "mental preparation" },
            { id: "w9d4e4", name: "Obstacle strategy finalization", type: "timed", defaultTime: 10, notes: "mental preparation" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Light Pull + Grip",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1 mile easy jog" },
            { name: "Light Pull", description: "2 rounds: Pull-ups 50% of max, Rows 8 light" },
            { name: "Grip Maintenance", description: "Dead hang 2x30 sec, Rope climb 1-2" },
            { name: "Cool-down", description: "Stretching" }
          ],
          exercises: [
            { id: "w9d5e1", name: "Easy jog warm-up", type: "cardio", defaultDistance: 1, defaultUnit: "mi" },
            { id: "w9d5e2", name: "Pull-ups (50% max)", type: "strength", defaultSets: 2, notes: "50% of your max reps" },
            { id: "w9d5e3", name: "Rows (light)", type: "strength", defaultSets: 2, defaultReps: 8, notes: "light weight" },
            { id: "w9d5e4", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w9d5e5", name: "Rope climb", type: "strength", defaultSets: 2, defaultReps: 1, notes: "1-2 climbs" },
            { id: "w9d5e6", name: "Stretching", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Moderate Long Run",
          type: "cardio",
          sections: [
            { name: "Main Workout", description: "6-7 miles, easy to moderate effort, some trail terrain, light obstacles (optional)" },
            { name: "Cool-down", description: "10 min walk" },
            { name: "Note", description: "Preparing body for final push" }
          ],
          exercises: [
            { id: "w9d6e1", name: "Long run with optional obstacles", type: "cardio", defaultDistance: 7, defaultUnit: "mi", notes: "easy to moderate, trail terrain, light obstacles optional" },
            { id: "w9d6e2", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest" },
            { name: "Focus", description: "Sleep and nutrition" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 10: Race-Specific Intensity
    {
      weekNumber: 10,
      title: "Race-Specific Intensity",
      focus: "Race-specific intensity - sharpen all skills at race pace",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Race Pace Intervals + Grip Speed",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog + strides" },
            { name: "Race Pace Work", description: "6x800m at goal race effort, 2 min recovery between, focus on feeling race rhythm" },
            { name: "Grip Speed Work", description: "Monkey bars 5x through FAST, Quick rope climbs 4x (focus on speed), Dead hang 3x45 sec" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w10d1e1", name: "Easy jog warm-up + strides", type: "cardio", defaultTime: 10 },
            { id: "w10d1e2", name: "800m repeats at race pace", type: "cardio", defaultSets: 6, notes: "2 min recovery, feel race rhythm" },
            { id: "w10d1e3", name: "Monkey bars (fast)", type: "strength", defaultSets: 5, notes: "through FAST" },
            { id: "w10d1e4", name: "Quick rope climbs", type: "strength", defaultSets: 4, defaultReps: 1, notes: "focus on speed" },
            { id: "w10d1e5", name: "Dead hang", type: "timed", defaultSets: 3, defaultTime: 0.75, notes: "45 sec each" },
            { id: "w10d1e6", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Race Preparation",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement" },
            { name: "Moderate Strength", description: "3 sets: Deadlifts 6 at 70%, Weighted pull-ups 5 moderate, Push-ups 15, Squats 8 moderate" },
            { name: "Power", description: "Box jumps 3x6, Medicine ball throws 3x8" },
            { name: "Core", description: "10 min circuit" },
            { name: "Note", description: "Maintaining strength, not building" }
          ],
          exercises: [
            { id: "w10d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 10 },
            { id: "w10d2e2", name: "Deadlifts (70%)", type: "strength", defaultSets: 3, defaultReps: 6, notes: "70% 1RM" },
            { id: "w10d2e3", name: "Weighted pull-ups", type: "strength", defaultSets: 3, defaultReps: 5, notes: "moderate weight" },
            { id: "w10d2e4", name: "Push-ups", type: "strength", defaultSets: 3, defaultReps: 15 },
            { id: "w10d2e5", name: "Squats", type: "strength", defaultSets: 3, defaultReps: 8, notes: "moderate weight" },
            { id: "w10d2e6", name: "Box jumps", type: "strength", defaultSets: 3, defaultReps: 6 },
            { id: "w10d2e7", name: "Medicine ball throws", type: "strength", defaultSets: 3, defaultReps: 8 },
            { id: "w10d2e8", name: "Core circuit", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Race Simulation Race Pace",
          type: "cardio",
          sections: [
            { name: "Prep", description: "Wear full race gear" },
            { name: "Race Pace Simulation", description: "~3.5 miles: Run 1 mi race pace -> 15 burpees + wall climb -> Run 800m race pace -> Rope climb + farmer carry 100m -> Run 800m race pace -> Bucket carry + monkey bars -> Run 800m hard to finish" },
            { name: "Note", description: "Practice everything at race intensity" }
          ],
          exercises: [
            { id: "w10d3e1", name: "Run 1 mile at race pace", type: "cardio", defaultDistance: 1, defaultUnit: "mi", notes: "race pace, wear full race gear" },
            { id: "w10d3e2", name: "Burpees", type: "strength", defaultReps: 15 },
            { id: "w10d3e3", name: "Wall climb", type: "strength", defaultReps: 1 },
            { id: "w10d3e4", name: "Run 800m at race pace", type: "cardio", notes: "race pace" },
            { id: "w10d3e5", name: "Rope climb", type: "strength", defaultReps: 1 },
            { id: "w10d3e6", name: "Farmer carry", type: "cardio", notes: "100m" },
            { id: "w10d3e7", name: "Run 800m at race pace", type: "cardio", notes: "race pace" },
            { id: "w10d3e8", name: "Bucket carry", type: "cardio", notes: "full distance" },
            { id: "w10d3e9", name: "Monkey bars", type: "strength", defaultReps: 1, notes: "through" },
            { id: "w10d3e10", name: "Run 800m hard to finish", type: "cardio", notes: "hard effort to finish" }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Mental Prep",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Yoga/mobility 45 min, Foam rolling" },
            { name: "Mental Preparation", description: "Full race visualization, Contingency planning (what if obstacles), Positive self-talk practice, Review race logistics" }
          ],
          exercises: [
            { id: "w10d4e1", name: "Yoga/mobility", type: "timed", defaultTime: 45 },
            { id: "w10d4e2", name: "Foam rolling", type: "timed", defaultTime: 15 },
            { id: "w10d4e3", name: "Full race visualization", type: "timed", defaultTime: 15, notes: "mental prep" },
            { id: "w10d4e4", name: "Contingency planning", type: "timed", defaultTime: 10, notes: "what if scenarios for obstacles" },
            { id: "w10d4e5", name: "Review race logistics", type: "timed", defaultTime: 10, notes: "mental prep" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Strength Sharpening",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "1.5 mile jog" },
            { name: "Sharpening Session", description: "3 sets: Pull-ups 6 quality, Explosive push-ups 8, Jump squats 8" },
            { name: "Grip Sharpening", description: "Dead hang 3x45 sec, Rope climb 2 quick climbs, Farmer carry 1x150m" },
            { name: "Finisher", description: "15 burpees to finish" }
          ],
          exercises: [
            { id: "w10d5e1", name: "Jog warm-up", type: "cardio", defaultDistance: 1.5, defaultUnit: "mi" },
            { id: "w10d5e2", name: "Pull-ups (quality)", type: "strength", defaultSets: 3, defaultReps: 6, notes: "focus on quality" },
            { id: "w10d5e3", name: "Explosive push-ups", type: "strength", defaultSets: 3, defaultReps: 8 },
            { id: "w10d5e4", name: "Jump squats", type: "strength", defaultSets: 3, defaultReps: 8 },
            { id: "w10d5e5", name: "Dead hang", type: "timed", defaultSets: 3, defaultTime: 0.75, notes: "45 sec each" },
            { id: "w10d5e6", name: "Quick rope climbs", type: "strength", defaultSets: 2, defaultReps: 1, notes: "fast climbs" },
            { id: "w10d5e7", name: "Farmer carry", type: "cardio", defaultSets: 1, notes: "150m" },
            { id: "w10d5e8", name: "Burpees (finisher)", type: "strength", defaultReps: 15 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Long Run Race Simulation",
          type: "cardio",
          sections: [
            { name: "Main Workout", description: "10-11 miles, start at race pace effort, include obstacles every 2-2.5 miles, full trail/technical terrain, practice all race-day systems" },
            { name: "Note", description: "THIS IS YOUR FINAL LONG SIMULATION" },
            { name: "Cool-down", description: "10 min walk" }
          ],
          exercises: [
            { id: "w10d6e1", name: "Long run race simulation", type: "cardio", defaultDistance: 11, defaultUnit: "mi", notes: "FINAL LONG SIMULATION - race pace, obstacles every 2-2.5 mi, full trail terrain" },
            { id: "w10d6e2", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest" },
            { name: "Note", description: "Two weeks to race!" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 11: Taper Week 1
    {
      weekNumber: 11,
      title: "Taper Week 1",
      focus: "Begin taper - reduce volume, maintain intensity",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Moderate Run + Grip Maintenance",
          type: "cardio",
          sections: [
            { name: "Warm-up", description: "10 min easy jog" },
            { name: "Main Run", description: "4 miles with 4x2 min at race pace, easy running between" },
            { name: "Grip Maintenance", description: "Dead hang 3x30 sec, Rope climb 2, Farmer carry 1x100m" },
            { name: "Cool-down", description: "5 min walk" }
          ],
          exercises: [
            { id: "w11d1e1", name: "Easy jog warm-up", type: "cardio", defaultTime: 10 },
            { id: "w11d1e2", name: "Run with race pace intervals", type: "cardio", defaultDistance: 4, defaultUnit: "mi", notes: "4x2 min at race pace, easy between" },
            { id: "w11d1e3", name: "Dead hang", type: "timed", defaultSets: 3, defaultTime: 0.5, notes: "30 sec each" },
            { id: "w11d1e4", name: "Rope climb", type: "strength", defaultSets: 2, defaultReps: 1 },
            { id: "w11d1e5", name: "Farmer carry", type: "cardio", defaultSets: 1, notes: "100m" },
            { id: "w11d1e6", name: "Cool-down walk", type: "cardio", defaultTime: 5 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Strength Light Maintenance",
          type: "strength",
          sections: [
            { name: "Warm-up", description: "Dynamic movement" },
            { name: "Light Strength", description: "2 sets: Pull-ups 6, Squats 8, Push-ups 12, Rows 8" },
            { name: "Power", description: "2 sets: Box jumps 5, Medicine ball throws 6" },
            { name: "Core", description: "Light 5 min circuit" }
          ],
          exercises: [
            { id: "w11d2e1", name: "Dynamic movement warm-up", type: "timed", defaultTime: 5 },
            { id: "w11d2e2", name: "Pull-ups", type: "strength", defaultSets: 2, defaultReps: 6 },
            { id: "w11d2e3", name: "Squats", type: "strength", defaultSets: 2, defaultReps: 8 },
            { id: "w11d2e4", name: "Push-ups", type: "strength", defaultSets: 2, defaultReps: 12 },
            { id: "w11d2e5", name: "Rows", type: "strength", defaultSets: 2, defaultReps: 8 },
            { id: "w11d2e6", name: "Box jumps", type: "strength", defaultSets: 2, defaultReps: 5 },
            { id: "w11d2e7", name: "Medicine ball throws", type: "strength", defaultSets: 2, defaultReps: 6 },
            { id: "w11d2e8", name: "Core circuit (light)", type: "timed", defaultTime: 5 }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Short Race Simulation",
          type: "cardio",
          sections: [
            { name: "Final Race Pace Work", description: "Run 800m race pace -> 10 burpees + wall climb -> Run 800m race pace -> Rope climb + 30 sec hang -> Run 400m hard" },
            { name: "Note", description: "Total ~2 miles. Short and sharp - confidence builder" }
          ],
          exercises: [
            { id: "w11d3e1", name: "Run 800m at race pace", type: "cardio", notes: "race pace" },
            { id: "w11d3e2", name: "Burpees", type: "strength", defaultReps: 10 },
            { id: "w11d3e3", name: "Wall climb", type: "strength", defaultReps: 1 },
            { id: "w11d3e4", name: "Run 800m at race pace", type: "cardio", notes: "race pace" },
            { id: "w11d3e5", name: "Rope climb", type: "strength", defaultReps: 1 },
            { id: "w11d3e6", name: "Dead hang", type: "timed", defaultTime: 0.5, notes: "30 sec" },
            { id: "w11d3e7", name: "Run 400m hard", type: "cardio", notes: "hard effort to finish" }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Active Recovery + Final Prep",
          type: "rest",
          sections: [
            { name: "Light Recovery", description: "Easy yoga 30 min, Foam rolling" },
            { name: "Race Preparation", description: "Check all gear, Plan race day nutrition, Finalize logistics, Full visualization" }
          ],
          exercises: [
            { id: "w11d4e1", name: "Easy yoga", type: "timed", defaultTime: 30 },
            { id: "w11d4e2", name: "Foam rolling", type: "timed", defaultTime: 15 },
            { id: "w11d4e3", name: "Check all gear", type: "timed", defaultTime: 15, notes: "race prep" },
            { id: "w11d4e4", name: "Plan race day nutrition", type: "timed", defaultTime: 10, notes: "race prep" },
            { id: "w11d4e5", name: "Full visualization", type: "timed", defaultTime: 10, notes: "mental prep" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Light Movement + Grip Touch",
          type: "cardio",
          sections: [
            { name: "Very Light", description: "2 mile easy jog, Pull-ups 5, Dead hang 2x20 sec, Rope climb 1, 5 burpees" },
            { name: "Cool-down", description: "Stretching and mobility only" }
          ],
          exercises: [
            { id: "w11d5e1", name: "Easy jog", type: "cardio", defaultDistance: 2, defaultUnit: "mi", notes: "very easy" },
            { id: "w11d5e2", name: "Pull-ups", type: "strength", defaultReps: 5 },
            { id: "w11d5e3", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.33, notes: "20 sec each" },
            { id: "w11d5e4", name: "Rope climb", type: "strength", defaultReps: 1 },
            { id: "w11d5e5", name: "Burpees", type: "strength", defaultReps: 5 },
            { id: "w11d5e6", name: "Stretching and mobility", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Final Long Run",
          type: "cardio",
          sections: [
            { name: "Main Workout", description: "6-7 miles, mostly easy with 3x3 min at race pace, light obstacles (optional), focus on feeling fresh and ready" },
            { name: "Cool-down", description: "10 min walk" },
            { name: "Note", description: "Last significant training run!" }
          ],
          exercises: [
            { id: "w11d6e1", name: "Final long run", type: "cardio", defaultDistance: 7, defaultUnit: "mi", notes: "mostly easy, 3x3 min at race pace, light obstacles optional - LAST SIGNIFICANT RUN" },
            { id: "w11d6e2", name: "Cool-down walk", type: "cardio", defaultTime: 10 }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "Complete Rest",
          type: "rest",
          sections: [
            { name: "Rest", description: "Full rest" },
            { name: "Note", description: "One week to race! Focus on rest and mental preparation" }
          ],
          exercises: []
        }
      ]
    },

    // WEEK 12: Race Week
    {
      weekNumber: 12,
      title: "Race Week",
      focus: "Final taper and race - arrive fresh, confident, and READY",
      days: [
        {
          day: "Monday",
          dayNumber: 1,
          title: "Shakeout Run + Light Grip",
          type: "cardio",
          sections: [
            { name: "Easy Shakeout", description: "3 miles very easy, 4-6 strides (short accelerations)" },
            { name: "Light Grip", description: "Dead hang 2x20 sec, 5 pull-ups, Light farmer carry 30 sec" },
            { name: "Cool-down", description: "Stretching and foam rolling" }
          ],
          exercises: [
            { id: "w12d1e1", name: "Easy shakeout run", type: "cardio", defaultDistance: 3, defaultUnit: "mi", notes: "very easy" },
            { id: "w12d1e2", name: "Strides", type: "cardio", defaultSets: 5, notes: "short accelerations" },
            { id: "w12d1e3", name: "Dead hang", type: "timed", defaultSets: 2, defaultTime: 0.33, notes: "20 sec each" },
            { id: "w12d1e4", name: "Pull-ups", type: "strength", defaultReps: 5 },
            { id: "w12d1e5", name: "Light farmer carry", type: "timed", defaultTime: 0.5, notes: "30 sec" },
            { id: "w12d1e6", name: "Stretching and foam rolling", type: "timed", defaultTime: 15 }
          ]
        },
        {
          day: "Tuesday",
          dayNumber: 2,
          title: "Light Movement Only",
          type: "cardio",
          sections: [
            { name: "Very Light Day", description: "20 min easy jog or walk, Dynamic stretching, 5 pull-ups, 5 burpees, Core: Plank 30 sec" },
            { name: "Focus", description: "Staying loose" }
          ],
          exercises: [
            { id: "w12d2e1", name: "Easy jog or walk", type: "cardio", defaultTime: 20, notes: "very easy" },
            { id: "w12d2e2", name: "Dynamic stretching", type: "timed", defaultTime: 5 },
            { id: "w12d2e3", name: "Pull-ups", type: "strength", defaultReps: 5 },
            { id: "w12d2e4", name: "Burpees", type: "strength", defaultReps: 5 },
            { id: "w12d2e5", name: "Plank", type: "timed", defaultTime: 0.5, notes: "30 sec" }
          ]
        },
        {
          day: "Wednesday",
          dayNumber: 3,
          title: "Final Tune-Up",
          type: "cardio",
          sections: [
            { name: "Short Tune-Up", description: "2 miles easy with 3x1 min at race pace, 10 burpees, Dead hang 30 sec, 1 rope climb (if available)" },
            { name: "Note", description: "Race - 4 days. Last real workout before race" },
            { name: "Cool-down", description: "Stretching and mobility" }
          ],
          exercises: [
            { id: "w12d3e1", name: "Easy run with race pace intervals", type: "cardio", defaultDistance: 2, defaultUnit: "mi", notes: "3x1 min at race pace" },
            { id: "w12d3e2", name: "Burpees", type: "strength", defaultReps: 10 },
            { id: "w12d3e3", name: "Dead hang", type: "timed", defaultTime: 0.5, notes: "30 sec" },
            { id: "w12d3e4", name: "Rope climb (if available)", type: "strength", defaultReps: 1 },
            { id: "w12d3e5", name: "Stretching and mobility", type: "timed", defaultTime: 10 }
          ]
        },
        {
          day: "Thursday",
          dayNumber: 4,
          title: "Rest or Very Light Movement",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Complete rest recommended OR very light 15-20 min walk" },
            { name: "Self-Care", description: "Foam rolling and stretching" },
            { name: "Race Prep", description: "Pack race bag, Review race plan, Early to bed" },
            { name: "Note", description: "Race - 3 days" }
          ],
          exercises: [
            { id: "w12d4e1", name: "Very light walk (optional)", type: "cardio", defaultTime: 20, notes: "optional, 15-20 min" },
            { id: "w12d4e2", name: "Foam rolling and stretching", type: "timed", defaultTime: 15 },
            { id: "w12d4e3", name: "Pack race bag", type: "timed", defaultTime: 20, notes: "race prep" },
            { id: "w12d4e4", name: "Review race plan", type: "timed", defaultTime: 10, notes: "race prep" }
          ]
        },
        {
          day: "Friday",
          dayNumber: 5,
          title: "Pre-Race Shakeout",
          type: "cardio",
          sections: [
            { name: "Short Shakeout", description: "2 mile very easy jog, 4 strides, 5 easy burpees, Brief dead hang" },
            { name: "Focus", description: "Staying loose and confident, Continue hydrating well" },
            { name: "Note", description: "Race - 2 days. Early dinner, early bed" }
          ],
          exercises: [
            { id: "w12d5e1", name: "Very easy jog", type: "cardio", defaultDistance: 2, defaultUnit: "mi", notes: "very easy" },
            { id: "w12d5e2", name: "Strides", type: "cardio", defaultSets: 4, notes: "short accelerations" },
            { id: "w12d5e3", name: "Easy burpees", type: "strength", defaultReps: 5, notes: "easy effort" },
            { id: "w12d5e4", name: "Brief dead hang", type: "timed", defaultTime: 0.33, notes: "20 sec" }
          ]
        },
        {
          day: "Saturday",
          dayNumber: 6,
          title: "Race Day Eve",
          type: "rest",
          sections: [
            { name: "Recovery", description: "Complete rest OR 10-15 min very easy walk, Light dynamic stretching" },
            { name: "Final Prep", description: "Final gear check, Visualize race success" },
            { name: "Nutrition", description: "Early dinner (familiar foods)" },
            { name: "Sleep", description: "8-9 hours sleep" },
            { name: "Note", description: "YOU ARE READY!" }
          ],
          exercises: [
            { id: "w12d6e1", name: "Very easy walk (optional)", type: "cardio", defaultTime: 15, notes: "optional, 10-15 min" },
            { id: "w12d6e2", name: "Light dynamic stretching", type: "timed", defaultTime: 10 },
            { id: "w12d6e3", name: "Final gear check", type: "timed", defaultTime: 15, notes: "race prep" },
            { id: "w12d6e4", name: "Visualize race success", type: "timed", defaultTime: 10, notes: "mental prep" }
          ]
        },
        {
          day: "Sunday",
          dayNumber: 7,
          title: "RACE DAY - BECOME A BEAST!",
          type: "race",
          sections: [
            { name: "Pre-Race (2-3 hours before)", description: "Familiar breakfast, Light dynamic warm-up, 5 min easy jog + strides, Brief dead hang to activate grip, Mental focus routine" },
            { name: "RACE STRATEGY", description: "Start controlled (don't go out too fast), Attack obstacles with confidence, Stay hydrated and fueled, Dig deep when it hurts, FINISH STRONG!" },
            { name: "Post-Race", description: "Celebrate - YOU ARE A SPARTAN!" }
          ],
          exercises: [
            { id: "w12d7e1", name: "Pre-race breakfast", type: "timed", defaultTime: 30, notes: "familiar foods, 2-3 hours before" },
            { id: "w12d7e2", name: "Light dynamic warm-up", type: "timed", defaultTime: 10 },
            { id: "w12d7e3", name: "Easy jog + strides", type: "cardio", defaultTime: 5 },
            { id: "w12d7e4", name: "Brief dead hang", type: "timed", defaultTime: 0.5, notes: "activate grip" },
            { id: "w12d7e5", name: "Mental focus routine", type: "timed", defaultTime: 5 },
            { id: "w12d7e6", name: "SPARTAN BEAST RACE", type: "race", notes: "Start controlled, attack obstacles with confidence, stay hydrated, dig deep, FINISH STRONG!" }
          ]
        }
      ]
    }
  ]
};

// Supplementary Training Information
const nutritionGuidelines = {
  daily: {
    protein: "0.7-1g per pound of bodyweight daily for recovery",
    carbohydrates: "2-3g per pound on training days, 1.5-2g on rest days",
    hydration: "Half your bodyweight in ounces of water minimum",
    focus: "Prioritize whole foods: lean proteins, vegetables, fruits, whole grains"
  },
  raceWeek: {
    carbLoading: "Increase carbohydrates 2-3 days before race",
    fiber: "Reduce fiber intake 24-48 hours before race",
    familiar: "Eat familiar foods only - no experiments",
    hydration: "Hydrate well but don't overdo it"
  },
  raceDay: {
    preRace: "2-3 hours before: 300-500 calories, mostly carbs, easy to digest",
    during: "150-250 calories per hour after first hour",
    hydration: "Drink at every water station, don't skip!",
    options: "Energy gels, chews, dates, banana, sports drink"
  }
};

const mentalPreparation = {
  visualization: {
    frequency: "10-15 minutes 3x per week",
    focus: [
      "Successfully completing each obstacle type",
      "Maintaining composure when fatigued",
      "Crossing the finish line strong",
      "Recovering quickly after failed obstacles"
    ]
  },
  mantras: [
    "I trained for this.",
    "One obstacle at a time.",
    "Pain is temporary, pride is forever.",
    "I am stronger than I think.",
    "Keep moving forward."
  ],
  obstacleFailure: {
    steps: [
      "Accept it immediately - don't dwell",
      "Complete burpees efficiently (you trained for this!)",
      "Move to next obstacle with fresh mindset",
      "Remember: Burpees don't define you - finishing does"
    ]
  }
};

const raceDayChecklist = {
  gear: [
    "Race bib and timing chip",
    "Trail running shoes (broken in!)",
    "Race outfit (fitted, won't chafe)",
    "Compression gear (optional)",
    "Gloves (optional but recommended)",
    "Hydration pack or race belt",
    "Energy gels/nutrition",
    "Body Glide or anti-chafe",
    "Sunscreen",
    "Change of clothes for after"
  ],
  raceMorning: [
    "Eat familiar breakfast 2-3 hours before",
    "Hydrate (16-20 oz water)",
    "Arrive 60-90 min early",
    "Use bathroom before corral",
    "Apply sunscreen and Body Glide",
    "Dynamic warm-up 10-15 min before start",
    "Final mental focus and visualization"
  ]
};

const intensityZones = {
  zone1: { name: "Very Easy", description: "Can sing while exercising. Recovery pace." },
  zone2: { name: "Easy", description: "Can hold full conversation. Aerobic base building." },
  zone3: { name: "Moderate/Tempo", description: "Can speak in short sentences. Comfortably hard." },
  zone4: { name: "Hard", description: "Can only speak a few words. Race pace effort." },
  zone5: { name: "Max", description: "Cannot speak. Sprint efforts." }
};

const scalingGuidelines = {
  beginner: "Reduce running distances by 20-30%. Use band-assisted pull-ups. Modify obstacles.",
  intermediate: "Follow plan as written. Adjust weights based on your strength level.",
  advanced: "Add 10-15% to distances. Increase weight vest usage. Add second daily session if desired."
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
