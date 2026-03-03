import { useEffect, useState } from "react";
import { Exercise } from "@/types/exercise";
import { loadExercises, saveExercises } from "@/lib/storage/exercises";

export default function useExercises() {
  // Lazy init: read from localStorage once on first render (client only)
  const [exercises, setExercises] = useState<Exercise[]>(() => loadExercises());

  // Prevent overwriting localStorage on the very first render
  // (useful if loadExercises() ever returns [] temporarily or you change init logic)
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    saveExercises(exercises);
  }, [exercises, hasHydrated]);

  return { exercises, setExercises };
}
