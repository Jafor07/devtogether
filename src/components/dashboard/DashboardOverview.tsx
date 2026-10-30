
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DevTogether",
    description: "A collaborative project management platform.",
    progress: 35,
    status: "In Progress" as const,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio and developer showcase.",
    progress: 80,
    status: "In Progress" as const,
  },
  {
    title: "Learning Dashboard",
    description: "A platform for tracking learning progress.",
    progress: 100,
    status: "Completed" as const,
  },
];

const tasks = [
  { title: "Create dashboard layout", done: true },
  { title: "Build project cards", done: false },
  { title: "Implement task management", done: false },
  { title: "Improve mobile responsiveness", done: false },
];

export default function DashboardOverview() {
  const completedTasks = tasks.filter((task) => task.done).length;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-slate-900">
          Welcome back, Jafor!
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Here is what is happening in your workspace.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-indigo-600 p-5 text-white">
          <p className="text-sm text-indigo-100">Total Projects</p>
          <p className="mt-2 text-3xl font-bold">{projects.length}</p>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-slate-500">Total Tasks</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {tasks.length}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-slate-500">Completed Tasks</p>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {completedTasks}
          </p>
        </div>
      </section>

      <section id="projects">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Your Projects
          </h2>
          <span className="text-sm text-slate-500">
            {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="tasks" className="rounded-xl border bg-white p-5">
        <h2 className="mb-4 text-lg font-bold text-slate-900">
          Recent Tasks
        </h2>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="flex items-center gap-3 text-sm"
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded border ${
                  task.done
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-slate-300"
                }`}
              >
                {task.done ? "✓" : ""}
              </span>

              <span
                className={
                  task.done
                    ? "text-slate-400 line-through"
                    : "text-slate-700"
                }
              >
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
