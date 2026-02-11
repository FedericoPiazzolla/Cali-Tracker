import { exercises } from "@/data/exercise.mock";

export default function Exercises() {
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto px-4">
      <h1>Exercises</h1>

      <ul className="flex gap-4">
        {exercises.map((exercise) => (
          <li
            key={exercise.id}
            className="p-4 bg-blue-200 text-black rounded-2xl">
            <h2>{exercise.name}</h2>
            <p>{exercise.category}</p>
            <p>{exercise.tracking}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
