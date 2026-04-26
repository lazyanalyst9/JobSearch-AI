import { StatCard } from "@/components/StatCard";
import { trackerSeed } from "@/lib/dummy-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Total Jobs Applied" value={14} />
        <StatCard label="Pending Applications" value={7} />
        <StatCard label="Follow-Up Reminders" value={3} />
        <StatCard label="Saved Jobs" value={9} />
        <StatCard label="Resume Score" value="82/100" hint="+4 this week" />
        <StatCard label="Recent Activity" value="5 updates" />
      </div>
      <div className="card p-5">
        <h2 className="text-xl font-semibold">Recent Application Activity</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {trackerSeed.map((item) => (
            <li key={item.id} className="rounded-lg bg-slate-50 p-3">
              Applied to <strong>{item.jobTitle}</strong> at <strong>{item.companyName}</strong> • Status: {item.applicationStatus}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
