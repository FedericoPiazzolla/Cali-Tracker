import { Exercise } from "@/types/exercise";

type Props = {
  name: string;
  onNameChange: (value: string) => void;
  category: Exercise["category"];
  onCategoryChange: (value: Exercise["category"]) => void;
  tracking: Exercise["tracking"];
  onTrackingChange: (value: Exercise["tracking"]) => void;
  onSubmit: () => void;
  disabled?: boolean;
  buttonLabel?: string;
};

export default function ExerciseForm({
  name,
  onNameChange,
  category,
  onCategoryChange,
  tracking,
  onTrackingChange,
  onSubmit,
  disabled = false,
  buttonLabel = "Add",
}: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="my-8 w-full max-w-xl rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium text-black/80">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="es Pull-ups"
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
          />
        </div>

        <div className="w-full sm:w-36">
          <label className="mb-1 block text-sm font-medium text-black/80">
            Category
          </label>
          <select
            value={category}
            onChange={(e) =>
              onCategoryChange(e.target.value as Exercise["category"])
            }
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10">
            <option value="pull">Pull</option>
            <option value="push">Push</option>
            <option value="core">Core</option>
          </select>
        </div>

        <div className="w-full sm:w-36">
          <label className="mb-1 block text-sm font-medium text-black/80">
            Tracking
          </label>
          <select
            value={tracking}
            onChange={(e) =>
              onTrackingChange(e.target.value as Exercise["tracking"])
            }
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10">
            <option value="reps">Reps</option>
            <option value="seconds">Seconds</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={onSubmit}
          disabled={disabled}
          className={`w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto
          ${disabled ? "opacity-40 cursor-not-allowed" : "hover:opacity-90 active:opacity-80"}`}>
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
