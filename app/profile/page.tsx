export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl card p-6">
      <h1 className="text-3xl font-bold">Profile Settings</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {[
          "Name", "Email", "Phone", "University", "Major", "Graduation Year", "Skills", "Experience Level", "Preferred Job Roles"
        ].map((field) => (
          <input key={field} className="rounded-lg border p-3" placeholder={field} />
        ))}
      </div>
      <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">Save Profile</button>
    </div>
  );
}
