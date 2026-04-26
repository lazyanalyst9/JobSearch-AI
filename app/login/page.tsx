export default function LoginPage() {
  return (
    <div className="mx-auto max-w-lg card p-6">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-4 space-y-3">
        <input className="w-full rounded-lg border p-3" placeholder="Email" type="email" />
        <input className="w-full rounded-lg border p-3" placeholder="Password" type="password" />
        <button className="w-full rounded-lg bg-primary p-3 text-white">Sign in</button>
      </form>
    </div>
  );
}
