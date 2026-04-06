export default function TaskCard({ title, done }) {
  return (
    <div className="flex items-center gap-2 p-3 border-b">
      <span
        className={done ? 'line-through text-gray-400' : 'text-gray-900'}
      >
        {title}                       {}
      </span>
      {done && <span className="text-green-600 text-xs font-bold">Done</span>}
    </div>
  );
}
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