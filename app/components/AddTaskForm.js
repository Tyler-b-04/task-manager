'use client';

import { useState } from 'react';

// ==================================================
// COMPONENT: AddTaskForm
// PURPOSE: Controlled form that collects a new task title
// and sends it upward to TaskBoard through the onAdd callback.
// TYPE: Client Component
// PROPS:
// - onAdd: function that receives the new task title
// ==================================================

export default function AddTaskForm({ onAdd }) {
  // This tracks the input field value because
  // this component needs to know what is being typed.
 
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
  
    // preventDefault stops the browser from refreshing the page
    // when the form is submitted.
  
    e.preventDefault();

    // trim removes extra spaces so blank tasks are rejected.
  
    const trimmedTitle = title.trim();

    // This validation prevents empty tasks from being added.
  
    if (!trimmedTitle) return;

    // The trimmed task title is sent up to the parent component
    // because TaskBoard owns the actual task array state.
  
    onAdd(trimmedTitle);

    // Resetting the input improves usability by preparing the form
    // for the next task immediately after submit.
  
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
      <input
        value={title}
  
        // onChange keeps the input controlled so React state stays
        // in sync with what the user sees on screen.
  
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-orange-500"
      />
      <button
        type="submit"
        className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
      >
        Add Task
      </button>
    </form>
  );
}
