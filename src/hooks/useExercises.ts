import { useEffect, useState } from "react";
import { Exercise } from "@/types/exercise";
import { loadExercises, saveExercises } from "@/lib/storage/exercises";

export default function useExercises() {
  // Keep SSR and first client render identical. Load persisted data after mount.
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // Track when localStorage has been read at least once.
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setExercises(loadExercises());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    saveExercises(exercises);
  }, [exercises, hasHydrated]);

  return { exercises, setExercises };
}
