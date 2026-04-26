import { trackerSeed } from "@/lib/dummy-data";

export default function FollowUpsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Follow-Up Reminders</h1>
      {trackerSeed.map((item) => (
        <div key={item.id} className="card p-5">
          <p className="font-medium">Do you want to follow up with HR?</p>
          <p className="mt-1 text-sm text-slate-600">{item.companyName} • {item.jobTitle} • Follow-up on {item.followUpDate}</p>
          <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm">
            Hi {item.hrContactName}, I recently applied for the {item.jobTitle} role at {item.companyName} and wanted to kindly follow up on my application. I’m very interested in the opportunity and would appreciate any updates when available.
          </div>
          <button className="mt-3 rounded-lg bg-accent px-4 py-2 text-white">Mark Follow-Up Completed</button>
        </div>
      ))}
    </div>
  );
}
