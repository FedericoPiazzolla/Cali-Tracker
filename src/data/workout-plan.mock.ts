import type { PlannedExercise, WorkoutDay, WorkoutPlan } from "@/types/workout-plan";

const mondayExercises: PlannedExercise[] = [
  {
    exerciseId: "weighted-pullups",
    exerciseName: "Weighted Pull-ups",
    tracking: "reps",
    targetSets: 5,
    targetLabel: "5x5",
  },
  {
    exerciseId: "weighted-dips",
    exerciseName: "Weighted Dips",
    tracking: "reps",
    targetSets: 5,
    targetLabel: "5x6",
  },
  {
    exerciseId: "chinups",
    exerciseName: "Chin-ups",
    tracking: "reps",
    targetSets: 3,
    targetLabel: "3x8",
  },
  {
    exerciseId: "front-lever-row",
    exerciseName: "Front Lever Row",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x6",
  },
  {
    exerciseId: "scapular-pullups",
    exerciseName: "Scapular Pull-ups",
    tracking: "reps",
    targetSets: 3,
    targetLabel: "3x10",
  },
];

const tuesdayExercises: PlannedExercise[] = [
  {
    exerciseId: "planche-lean-hold",
    exerciseName: "Planche Lean Hold",
    tracking: "seconds",
    targetSets: 4,
    targetLabel: "4x25-30s",
  },
  {
    exerciseId: "tuck-planche-hold",
    exerciseName: "Tuck Planche Hold",
    tracking: "seconds",
    targetSets: 5,
    targetLabel: "5xmax",
  },
  {
    exerciseId: "planche-pushups",
    exerciseName: "Planche Push-ups",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x8-10",
  },
  {
    exerciseId: "l-sit",
    exerciseName: "L-sit",
    tracking: "seconds",
    targetSets: 4,
    targetLabel: "4xmax",
  },
  {
    exerciseId: "hanging-leg-raises",
    exerciseName: "Hanging Leg Raises",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x10-15",
  },
  {
    exerciseId: "hollow-hold",
    exerciseName: "Hollow Hold",
    tracking: "seconds",
    targetSets: 3,
    targetLabel: "3x40s",
  },
];

const wednesdayExercises: PlannedExercise[] = [
  {
    exerciseId: "pullups-volume",
    exerciseName: "Pull-ups",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x8",
  },
  {
    exerciseId: "dips-volume",
    exerciseName: "Dips",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x10",
  },
  {
    exerciseId: "bodyweight-rows",
    exerciseName: "Bodyweight Rows",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x12",
  },
  {
    exerciseId: "pushups",
    exerciseName: "Push-ups",
    tracking: "reps",
    targetSets: 3,
    targetLabel: "3x15-20",
  },
  {
    exerciseId: "plank",
    exerciseName: "Plank",
    tracking: "seconds",
    targetSets: 3,
    targetLabel: "3x45-60s",
  },
];

const fridayExercises: PlannedExercise[] = [
  {
    exerciseId: "muscle-up-technique",
    exerciseName: "Muscle-up Technique",
    tracking: "reps",
    targetSets: 5,
    targetLabel: "5x3",
  },
  {
    exerciseId: "explosive-pullups",
    exerciseName: "Explosive Pull-ups",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x5",
  },
  {
    exerciseId: "straight-bar-dips",
    exerciseName: "Straight Bar Dips",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x6-8",
  },
  {
    exerciseId: "dragon-flag",
    exerciseName: "Dragon Flag",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x5",
  },
  {
    exerciseId: "compression-holds",
    exerciseName: "Compression Holds",
    tracking: "seconds",
    targetSets: 4,
    targetLabel: "4x20s",
  },
];

const days: WorkoutDay[] = [
  {
    id: "monday",
    name: "Monday",
    focus: "Pull / Push Strength",
    exercises: mondayExercises,
  },
  {
    id: "tuesday",
    name: "Tuesday",
    focus: "Planche / Core",
    exercises: tuesdayExercises,
  },
  {
    id: "wednesday",
    name: "Wednesday",
    focus: "Volume / Conditioning",
    exercises: wednesdayExercises,
  },
  {
    id: "friday",
    name: "Friday",
    focus: "Technique / Skill",
    exercises: fridayExercises,
  },
];

export const workoutPlan: WorkoutPlan = {
  days,
};