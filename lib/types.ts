export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  remoteType: "Remote" | "On-site" | "Hybrid";
  employmentType: "Internship" | "Full-time";
  level: "Student" | "Fresher" | "Entry";
  optCptFriendly: boolean;
  featured?: boolean;
  skills: string[];
  description: string;
  link: string;
};

export type TrackerItem = {
  id: string;
  dateApplied: string;
  companyName: string;
  jobTitle: string;
  jobLink: string;
  resumeVersionUsed: string;
  applicationStatus: "Applied" | "Interviewing" | "Offer" | "Rejected" | "Followed Up";
  hrContactName: string;
  hrEmail: string;
  followUpDate: string;
  notes: string;
};
