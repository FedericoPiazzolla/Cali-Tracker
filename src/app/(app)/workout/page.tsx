"use client";

import { workoutPlan } from "@/data/workout-plan.mock";
import { useEffect, useState } from "react";
import useSessions from "@/hooks/useSessions";
import { WorkoutEntry, WorkoutSession } from "@/types/workout";

export default function WorkoutPage() {
  const [selectedDayId, setSelectedDayId] = useState(workoutPlan.days[0].id);
  const [completedByExerciseId, setCompletedByExerciseId] = useState<
    Record<string, boolean>
  >({});
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const { setSessions } = useSessions();

  const day =
    workoutPlan.days.find((currentDay) => currentDay.id === selectedDayId) ??
    workoutPlan.days[0];
  const completedExercises = day.exercises.filter(
    (exercise) => completedByExerciseId[exercise.exerciseId],
  );

  useEffect(() => {
    setCompletedByExerciseId({});
    setShowSavedMessage(false);
  }, [selectedDayId]);

  useEffect(() => {
    if (!showSavedMessage) return;

    const timeoutId = window.setTimeout(() => {
      setShowSavedMessage(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [showSavedMessage]);

  function handleToggleCompleted(exerciseId: string) {
    setCompletedByExerciseId((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }));
  }

  function handleSaveSession() {
    if (completedExercises.length === 0) return;

    const entries: WorkoutEntry[] = completedExercises.map((exercise) => ({
      exerciseId: exercise.exerciseId,
      exerciseName: exercise.exerciseName,
      tracking: exercise.tracking,
      sets: [],
    }));

    const newSession: WorkoutSession = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      entries,
    };

    setSessions((prev) => [...prev, newSession]);
    setCompletedByExerciseId({});
    setShowSavedMessage(true);
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col px-4">
      <div className="mt-8 p-1">
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          {day.name}
        </h1>
        <p className="mt-1 text-sm text-black/60">{day.focus}</p>
      </div>

      <div className="my-6 flex w-full flex-wrap gap-2">
        {workoutPlan.days.map((workoutDay) => {
          const isActive = workoutDay.id === day.id;

          return (
            <button
              key={workoutDay.id}
              onClick={() => setSelectedDayId(workoutDay.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-amber-300 text-black shadow-sm"
                  : "bg-white/80 text-black/80 ring-1 ring-black/10 hover:bg-white"
              }`}>
              {workoutDay.name}
            </button>
          );
        })}
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {day.exercises.map((exercise) => (
          <li
            key={exercise.exerciseId}
            className={`rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md ${
              completedByExerciseId[exercise.exerciseId]
                ? "ring-2 ring-green-200 bg-white/95"
                : ""
            }`}>
            <div className="flex items-start justify-between gap-3">
              <h2
                className={`text-sm font-semibold ${
                  completedByExerciseId[exercise.exerciseId]
                    ? "text-black/70"
                    : "text-black"
                }`}>
                {exercise.exerciseName}
              </h2>
              <p
                className={`text-sm font-semibold ${
                  completedByExerciseId[exercise.exerciseId]
                    ? "text-black/50"
                    : "text-black/75"
                }`}>
                {exercise.targetLabel}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-black/5 px-2 py-1 text-xs font-medium text-black/70">
                {exercise.tracking}
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                {exercise.targetSets} sets
              </span>
            </div>

            <label className="mt-4 flex items-center gap-2 text-xs font-medium text-black/70">
              <input
                type="checkbox"
                checked={Boolean(completedByExerciseId[exercise.exerciseId])}
                onChange={() => handleToggleCompleted(exercise.exerciseId)}
                className="h-4 w-4 rounded border-black/20 text-green-600 focus:ring-green-500"
              />
              Completed
            </label>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleSaveSession}
        disabled={completedExercises.length === 0}
        className={`my-6 w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm
        ${
          completedExercises.length === 0
            ? "cursor-not-allowed opacity-40"
            : "hover:opacity-90 active:opacity-80"
        }`}>
        Save session
      </button>

      {showSavedMessage && (
        <p className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
          Session saved ✓
        </p>
      )}
    </div>
  );
}
