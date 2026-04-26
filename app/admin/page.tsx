import { jobs } from "@/lib/dummy-data";

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-4"><p className="text-sm">Registered Students</p><p className="text-2xl font-bold">1,284</p></div>
        <div className="card p-4"><p className="text-sm">Applications Tracked</p><p className="text-2xl font-bold">8,492</p></div>
        <div className="card p-4"><p className="text-sm">Featured Jobs</p><p className="text-2xl font-bold">12</p></div>
      </div>
      <div className="card p-5">
        <h2 className="text-xl font-semibold">Manage Jobs</h2>
        <button className="my-3 rounded bg-primary px-3 py-2 text-sm text-white">Add Job</button>
        <ul className="space-y-2 text-sm">
          {jobs.map((job) => (
            <li key={job.id} className="flex items-center justify-between rounded bg-slate-50 p-3">
              <span>{job.title} - {job.company}</span>
              <span className="space-x-2">
                <button className="rounded border px-2 py-1">Edit</button>
                <button className="rounded border px-2 py-1">Delete</button>
                <button className="rounded border px-2 py-1">Feature</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
