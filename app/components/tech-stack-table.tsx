import type { TechStack } from "~/types/resume";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

function TechStackTable({ techStack }: { techStack: TechStack }) {
  const { frontend, backend, infrastructure, tools } = techStack;

  return (
    <Table className="divide-y">
      <TableBody>
        <TechStackTableRow title="フロントエンド" items={frontend} />
        <TechStackTableRow title="バックエンド" items={backend} />
        <TechStackTableRow title="インフラ" items={infrastructure} />
        <TechStackTableRow title="ツール" items={tools} />
      </TableBody>
    </Table>
  );
}

function TechStackTableRow({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <TableRow>
      <TableCell className="w-34">{title}</TableCell>
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

export { TechStackTable };
