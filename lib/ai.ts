import { addBusinessDays, formatISO } from "date-fns";

export function generateFollowUpDraft(hrName: string, title: string, company: string) {
  return `Hi ${hrName}, I recently applied for the ${title} role at ${company} and wanted to kindly follow up on my application. I'm very interested in the opportunity and would appreciate any updates when available.`;
}

export function runResumeMatch(resumeText: string, jobDescription: string) {
  const keywords = ["collaboration", "testing", "api", "typescript", "analytics"];
  const missingKeywords = keywords.filter((word) => !resumeText.toLowerCase().includes(word) && jobDescription.toLowerCase().includes(word));

  return {
    missingKeywords,
    summary: "Student-focused engineer with project experience shipping modern web features and measurable product impact.",
    bullets: [
      "Tailored achievements to mirror role requirements and ATS keyword relevance.",
      "Highlighted collaborative ownership and quantifiable delivery outcomes.",
      "Reframed project bullets to align with internship and entry-level expectations."
    ],
    followUpDate: formatISO(addBusinessDays(new Date(), 5), { representation: "date" })
  };
}
