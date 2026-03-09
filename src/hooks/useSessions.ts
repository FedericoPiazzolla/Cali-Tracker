import { WorkoutSession } from "@/types/workout";
import { loadSessions, saveSessions } from "@/lib/storage/workout-sessions";
import { useState, useEffect } from "react";

export default function useSessions() {
  // Keep SSR and first client render identical. Load persisted data after mount.
  const [sessions, setSessions] = useState<WorkoutSession[]>([]);

  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setSessions(loadSessions());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    saveSessions(sessions);
  }, [sessions, hasHydrated]);

  return { sessions, setSessions };
}
