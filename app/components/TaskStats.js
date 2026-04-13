'use client';

// ==================================================
// COMPONENT: TaskStats
// PURPOSE: Displays summary counts for the task list and
// provides one action to clear every completed task.
// TYPE: Client Component
// PROPS:
// - total: total number of tasks
// - active: number of incomplete tasks
// - completed: number of completed tasks
// - onClearCompleted: callback to remove completed tasks
// ==================================================

export default function TaskStats({ total, active, completed, onClearCompleted }) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2 text-sm">
        {/* These values are passed as props instead of recalculated here
            because TaskBoard already owns the source task data. */}
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-zinc-200">
          Total: {total}
        </span>
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-zinc-200">
          Active: {active}
        </span>
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-zinc-200">
          Done: {completed}
        </span>
      </div>

      <button
        // This callback lets the parent remove completed tasks because
        // the parent owns the task array state.
        onClick={onClearCompleted}
        className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-orange-600"
      >
        Clear Completed
      </button>
    </div>
  );
}