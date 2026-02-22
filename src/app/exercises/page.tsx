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

    setExercises([...exercises, newExercise]);

    setName("");
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
    <div className="flex flex-col items-center max-w-xl mx-auto px-4">
      <h1>Exercises</h1>

      <div className="bg-white text-black">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          name="category"
          id="category"
          value={formCategory}
          onChange={(e) =>
            setFormCategory(e.target.value as Exercise["category"])
          }>
          <option value="pull">Pull</option>
          <option value="push">Push</option>
          <option value="core">Core</option>
        </select>
        <select
          name="tracking"
          id="tracking"
          value={tracking}
          onChange={(e) => setTracking(e.target.value as Exercise["tracking"])}>
          <option value="reps">Reps</option>
          <option value="seconds">Seconds</option>
        </select>
        <button onClick={handleAddExercise}>Add</button>
      </div>

      <div className="w-72 flex flex-row justify-between my-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={` px-4 rounded-2xl cursor-pointer text-black ${category === selectedCategory ? "bg-amber-300 " : "bg-white "}`}>
            {category}
          </button>
        ))}
      </div>

      {sortedExercises.length === 0 ? (
        <p>No Exercises found</p>
      ) : (
        <ul className="flex gap-4">
          {sortedExercises.map((exercise) => (
            <ExerciseRow key={exercise.id} exercise={exercise} />
          ))}
        </ul>
      )}
    </div>
  );
}
