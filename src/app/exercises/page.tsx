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

  const fileterdExercises =
    selectedCategory === "all"
      ? exercises
      : exercises.filter((e) => e.category === selectedCategory);

  console.log(selectedCategory);
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto px-4">
      <h1>Exercises</h1>

      <div className="w-72 flex flex-row justify-between my-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className="bg-white text-black px-4 rounded-2xl cursor-pointer">
            {category}
          </button>
        ))}
      </div>

      <ul className="flex gap-4">
        {fileterdExercises.map((exercise) => (
          <ExerciseRow key={exercise.id} exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}
