import type {
  PlannedExercise,
  WorkoutDay,
  WorkoutPlan,
} from "@/types/workout-plan";

const mondayExercises: PlannedExercise[] = [
  {
    exerciseId: "pullups",
    exerciseName: "Pull-ups",
    tracking: "reps",
    targetSets: 5,
    targetLabel: "5x5",
  },
  {
    exerciseId: "dips",
    exerciseName: "Dips",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x6",
  },
  {
    exerciseId: "chinups",
    exerciseName: "Chin-ups",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x6",
  },
  {
    exerciseId: "front-lever-row",
    exerciseName: "Front lever row",
    tracking: "reps",
    targetSets: 3,
    targetLabel: "3x8",
  },
  {
    exerciseId: "scapular-pullups",
    exerciseName: "Scapular pull-ups",
    tracking: "reps",
    targetSets: 3,
    targetLabel: "3x12",
  },
];

const tuesdayExercises: PlannedExercise[] = [
  {
    exerciseId: "planche-lean-hold",
    exerciseName: "Planche lean hold",
    tracking: "seconds",
    targetSets: 4,
    targetLabel: "4x20s",
  },
  {
    exerciseId: "tuck-planche",
    exerciseName: "Tuck planche",
    tracking: "seconds",
    targetSets: 4,
    targetLabel: "4x12s",
  },
  {
    exerciseId: "pseudo-planche-pushup",
    exerciseName: "Pseudo planche push-up",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x8",
  },
  {
    exerciseId: "l-sit",
    exerciseName: "L-sit",
    tracking: "seconds",
    targetSets: 4,
    targetLabel: "4x20s",
  },
  {
    exerciseId: "hanging-leg-raises",
    exerciseName: "Hanging leg raises",
    tracking: "reps",
    targetSets: 4,
    targetLabel: "4x10",
  },
  {
    exerciseId: "hollow-hold",
    exerciseName: "Hollow hold",
    tracking: "seconds",
    targetSets: 3,
    targetLabel: "3x30s",
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
];

export const workoutPlan: WorkoutPlan = {
  days,
};
