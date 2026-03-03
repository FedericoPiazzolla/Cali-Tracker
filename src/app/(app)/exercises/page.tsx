"use client";
import ExerciseRow from "@/components/ExerciseRow";
import { Exercise, EditDraft } from "@/types/exercise";
import { useState } from "react";
import useExercises from "@/hooks/useExercises";
import ExerciseForm from "@/components/ExerciseForm";

type CategoryFilter = "all" | Exercise["category"];

const categories: CategoryFilter[] = ["all", "pull", "push", "core"];

export default function Exercises() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");
  const { exercises, setExercises } = useExercises();
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState<Exercise["category"]>("pull");
  const [newTracking, setNewTracking] = useState<Exercise["tracking"]>("reps");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingDraft, setEditingDraft] = useState<EditDraft | null>(null);

  function handleAddExercise() {
    if (!newName.trim()) return;

    const newExercise: Exercise = {
      id: crypto.randomUUID(),
      name: newName.trim(),
      category: newCategory,
      tracking: newTracking,
    };

    setExercises((prev) => [...prev, newExercise]);

    setNewName("");
    setNewCategory("pull");
    setNewTracking("reps");
  }

  function handleStartEdit(exercise: Exercise) {
    const isLocked = editingId !== null && editingId !== exercise.id;
    if (isLocked) return;

    setEditingId(exercise.id);
    setEditingDraft({
      name: exercise.name,
      category: exercise.category,
      tracking: exercise.tracking,
    });
  }

  function HandleClearEdit() {
    setEditingId(null);
    setEditingDraft(null);
  }

  function onDraftChange(patch: Partial<EditDraft>) {
    setEditingDraft((prev) => {
      if (!prev) return prev;
      return { ...prev, ...patch };
    });
  }

  function handleEditExercise() {
    if (!editingId) return;
    if (!editingDraft) return;

    const nextName = editingDraft.name.trim();
    if (!nextName) return;

    setExercises((prev) =>
      prev.map((e) =>
        e.id === editingId
          ? {
              ...e,
              name: nextName,
              category: editingDraft.category,
              tracking: editingDraft.tracking,
            }
          : e,
      ),
    );

    HandleClearEdit();
  }

  function handleDeleteExercise(id: string) {
    setExercises((prev) => prev.filter((e) => e.id !== id));
  }

  const visibleExercises = (
    selectedCategory === "all"
      ? exercises
      : exercises.filter((e) => e.category === selectedCategory)
  )
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

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

      <ExerciseForm
        name={newName}
        onNameChange={setNewName}
        category={newCategory}
        onCategoryChange={setNewCategory}
        tracking={newTracking}
        onTrackingChange={setNewTracking}
        onSubmit={handleAddExercise}
        disabled={!newName.trim()}
      />

      <div className="my-6 flex w-full max-w-xl flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === selectedCategory;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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

      {visibleExercises.length === 0 ? (
        <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-white/80 p-6 text-center text-sm text-black/70">
          No exercises found.
        </div>
      ) : (
        <ul className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleExercises.map((exercise) => (
            <ExerciseRow
              key={exercise.id}
              exercise={exercise}
              isEditing={editingId === exercise.id}
              editDraft={editingDraft}
              onDraftChange={onDraftChange}
              onDelete={handleDeleteExercise}
              onEdit={handleStartEdit}
              onCancel={HandleClearEdit}
              onSave={handleEditExercise}
              editLocked={editingId !== null && editingId !== exercise.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
