import { Exercise } from "@/types/exercise";

export default function ExerciseRow(props: { exercise: Exercise }) {
  return (
    <li className="p-4 bg-blue-200 text-black rounded-2xl">
      <h2>{props.exercise.name}</h2>
      <p>{props.exercise.category}</p>
      <p>{props.exercise.tracking}</p>
    </li>
  );
}
