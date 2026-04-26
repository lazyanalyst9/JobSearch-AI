import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="grid gap-8 py-16 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-primary">Free for students</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">Apply Smarter. Track Better. Get Hired Faster.</h1>
        <p className="mt-5 text-lg text-slate-600">A free AI-powered job search portal built for students to find jobs, tailor resumes, track applications, and follow up with recruiters.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/register" className="rounded-xl bg-primary px-5 py-3 text-white">Get Started Free</Link>
          <Link href="/jobs" className="rounded-xl border border-slate-300 px-5 py-3">Browse Jobs</Link>
        </div>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold">StudentApply AI Flow</h2>
        <ol className="mt-4 space-y-2 text-sm text-slate-600">
          <li>1. Register and upload resume.</li>
          <li>2. Search student-friendly jobs.</li>
          <li>3. AI tailors resume to selected role.</li>
          <li>4. Apply and auto-update tracking sheet.</li>
          <li>5. Follow-up reminders + AI HR message drafts.</li>
        </ol>
      </div>
    </section>
  );
}
