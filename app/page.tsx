// ==================================================
// COMPONENT: HomePage
// PURPOSE: Entry page for the app.
// This keeps the file simple and delegates all interactive
// task logic to the TaskBoard, which is the client component.
// TYPE: Server Component
// PROPS: None
// ==================================================

import TaskBoard from "./components/TaskBoard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <TaskBoard />
    </main>
  );
}