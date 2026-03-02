export type Exercise = {
  id: string,
  name: string,
  category: "pull" | "push" | "core",
  tracking: "reps" | "seconds"
}

export type EditDraft = {
  name: string;
  category: Exercise["category"];
  tracking: Exercise["tracking"];
};