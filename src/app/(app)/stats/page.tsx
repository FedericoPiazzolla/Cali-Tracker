"use client";

import { strengthRecords } from "@/data/strength-records.mock";
import useSessions from "@/hooks/useSessions";
import { useMemo, useState } from "react";

export default function StatsPage() {
  const { sessions } = useSessions();
  const availableExercises = useMemo(
    () => Array.from(new Set(strengthRecords.map((record) => record.exerciseName))),
    [],
  );
  const [selectedExercise, setSelectedExercise] = useState(
    availableExercises[0] ?? "",
  );
  const filteredRecords = useMemo(
    () =>
      strengthRecords.filter(
        (record) => record.exerciseName === selectedExercise,
      ),
    [selectedExercise],
  );

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col px-4">
      <div className="mt-8 p-1">
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Stats
        </h1>
      </div>

      {sessions.length === 0 ? (
        <div className="mt-5 rounded-2xl border border-black/10 bg-white/80 p-6 text-center shadow-sm">
          <h2 className="text-base font-semibold text-black">
            No workout sessions yet
          </h2>
          <p className="mt-2 text-sm text-black/60">
            Complete and save a workout to see your stats.
          </p>
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
          <p className="text-sm text-black/60">Total sessions</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-black">
            {sessions.length}
          </p>
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
        <p className="text-sm text-black/60">Exercise</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {availableExercises.map((exerciseName) => {
            const isActive = exerciseName === selectedExercise;
            return (
              <button
                key={exerciseName}
                onClick={() => setSelectedExercise(exerciseName)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-amber-300 text-black shadow-sm"
                    : "bg-white/80 text-black/80 ring-1 ring-black/10 hover:bg-white"
                }`}>
                {exerciseName}
              </button>
            );
          })}
        </div>

        <ul className="mt-4 space-y-2 text-sm text-black/80">
          {filteredRecords.map((record) => (
            <li
              key={record.id}
              className="flex items-center justify-between rounded-xl bg-black/5 px-3 py-2">
              <span>{record.date}</span>
              <span className="font-semibold">
                {record.value} {record.tracking}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
