"use client";

import { TrackerItem } from "@/lib/types";
import * as XLSX from "xlsx";

export function TrackerTable({ rows }: { rows: TrackerItem[] }) {
  const downloadCsv = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Applications");
    XLSX.writeFile(wb, "studentapply_tracker.xlsx");
  };

  return (
    <div className="card overflow-auto p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Application Tracker Sheet</h3>
        <button onClick={downloadCsv} className="rounded-lg bg-primary px-3 py-2 text-sm text-white">Download Excel</button>
      </div>
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b text-slate-500">
            <th>Date Applied</th><th>Company</th><th>Job Title</th><th>Status</th><th>Follow-Up Date</th><th>HR Email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="py-2">{row.dateApplied}</td>
              <td>{row.companyName}</td>
              <td>{row.jobTitle}</td>
              <td>{row.applicationStatus}</td>
              <td>{row.followUpDate}</td>
              <td>{row.hrEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
