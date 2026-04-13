import TaskCard from './TaskCard';

// ==================================================
// COMPONENT: TaskList
// PURPOSE: Renders the visible task list that TaskBoard has
// already filtered. This component focuses only on displaying
// the correct set of tasks.
// TYPE: Presentational Component
// PROPS:
// - tasks: array of task objects to display
// - onToggle: callback for toggling a task
// - onDelete: callback for deleting a task
// ==================================================

export default function TaskList({ tasks, onToggle, onDelete }) {
   // This empty-state message gives the user feedback when there
   // are no tasks to display for the current filter.
  if (tasks.length === 0) {
    return <p className="text-gray-400 p-4">No tasks yet!</p>;
  }
  return (
      <p className="rounded-2xl border border-dashed border-zinc-700 p-4 text-zinc-400">
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {/* map is used to render one TaskCard for each task object.
          key helps to track list items efficiently between renders. */}
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard
            id={task.id}
            title={task.title}
            done={task.done}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
