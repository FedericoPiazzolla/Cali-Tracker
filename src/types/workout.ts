import { Exercise } from "./exercise"

export type WorkoutSet = {
  id: string,
  value: number,
  weight?: number,
  notes?: string
}

export type WorkoutEntry = {
  exerciseId: string,
  exerciseName: string,
  tracking: Exercise["tracking"],
  sets: WorkoutSet[]
}

export type WorkoutSession = {
  id: string,
  date: string,
  entries: WorkoutEntry[],
}