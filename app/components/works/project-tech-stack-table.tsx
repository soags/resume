import type { ProjectTechStack } from "~/types/project";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function ProjectTechStackTable({ techStack }: { techStack: ProjectTechStack }) {
  const { frontend, backend, infrastructure } = techStack;

  return (
    <Table className="divide-y">
      <TableBody>
        <ProjectTechStackTableRow title="フロントエンド" items={frontend} />
        <ProjectTechStackTableRow title="バックエンド" items={backend} />
        <ProjectTechStackTableRow title="インフラ" items={infrastructure} />
      </TableBody>
    </Table>
  );
}

function ProjectTechStackTableRow({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <TableRow>
      <TableCell className="w-40">{title}</TableCell>
      <TableCell>
        {items.map((item, index) => (
          <>
            <span key={index} className="whitespace-nowrap">
              {item}
            </span>
            {index < items.length - 1 && " / "}
          </>
        ))}
      </TableCell>
    </TableRow>
  );
}

export { ProjectTechStackTable };
