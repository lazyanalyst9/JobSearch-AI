import { jobs } from "@/lib/dummy-data";

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="space-y-4">
      <div className="card p-5">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-slate-500">{job.company} • {job.location}</p>
        <p className="mt-4">{job.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{job.skills.map((skill) => <span key={skill} className="rounded bg-slate-100 px-2 py-1 text-sm">{skill}</span>)}</div>
      </div>
      <div className="card p-5 space-y-3">
        <h2 className="text-xl font-semibold">Apply</h2>
        <p className="text-sm text-slate-600">Click Apply to confirm submission. This will add an entry to your tracker with status = Applied and follow-up reminder in 5 business days.</p>
        <button className="rounded-lg bg-primary px-4 py-2 text-white">Apply Now</button>
      </div>
    </div>
  );
}
