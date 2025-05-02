import { Chrome, Github, Globe, Package } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "./ui/link";

export function SideProjectsContent() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub */}
        <SideProjectCard icon={<Github className="h-5 w-5" />} title="GitHub">
          <Link to="https://github.com/soags" target="_blank">
            https://github.com/soags
          </Link>
        </SideProjectCard>

        {/* Zenn */}
        <SideProjectCard icon={<Globe className="h-5 w-5" />} title="Zenn">
          <Link to="https://zenn.dev/soags" target="_blank">
            https://zenn.dev/soags
          </Link>
        </SideProjectCard>
      </div>

      {/* Chrome拡張機能 */}
      <SideProjectCard
        icon={<Chrome className="h-5 w-5" />}
        title="Chrome拡張機能"
      >
        <div className="pl-4 border-l-2 border-gray-200">
          <p className="font-medium">Tab Cutter</p>
          <Link
            to="https://chromewebstore.google.com/detail/mekmindbhhjinkmgdjabpgfkaekhmgkj?utm_source=item-share-cb"
            target="_blank"
          >
            https://chromewebstore.google.com/detail/mekmindbhhjinkmgdjabpgfkaekhmgkj
          </Link>
        </div>
      </SideProjectCard>

      {/* npmパッケージ */}
      <SideProjectCard
        icon={<Package className="h-5 w-5" />}
        title="npmパッケージ"
      >
        <div className="space-y-3">
          <div className="pl-4 border-l-2 border-gray-200">
            <p className="font-medium">temp-dir-cli</p>
            <Link
              to="https://www.npmjs.com/package/temp-dir-cli"
              target="_blank"
            >
              https://www.npmjs.com/package/temp-dir-cli
            </Link>
          </div>
          <div className="pl-4 border-l-2 border-gray-200">
            <p className="font-medium">zenn-create</p>
            <Link
              to="https://www.npmjs.com/package/zenn-create"
              target="_blank"
            >
              https://www.npmjs.com/package/zenn-create
            </Link>
          </div>
        </div>
      </SideProjectCard>

      {/* 職務経歴書ソースコード */}
      {/* GitHub */}
      <SideProjectCard
        icon={<Github className="h-5 w-5" />}
        title="職務経歴書ソースコード"
      >
        <Link to="https://github.com/soags/resume" target="_blank">
          https://github.com/soags/resume
        </Link>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge className="bg-sky-900 text-white">TypeScript</Badge>
          <Badge className="bg-sky-900 text-white">React</Badge>
          <Badge className="bg-sky-900 text-white">Remix (ReactRouter)</Badge>
          <Badge className="bg-sky-900 text-white">Tailwind CSS</Badge>
          <Badge className="bg-sky-900 text-white">shadcn/ui</Badge>
        </div>
      </SideProjectCard>
    </div>
  );
}

function SideProjectCard({
  icon,
  title,
  children,
}: React.PropsWithChildren<{ icon: React.ReactNode; title: string }>) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}
