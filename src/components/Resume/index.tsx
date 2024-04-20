import { ResumeButton } from "./Button";
import ResumeEnglish from "@/assets/resumes/CV EN - Matheus Palmieri.pdf";
import ResumePortuguese from "@/assets/resumes/CV PT - Matheus Palmieri.pdf";

export const Resume = () => (
  <div className="flex gap-3">
    <ResumeButton file={ResumeEnglish} flag="🇺🇸" />
    <ResumeButton file={ResumePortuguese} flag="🇧🇷" />
  </div>
);
