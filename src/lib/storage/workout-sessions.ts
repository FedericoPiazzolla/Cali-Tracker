import { WorkoutSession } from "@/types/workout";

const STORAGE_KEY = 'cali-tracker:sessions';

export function loadSessions() {
  if( typeof window === 'undefined') return [];

  const raw = localStorage.getItem(STORAGE_KEY);

  if(raw === null) return [];

  try {
    const result = JSON.parse(raw) as WorkoutSession[];
    return result;
  } catch (error) {
    return []
  }
}

export function saveSessions(sessions:WorkoutSession[]) {
  if( typeof window === 'undefined') return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}