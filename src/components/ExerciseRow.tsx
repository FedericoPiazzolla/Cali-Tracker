import { EditDraft, Exercise } from "@/types/exercise";

type Props = {
  exercise: Exercise;
  editLocked: boolean;
  isEditing: boolean;
  editDraft: EditDraft | null;
  onDraftChange: (patch: Partial<EditDraft>) => void;
  onDelete: (id: string) => void;
  onEdit: (exercise: Exercise) => void;
  onSave: () => void;
  onCancel: () => void;
};

export default function ExerciseRow({
  exercise,
  isEditing,
  editLocked,
  editDraft,
  onDraftChange,
  onDelete,
  onEdit,
  onSave,
  onCancel,
}: Props) {
  return (
    <li
      className={`rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md
      ${isEditing ? "ring-2 ring-amber-300/60 bg-white" : ""}`}>
      <div className="flex items-start justify-between gap-2">
        {isEditing ? (
          <input
            className="w-full rounded-lg border border-black/10 bg-white px-2 py-1.5 text-sm font-medium outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
            placeholder="Exercise name"
            value={editDraft?.name ?? ""}
            type="text"
            autoFocus
            onFocus={(e) => e.currentTarget.select()}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSave();
              if (e.key === "Escape") onCancel();
            }}
            onChange={(e) => onDraftChange({ name: e.target.value })}
          />
        ) : (
          <h2 className="text-sm font-semibold text-black">{exercise.name}</h2>
        )}

        <div className="flex items-center gap-1">
          {isEditing ? (
            <>
              <button
                onClick={onSave}
                className="rounded-lg px-2 py-1 text-xs font-semibold text-green-700 hover:bg-green-50"
                aria-label="Save">
                Save
              </button>

              <button
                onClick={onCancel}
                className="rounded-lg px-2 py-1 text-xs font-semibold text-black/60 hover:bg-black/5"
                aria-label="Cancel">
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  if (editLocked) return;
                  if (!confirm("Delete this exercise?")) return;
                  onDelete(exercise.id);
                }}
                disabled={editLocked}
                className={`rounded-md p-1.5 transition ${
                  editLocked
                    ? "opacity-30 cursor-not-allowed"
                    : "text-black/40 hover:bg-red-50 hover:text-red-500 transition"
                }`}
                aria-label="Delete exercise">
                🗑
              </button>

              <button
                onClick={() => onEdit(exercise)}
                disabled={editLocked}
                className={`rounded-md p-1.5 transition ${
                  editLocked
                    ? "opacity-30 cursor-not-allowed"
                    : "text-black/40 hover:bg-black/5 hover:text-black"
                }`}
                aria-label="Edit exercise">
                ✎
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {!isEditing ? (
          <>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
              {exercise.category}
            </span>

            <span className="rounded-full bg-black/5 px-2 py-1 text-xs font-medium text-black/70">
              {exercise.tracking}
            </span>
          </>
        ) : (
          <div className="mt-3 flex flex-wrap gap-2">
            {!isEditing ? (
              <>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                  {exercise.category}
                </span>

                <span className="rounded-full bg-black/5 px-2 py-1 text-xs font-medium text-black/70">
                  {exercise.tracking}
                </span>
              </>
            ) : (
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-black/50">
                    Category
                  </label>
                  <select
                    value={editDraft?.category ?? "pull"}
                    onChange={(e) =>
                      onDraftChange({
                        category: e.target.value as Exercise["category"],
                      })
                    }
                    className="w-full rounded-lg border border-black/10 bg-white px-2 py-1.5 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10">
                    <option value="pull">Pull</option>
                    <option value="push">Push</option>
                    <option value="core">Core</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-black/50">
                    Tracking
                  </label>
                  <select
                    value={editDraft?.tracking ?? "reps"}
                    onChange={(e) =>
                      onDraftChange({
                        tracking: e.target.value as Exercise["tracking"],
                      })
                    }
                    className="w-full rounded-lg border border-black/10 bg-white px-2 py-1.5 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10">
                    <option value="reps">Reps</option>
                    <option value="seconds">Seconds</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
