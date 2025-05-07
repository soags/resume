import { Award, Calendar } from 'lucide-react'
import resumeData from '~/data/resume.json'
import type { Certification, Resume } from '~/types/resume'
import { TechStackContent } from '~/components/tech-stack-content'
import { WorkContent } from '~/components/work-content'
import { Section } from '~/components/section'
import { Paper } from '~/components/paper'
import { SideProjectsContent } from '~/components/side-projects-content'

const resume: Resume = resumeData

export function meta() {
  return [
    { title: '職務経歴書' },
    { name: 'description', content: '職務経歴書' },
  ]
}

export default function Resume() {
  const summaryParagraphs = resume.basics.summary.split('\n')

  return (
    <div className="max-w-4xl mx-auto bg-white overflow-hidden">
      {/* ヘッダー */}
      <div className="border-b p-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold">{resume.basics.name}</h1>
            <p className="mt-1 text-gray-800">{resume.basics.label}</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>最終更新日: {resume.basics.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-16 pt-0">
        {/* 職務要約 */}
        <Section title="職務要約">
          <div className="text-gray-800">
            {summaryParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>

        {/* 技術スタック */}
        <Section title="技術スタック">
          <Paper>
            <TechStackContent techStack={resume.techStack} />
          </Paper>
        </Section>

        {/* スキル */}
        <Section title="スキル">
          <Paper className="text-gray-800">
            <ul className="list-disc list-inside space-y-1">
              {resume.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Paper>
        </Section>

        {/* 職務経歴 */}
        <Section title="職務経歴">
          {resume.work.map((item) => (
            <Paper key={item.company}>
              <WorkContent key={item.company} work={item} />
            </Paper>
          ))}
        </Section>

        {/* 自己PR */}
        <Section title="自己PR">
          <Paper className="space-y-4">
            {resume.promotions.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="text-gray-800 pl-2">
                  {item.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </Paper>
        </Section>

        {/* 業務外活動 */}
        <Section title="業務外活動">
          <Paper>
            <SideProjectsContent
              basics={resume.basics}
              sideProjects={resume.sideProjects}
            />
          </Paper>
        </Section>

        {/* 資格 */}
        <Section title="資格">
          <div className="space-y-4">
            {resume.certificates.map((item) => (
              <CertificationItem key={item.name} certification={item} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function CertificationItem({
  certification,
}: {
  certification: Certification
}) {
  return (
    <div className="flex items-start gap-4">
      <Award className="h-5 w-5 text-gray-500 mt-1" />
      <div>
        <h3 className="font-semibold">{certification.name}</h3>
        <p className="text-gray-500 text-sm">{`${certification.year}年取得`}</p>
      </div>
    </div>
  )
}
