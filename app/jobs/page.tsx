import { JobCard } from "@/components/JobCard";
import { jobs } from "@/lib/dummy-data";

export default function JobSearchPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Job Search</h1>
      <div className="card grid gap-3 p-4 md:grid-cols-3">
        <input className="rounded-lg border p-2" placeholder="Title, company, keyword" />
        <input className="rounded-lg border p-2" placeholder="Location or Remote" />
        <select className="rounded-lg border p-2"><option>Internship / Full-time</option><option>Internship</option><option>Full-time</option></select>
        <select className="rounded-lg border p-2"><option>Experience Level</option><option>Student</option><option>Fresher</option><option>Entry</option></select>
        <select className="rounded-lg border p-2"><option>OPT/CPT Friendly</option><option>Yes</option><option>No</option></select>
        <button className="rounded-lg bg-primary p-2 text-white">Apply Filters</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
