
type ProjectCardProps = {
  title: string;
  description: string;
  progress: number;
  status: "In Progress" | "Completed" | "Planning";
};

export default function ProjectCard({
  title,
  description,
  progress,
  status,
}: ProjectCardProps) {
  const statusColors = {
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Planning: "bg-amber-100 text-amber-700",
  };

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-500">{description}</p>

      <div className="mt-6 flex justify-between text-sm">
        <span className="text-slate-500">Progress</span>
        <span className="font-semibold text-slate-800">{progress}%</span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-600"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </article>
  );
}
