import { Exercise } from "@/types/exercise";

const STORAGE_KEY = 'cali-tracker:exercises';

export function loadExercises() {
  if( typeof window === 'undefined') return [];

  const raw = localStorage.getItem(STORAGE_KEY);

  if(raw === null) return [];

  try {
    const result = JSON.parse(raw)
    return result;
  } catch (error) {
    return []
  }
}

export function saveExercises(exercises:Exercise[]) {
  if( typeof window === 'undefined') return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises));
}