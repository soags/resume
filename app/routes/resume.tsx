import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { TechTable } from "~/components/tech-table";
import { WorkSection } from "~/components/works/work";

import data from "~/data/resume.json";

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
        <h1 className="text-lg text-center font-bold">職務経歴書</h1>
        <div className="text-right text-sm">
          <p>作成日: {data.updatedAt}</p>
          <p>氏名: {data.name}</p>
        </div>
      </header>

      <Section title="職務要約">
        <p>
          2016年にS株式会社に入社し、製造業向けの各種業務システムの受託開発に従事。
          <br />
          PMとリードエンジニアを兼任し、設計、実装を行いながら、メンバーへの指示、進捗管理から、要件定義、工数見積、仕様説明、折衝などの業務も行っておりました。
        </p>
      </Section>

      <Section title="技術スタック">
        <TechTable {...data.techs} />
      </Section>

      <Section title="経験、スキルセット">
        <ul className="list-disc list-inside ml-2 space-y-1">
          {data.skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="職務経歴">
        {data.works.map((work, index) => (
          <WorkSection {...work} key={index} />
        ))}
      </Section>

      <Section title="自己PR">
        <>
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-bold mb-2 underline">
                フルスタックなエンジニアリングスキル
              </h3>
              <div className="ml-4">
                <p>
                  私はフロントエンドからバックエンド、一部インフラ構築に至るまで一貫して対応できるフルスタックエンジニアです。
                </p>
                <p>
                  React、Vue、Electronを用いたモダンフロントエンド開発、jQueryを使用したレガシーフロントエンド開発、ASP.NET
                  CoreやLaravelを用いたサーバーサイド開発、さらにWindows
                  Serverでの各種DB構築(SQL Server/PostgreSQL/Oracle Database)やDocker、AWSといったインフラレイヤーにも対応してきました。
                </p>
                <p>
                  技術選定やアーキテクチャ設計にも積極的に携わり、単なる開発者にとどまらず、システム全体を俯瞰して最適な設計を提案、実現するエンジニアリングを心がけています。
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2 underline">
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
              <h3 className="font-bold mb-2 underline">技術好きとしての自己成長意欲</h3>
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
        <div className="flex flex-col space-y-2">
          <div>
            <h3 className="font-bold">GitHub</h3>
            <div className="pl-4 mt-1">
              <Link href="https://github.com/soags" target="_blank">
                https://github.com/soags
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Zenn</h3>
            <div className="pl-4 mt-1">
              <Link href="https://zenn.dev/soags" target="_blank">
                https://zenn.dev/soags
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Chrome拡張機能の開発</h3>
            <ul className="list-disc list-inside mt-1 ml-2 space-y-1">
              <li>
                Tab Cutter (
                <Link
                  href="https://chromewebstore.google.com/detail/mekmindbhhjinkmgdjabpgfkaekhmgkj?utm_source=item-share-cb"
                  target="_blank"
                >
                  https://chromewebstore.google.com/detail/mekmindbhhjinkmgdjabpgfkaekhmgkj?utm_source=item-share-cb
                </Link>
                )
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">npmパッケージの開発</h3>
            <ul className="list-disc list-inside mt-1 ml-2 space-y-1">
              <li>
                temp-dir-cli (
                <Link
                  href="https://www.npmjs.com/package/temp-dir-cli"
                  target="_blank"
                >
                  https://www.npmjs.com/package/temp-dir-cli
                </Link>
                )
              </li>
              <li>
                zenn-create (
                <Link
                  href="https://www.npmjs.com/package/zenn-create"
                  target="_blank"
                >
                  https://www.npmjs.com/package/zenn-create
                </Link>
                )
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="資格">
        <ul className="space-y-1">
          {data.certifications.map((item, index) => (
            <li key={index}>{`${item.name} (${item.year}年)`}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
