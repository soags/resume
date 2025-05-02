import {
  Calendar,
  GraduationCap,
  Github,
  Globe,
  Chrome,
  Package,
  Badge as LucideBadge,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

import resumeData from "~/data/resume.json";
import type { Certification, Education, Resume } from "~/types/resume";
import { TechStackContent } from "~/components/tech-stack-content";
import { WorkContent } from "~/components/work-content";
import { Section } from "~/components/section";
import { Paper } from "~/components/paper";
import { SideProjectsContent } from "~/components/side-projects-content";

const resume: Resume = resumeData;

export function meta() {
  return [
    { title: "職務経歴書" },
    { name: "description", content: "職務経歴書" },
  ];
}

export default function Resume() {
  const summaryParagraphs = resume.basics.summary.split("\n");

  return (
    <div className="max-w-4xl mx-auto bg-white overflow-hidden">
      {/* ヘッダー */}
      <div className="border-b p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
            <p className="text-xl mt-1">{resume.basics.label}</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>最終更新日: {resume.basics.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* 職務要約 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">職務要約</h2>
          <div className="text-gray-700">
            {summaryParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 技術スタック */}
        <Section title="技術スタック">
          <Paper>
            <TechStackContent techStack={resume.techStack} />
          </Paper>
        </Section>

        {/* スキル */}
        <Section title="スキル">
          <Paper>
            <ul className="list-disc list-inside space-y-2">
              {resume.highlights.map((highlight) => (
                <li key={highlight} className="font-medium">
                  {highlight}
                </li>
              ))}
            </ul>
          </Paper>
        </Section>

        {/* 職務経歴 */}
        <Section title="職務経歴" className="print:break-before-page">
          {resume.work.map((item) => (
            <Paper>
              <WorkContent key={item.company} work={item} />
            </Paper>
          ))}
        </Section>

        {/* 自己PR */}
        <Section title="自己PR" className="print:break-before-page">
          <Paper className="space-y-4">
            {resume.promotions.map((item) => (
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="text-gray-700 pl-2">
                  {item.description.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </Paper>
        </Section>

        {/* 学歴 */}
        <Section title="学歴">
          <EducationItem education={resume.education} />
        </Section>

        {/* 資格 */}
        <Section title="資格">
          <div className="space-y-4">
            {resume.certificates.map((item) => (
              <CertificationItem key={item.name} certification={item} />
            ))}
          </div>
        </Section>

        {/* 業務外活動 */}
        <Section title="業務外活動" className="print:break-before-page">
          <Paper>
            <SideProjectsContent />
          </Paper>
        </Section>
      </div>
    </div>
  );
}

function EducationItem({ education }: { education: Education }) {
  return (
    <div className="flex items-start gap-4">
      <GraduationCap className="h-5 w-5 text-gray-500 mt-1" />
      <div>
        <h3 className="text-lg font-semibold">{`${education.institution} ${education.area}`}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            {education.startDate} - {education.endDate}
          </span>
        </div>
      </div>
    </div>
  );
}

function CertificationItem({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div className="flex items-start gap-4">
      <LucideBadge className="h-5 w-5 text-gray-500 mt-1" />
      <div>
        <h3 className="text-lg font-semibold">{certification.name}</h3>
        <p className="text-gray-600 text-sm">{`${certification.year}年取得`}</p>
      </div>
    </div>
  );
}
