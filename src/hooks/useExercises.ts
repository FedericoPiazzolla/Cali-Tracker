import { useState, useEffect } from "react";
import { Exercise } from "@/types/exercise";
import { loadExercises, saveExercises } from "@/lib/storage/exercises";

export default function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const data = loadExercises();
    setExercises(data)
  }, [])

  useEffect(() => {
    saveExercises(exercises)
  }, [exercises])

  return {
    exercises,
    setExercises
  }

}