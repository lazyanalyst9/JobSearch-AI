import { addBusinessDays, formatISO } from "date-fns";
import { Job, TrackerItem } from "./types";

export const jobs: Job[] = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "CloudNest Labs",
    location: "San Francisco, CA",
    remoteType: "Hybrid",
    employmentType: "Internship",
    level: "Student",
    optCptFriendly: true,
    featured: true,
    skills: ["React", "TypeScript", "Node.js", "REST API"],
    description: "Build student-focused workflows and UI components for job seekers.",
    link: "https://example.com/jobs/1"
  },
  {
    id: "2",
    title: "Junior Data Analyst",
    company: "Northwind Analytics",
    location: "Austin, TX",
    remoteType: "Remote",
    employmentType: "Full-time",
    level: "Entry",
    optCptFriendly: true,
    skills: ["SQL", "Python", "Excel", "Data Visualization"],
    description: "Analyze hiring funnel metrics and build dashboards for recruiting ops.",
    link: "https://example.com/jobs/2"
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "BrightCampus",
    location: "New York, NY",
    remoteType: "On-site",
    employmentType: "Full-time",
    level: "Fresher",
    optCptFriendly: false,
    skills: ["Next.js", "Tailwind", "Accessibility"],
    description: "Create responsive, accessible pages for university career products.",
    link: "https://example.com/jobs/3"
  }
];

export const trackerSeed: TrackerItem[] = [
  {
    id: "t1",
    dateApplied: formatISO(new Date(), { representation: "date" }),
    companyName: "CloudNest Labs",
    jobTitle: "Software Engineering Intern",
    jobLink: "https://example.com/jobs/1",
    resumeVersionUsed: "Resume_v3_SE.pdf",
    applicationStatus: "Applied",
    hrContactName: "Ava Chen",
    hrEmail: "ava.chen@cloudnest.io",
    followUpDate: formatISO(addBusinessDays(new Date(), 5), { representation: "date" }),
    notes: "Applied via company careers page."
  }
];
