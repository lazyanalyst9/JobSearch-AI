import Link from "next/link";
import { Job } from "@/lib/types";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-slate-500">{job.company} • {job.location}</p>
        </div>
        {job.featured ? <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-primary">Featured</span> : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded bg-slate-100 px-2 py-1">{job.remoteType}</span>
        <span className="rounded bg-slate-100 px-2 py-1">{job.employmentType}</span>
        <span className="rounded bg-slate-100 px-2 py-1">{job.level}</span>
        {job.optCptFriendly ? <span className="rounded bg-teal-100 px-2 py-1 text-teal-700">OPT/CPT Friendly</span> : null}
      </div>
      <p className="mt-3 text-sm text-slate-600">{job.description}</p>
      <div className="mt-4 flex gap-2">
        <Link href={`/jobs/${job.id}`} className="rounded-lg bg-primary px-3 py-2 text-sm text-white">View Details</Link>
        <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm">Save Job</button>
      </div>
    </article>
  );
}
