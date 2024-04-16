import { ResumeButton } from "./Button";
import ResumeEnglish from "@/assets/resumes/english.pdf";
import ResumePortuguese from "@/assets/resumes/portuguese.pdf";

export const Resume = () => (
  <div className="flex gap-3">
    <ResumeButton file={ResumeEnglish} flag="🇺🇸" />
    <ResumeButton file={ResumePortuguese} flag="🇧🇷" />
  </div>
);
