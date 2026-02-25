import { Exercise } from "@/types/exercise";

type Props = {
  exercise: Exercise;
  onDelete: (id: string) => void;
};

export default function ExerciseRow({ exercise, onDelete }: Props) {
  return (
    <li className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-sm font-semibold text-black">{exercise.name}</h2>

        <button
          onClick={() => {
            if (!confirm("Delete this exercise?")) return;
            onDelete(exercise.id);
          }}
          className="rounded-lg p-1.5 text-black/40 hover:bg-red-50 hover:text-red-500 transition"
          aria-label="Delete exercise">
          ✕
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
          {exercise.category}
        </span>

        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
          {exercise.tracking}
        </span>
      </div>
    </li>
  );
}
