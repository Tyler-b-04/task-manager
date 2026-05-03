import TaskCard from './taskcard';

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
  if (tasks.length === 0) {
    return <p className="text-gray-400 p-4">No tasks yet</p>;
  }

  return (
    <ul className="space-y-3">
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
