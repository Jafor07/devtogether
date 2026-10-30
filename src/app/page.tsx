
import Sidebar from "@/components/layout/Sidebar";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 md:flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <section className="min-w-0 flex-1 p-5 md:p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Workspace / Overview</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Dashboard
            </h1>
          </div>

          <div className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Jafor
          </div>
        </header>

        <DashboardOverview />
      </section>
    </main>
  );
}
