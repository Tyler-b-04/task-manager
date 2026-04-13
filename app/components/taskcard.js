'use client';

// ==================================================
// COMPONENT: TaskCard
// PURPOSE: Displays one task row and sends toggle and delete
// actions back up to the TaskBoard through callback props.
// TYPE: Client Component
// PROPS:
// - id: unique task id
// - title: task text
// - done: completion status
// - onToggle: callback to toggle a task
// - onDelete: callback to delete a task
// ==================================================

export default function TaskCard({ title, done, id, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-center gap-3">
        <button
          // Clicking this button ends the task id upward so the parent
          // component can decide how to update state.
          onClick={() => onToggle(id)}
          className={`h-5 w-5 rounded-full border-2 transition ${
            done
              ? 'border-orange-500 bg-orange-500'
              : 'border-zinc-500 bg-transparent'
          }`}
        />
        <span
          // The conditional classes make completed tasks look visibly
          // different so anyone using the app can scan the list faster.
          className={done ? 'text-zinc-500 line-through' : 'text-zinc-100'}
        >
          {title}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className="rounded-xl bg-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          {done ? 'Undo' : 'Done'}
        </button>

        <button
          // Delete also sends the id upward because this component does
          // not own the task array and should not modify state itself.
          onClick={() => onDelete(id)}
          className="rounded-xl bg-orange-500/20 px-3 py-2 text-sm text-orange-300 hover:bg-orange-500/30"
        >
          Delete
        </button>
      </div>
    </div>
  );
}