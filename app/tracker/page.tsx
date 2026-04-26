import { TrackerTable } from "@/components/TrackerTable";
import { trackerSeed } from "@/lib/dummy-data";

export default function TrackerPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Application Tracker</h1>
      <div className="card p-4">
        <p className="text-sm text-slate-600">Upload an existing CSV/Excel tracker or manage entries directly in-app.</p>
        <input type="file" className="mt-3 rounded-lg border p-2" />
      </div>
      <TrackerTable rows={trackerSeed} />
    </div>
  );
}
