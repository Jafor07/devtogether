import Sidebar from "@/components/layout/Sidebar";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <DashboardOverview />
    </div>
  );
}