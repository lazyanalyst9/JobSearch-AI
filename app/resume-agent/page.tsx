const aiOutput = {
  missingKeywords: ["CI/CD", "Unit Testing", "Microservices"],
  summary: "Motivated Computer Science student with hands-on experience building React and Node.js applications, strong collaboration skills, and proven ability to deliver ATS-friendly, production-quality features.",
  bullets: [
    "Developed responsive student-facing modules in Next.js, improving page speed and accessibility.",
    "Integrated REST APIs and optimized data fetching, reducing load time by 25%.",
    "Collaborated with cross-functional teams to ship internship portal features in agile sprints."
  ]
};

export default function ResumeAgentPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">AI Resume Modifier</h1>
      <div className="card grid gap-4 p-5 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm">Upload Resume</label>
          <input type="file" className="w-full rounded-lg border p-3" />
          <label className="block text-sm">Select Job</label>
          <select className="w-full rounded-lg border p-3"><option>Software Engineering Intern - CloudNest Labs</option></select>
          <button className="rounded-lg bg-primary px-4 py-3 text-white">Analyze & Modify Resume</button>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">ATS Improvement Suggestions</h2>
          <p className="text-sm">Missing keywords: {aiOutput.missingKeywords.join(", ")}</p>
          <p className="text-sm"><strong>Tailored Summary:</strong> {aiOutput.summary}</p>
          <ul className="list-disc pl-5 text-sm">
            {aiOutput.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm">Download Modified Resume</button>
        </div>
      </div>
    </div>
  );
}
