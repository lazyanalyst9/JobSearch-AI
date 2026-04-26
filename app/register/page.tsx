export default function RegisterPage() {
  const fields = ["Name", "Email", "Phone", "University", "Major", "Graduation Year", "Skills", "Experience Level", "Preferred Roles"];
  return (
    <div className="mx-auto max-w-3xl card p-6">
      <h1 className="text-2xl font-semibold">Create your student account</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {fields.map((field) => (
          <input key={field} className="rounded-lg border p-3" placeholder={field} />
        ))}
        <input className="rounded-lg border p-3" type="file" />
      </div>
      <button className="mt-4 rounded-lg bg-primary px-4 py-3 text-white">Register</button>
    </div>
  );
}
