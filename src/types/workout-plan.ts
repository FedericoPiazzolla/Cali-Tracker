import { Exercise } from "@/types/exercise";

export type PlannedExercise = {
  exerciseId: string;
  exerciseName: string;
  tracking: Exercise["tracking"];
  targetSets: number;
  targetLabel: string;
};

export type WorkoutDay = {
  id: string;
  name: string;
  focus: string;
  exercises: PlannedExercise[];
};

export type WorkoutPlan = {
  days: WorkoutDay[];
};
