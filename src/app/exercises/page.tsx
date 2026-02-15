import ExerciseRow from "@/components/ExerciseRow";
import { exercises } from "@/data/exercise.mock";

export default function Exercises() {
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto px-4">
      <h1>Exercises</h1>

      <ul className="flex gap-4">
        {exercises.map((exercise) => (
          <ExerciseRow key={exercise.id} exercise={exercise} />
        ))}
      </ul>
    </div>
  );
}
