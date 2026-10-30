
"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: "▦" },
  { name: "Projects", href: "#projects", icon: "▣" },
  { name: "My Tasks", href: "#tasks", icon: "✓" },
  { name: "Team", href: "#team", icon: "♙" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white p-5">
      <Link href="/" className="mb-10 text-2xl font-bold text-indigo-600">
        DevTogether<span className="text-slate-900">.</span>
      </Link>

      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="flex flex-col gap-2">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
              active === item.name
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">
          Build together
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Organize projects and collaborate with your team.
        </p>
      </div>
    </aside>
  );
}
