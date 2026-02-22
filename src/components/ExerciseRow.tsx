import { Exercise } from "@/types/exercise";

export default function ExerciseRow(props: { exercise: Exercise }) {
  return (
    <li className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-sm font-semibold text-black">
          {props.exercise.name}
        </h2>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
          {props.exercise.category}
        </span>

        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
          {props.exercise.tracking}
        </span>
      </div>
    </li>
  );
}
