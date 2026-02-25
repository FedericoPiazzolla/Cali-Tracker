"use client";
import ExerciseRow from "@/components/ExerciseRow";
import { Exercise } from "@/types/exercise";
//import { exercises } from "@/data/exercise.mock";
import { useState } from "react";
import useExercises from "@/hooks/useExercises";

export default function Exercises() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "pull", "push", "core"];
  const { exercises, setExercises } = useExercises();
  const [name, setName] = useState("");
  const [formCategory, setFormCategory] =
    useState<Exercise["category"]>("pull");
  const [tracking, setTracking] = useState<Exercise["tracking"]>("reps");

  function handleAddExercise() {
    if (!name.trim()) return;

    const newExercise: Exercise = {
      id: crypto.randomUUID(),
      name: name.trim(),
      category: formCategory,
      tracking,
    };

    setExercises((prev) => [...prev, newExercise]);

    setName("");
    setFormCategory("pull");
    setTracking("reps");
  }

  function handleDeleteExercise(id: string) {
    setExercises((prev) => prev.filter((e) => e.id !== id));
  }

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
  }

  const filteredExercises =
    selectedCategory === "all"
      ? exercises
      : exercises.filter((e) => e.category === selectedCategory);

  const sortedExercises = [...filteredExercises].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-full max-w-xl mt-8 p-1">
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Exercises
        </h1>
        <p className="my-1 text-sm text-black/60">
          Create and manage your calisthenics exercises
        </p>
      </div>

      <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur my-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-black/80">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="es Pull-ups"
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="w-full sm:w-36">
            <label className="mb-1 block text-sm font-medium text-black/80">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={formCategory}
              onChange={(e) =>
                setFormCategory(e.target.value as Exercise["category"])
              }
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10">
              <option value="pull">Pull</option>
              <option value="push">Push</option>
              <option value="core">Core</option>
            </select>
          </div>

          <div className="w-full sm:w-36">
            <label className="mb-1 block text-sm font-medium text-black/80">
              Tracking
            </label>
            <select
              name="tracking"
              id="tracking"
              value={tracking}
              onChange={(e) =>
                setTracking(e.target.value as Exercise["tracking"])
              }
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10">
              <option value="reps">Reps</option>
              <option value="seconds">Seconds</option>
            </select>
          </div>

          <button
            onClick={handleAddExercise}
            className="w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 active:opacity-80 sm:w-auto">
            Add
          </button>
        </div>
      </div>

      <div className="my-6 flex w-full max-w-xl flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === selectedCategory;

          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-amber-300 text-black shadow-sm"
                  : "bg-white/80 text-black/80 ring-1 ring-black/10 hover:bg-white"
              }`}>
              {category}
            </button>
          );
        })}
      </div>

      {sortedExercises.length === 0 ? (
        <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-white/80 p-6 text-center text-sm text-black/70">
          No exercises found.
        </div>
      ) : (
        <ul className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {sortedExercises.map((exercise) => (
            <ExerciseRow
              key={exercise.id}
              exercise={exercise}
              onDelete={handleDeleteExercise}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
