import { Exercise } from "@/types/exercise"

export type StrengthRecord = {
  id: string,
  date: string,
  exerciseName: string,
  value: number,
  tracking: Exercise['tracking'],
  notes?: string
}