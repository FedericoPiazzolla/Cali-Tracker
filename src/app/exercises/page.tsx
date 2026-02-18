"use client";
import ExerciseRow from "@/components/ExerciseRow";
import { exercises } from "@/data/exercise.mock";
import { useState } from "react";

export default function Exercises() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "pull", "push", "core"];

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

  console.log(selectedCategory);
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto px-4">
      <h1>Exercises</h1>

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
