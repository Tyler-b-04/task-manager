'use client';

import { useEffect, useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './Tasklist';
import TaskStats from './TaskStats';

// ==================================================
// COMPONENT: TaskBoard
// PURPOSE: This is the main client component that holds the task data,
// selected filter, and all task-related handlers.
// It sends data down to child components and receives
// user-triggered events back through the callback props.
// TYPE: Client Component
// PROPS: None
// ==================================================

export default function TaskBoard() {
  
  // This state stores the task data as tasks change
  // over time when the a user adds, toggles, deletes, or clears items.
 
  const [tasks, setTasks] = useState(() => {
 
    // This guard prevents errors during server rendering as
    // localStorage only exists in the browser, not on the server.
    
    if (typeof window === 'undefined') return [];

    // Reads localStorage inside the lazy initializer meaning the saved
    // tasks are loaded only on the first render instead of every render.
   
    const savedTasks = localStorage.getItem('tasks');

    // If saved task data exists, parse it back into an array.
    // Otherwise start with an empty task list.
   
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Filter is separate state because the selected view can change
  // independently from the underlying task data.
  
  const [filter, setFilter] = useState('all');

  // This effect syncs React state to localStorage so that when
  // the tasks array changes, the tasks survive a browser refresh.
 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // This handler creates a new task object and adds it immutably.
  // Using the spread pattern returns a brand new array so React
  // detects the state change and re-renders the UI.
  
  function handleAdd(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // map is used to keep every task except change the
  // one whose id matches the clicked task.

  function handleToggle(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  // filter is used here to build a new array that excludes
  // deleted tasks. This keeps the update unchangeable for React.
  function handleDelete(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  // This removes every completed task in one action by keeping
  // only tasks which done value is false.
  function handleClearCompleted() {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => !task.done)
    );
  }

  // These values are derived from tasks instead of being stored in state.
  // This avoids duplicate data and will prevent the counts from getting out of sync.
  const completedCount = tasks.filter((task) => task.done).length;
  const activeCount = tasks.filter((task) => !task.done).length;

  // visibleTasks is derived instead of stored in state because it can
  // always be recalculated from tasks + filter during render.
  const visibleTasks =
    filter === 'active'
      ? tasks.filter((task) => !task.done)
      : filter === 'done'
      ? tasks.filter((task) => task.done)
      : tasks;

  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-orange-400">
          Ember Task Manager
        </h1>
        <p className="mt-2 text-zinc-400">
          A dark grey and orange task manager built with React, Next.js, and Tailwind.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <AddTaskForm onAdd={handleAdd} />

        <div className="mb-6 flex flex-wrap gap-2">
          {/* This button updates filter state to show every task. */}
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === 'all'
                ? 'bg-orange-500 text-black'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            All
          </button>

          {/* This button changes the view to incomplete tasks only. */}
          <button
            onClick={() => setFilter('active')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === 'active'
                ? 'bg-orange-500 text-black'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Active
          </button>

          {/* This button changes the view to completed tasks only. */}
          <button
            onClick={() => setFilter('done')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === 'done'
                ? 'bg-orange-500 text-black'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Done
          </button>
        </div>

        <TaskStats
          total={tasks.length}
          active={activeCount}
          completed={completedCount}
          onClearCompleted={handleClearCompleted}
        />

        <TaskList
          tasks={visibleTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
}