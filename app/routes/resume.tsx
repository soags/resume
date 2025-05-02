import { Link } from "~/components/ui/link";
import { Section } from "~/components/section";
import { TechStackTable } from "~/components/tech-stack-table";
import { WorkSection } from "~/components/works/work-section";

import resumeData from "~/data/resume.json";
import type { Resume } from "~/types/resume";

const resume: Resume = resumeData;

export function meta() {
  return [
    { title: "職務経歴書" },
    { name: "description", content: "職務経歴書" },
  ];
}

export default function Resume() {
  return (
    <div className="h-full max-w-6xl p-8 print:max-w-none space-y-4  print:p-0">
      <header className="mb-4">
        <h1 className="text-2xl text-center font-medium">職務経歴書</h1>
        <div className="text-right">
          <p>作成日: {resume.updatedAt}</p>
          <p>氏名: {resume.name}</p>
        </div>
      </header>

      <Section title="職務要約">
        <>
          <p>
            2016年にS株式会社に入社し、製造業向けの業務システムの受託開発に従事。
          </p>
          <p>
            フルスタックエンジニアとして、提案、要件定義から導入、保守まで幅広い工程に携わってきました。
          </p>
          <p>
            また、プロジェクトマネージャーとして、顧客折衝、進捗管理、アーキテクチャ設計、技術選定なども行っていました。
          </p>
        </>
      </Section>

      <Section title="技術スタック">
        <TechStackTable techStack={resume.techStack} />
      </Section>

      <Section title="スキル">
        <ul className="list-disc list-inside ml-2 space-y-1">
          {resume.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="職務経歴" className="print:break-before-page">
        {resume.works.map((work) => (
          <WorkSection key={work.company} work={work} />
        ))}
      </Section>

      <Section title="自己PR" className="print:break-before-page">
        <>
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-medium mb-2 text-lg">
                フルスタックなエンジニアリングスキル
              </h3>
              <div className="ml-4">
                <p>
                  私はフロントエンドからバックエンド、一部インフラ構築に至るまで一貫して対応できるフルスタックエンジニアです。
                </p>
                <p>
                  React、Vue、Electronを用いたモダンフロントエンド開発、jQueryを使用したレガシーフロントエンド開発、ASP.NET
                  CoreやLaravelを用いたサーバーサイド開発、さらにWindows
                  Serverでの各種DB構築(SQL Server/PostgreSQL/Oracle
                  Database)やDocker、AWSといったインフラレイヤーにも対応してきました。
                </p>
                <p>
                  技術選定やアーキテクチャ設計にも積極的に携わり、単なる開発者にとどまらず、システム全体を俯瞰して最適な設計を提案、実現するエンジニアリングを心がけています。
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2 text-lg">
                プロジェクトマネジメントと顧客折衝スキル
              </h3>
              <div className="ml-4">
                <p>
                  要件定義から設計、実装、導入、運用までを一貫してリードするPM、リーダーとして、複数のプロジェクトを成功に導いてきました。
                </p>
                <p>
                  3〜5名規模のチームマネジメント経験に加え、顧客へのヒアリング、提案、折衝、QA対応といった対外コミュニケーションにも注力してきました。
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2 text-lg">
                技術好きとしての自己成長意欲
              </h3>
              <div className="ml-4">
                <p>
                  業務外でも技術への探究心を持ち続け、新技術のキャッチアップやアウトプット活動に取り組んでいます。
                </p>
                <p>
                  また、業務で必要となった技術領域（PHP/Laravel/Vueなど）も独学でスピーディに習得し、即戦力として案件に適用してきました。
                </p>
                <p>
                  変化の早いIT業界において、常に学び続け、成長し続けることを大切にしています。
                </p>
              </div>
            </div>
          </div>
        </>
      </Section>

      <Section title="業務外活動">
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-40 pr-2">GitHub</div>
            <div>
              <Link href="https://github.com/soags" target="_blank">
                https://github.com/soags
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-40 pr-2">Zenn</div>
            <div>
              <Link href="https://zenn.dev/soags" target="_blank">
                https://zenn.dev/soags
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-40 pr-2">Chrome拡張機能</div>
            <div>
              <Link
                href="https://chromewebstore.google.com/detail/mekmindbhhjinkmgdjabpgfkaekhmgkj?utm_source=item-share-cb"
                target="_blank"
              >
                Tab Cutter
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-40 pr-2">npmパッケージ</div>
            <div>
              <Link
                href="https://www.npmjs.com/package/temp-dir-cli"
                target="_blank"
              >
                temp-dir-cli
              </Link>
              { " / " }
              <Link
                href="https://www.npmjs.com/package/zenn-create"
                target="_blank"
              >
                zenn-create
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="資格">
        <ul className="list-disc list-inside ml-2 space-y-1">
          {resume.certifications.map((item) => (
            <li key={item.name}>{`${item.name} (${item.year}年)`}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
