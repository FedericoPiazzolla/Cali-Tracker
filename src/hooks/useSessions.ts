import { WorkoutSession } from "@/types/workout";
import { loadSessions, saveSessions } from "@/lib/storage/workout-sessions";
import { useState, useEffect } from "react";

export default function useSessions() {
  const [sessions, setSessions] = useState<WorkoutSession[]>(() => loadSessions());

  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    saveSessions(sessions);
  }, [sessions, hasHydrated]);

  return { sessions, setSessions };
}