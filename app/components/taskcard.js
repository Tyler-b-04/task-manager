'use client';

export default function TaskCard({ title, done, id, onToggle }) {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <span className={done ? 'line-through text-gray-400' : ''}>
        {title}
      </span>
      <button
        className="text-sm text-green-700 hover:underline"
        onClick={() => onToggle(id)}
      >Toggle</button>
    </div>
  );
}