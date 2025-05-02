import type { TechStack } from "~/types/resume";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

function TechStackTable({ techStack }: { techStack: TechStack }) {
  const { languages, frameworks, tools } = techStack;

  return (
    <Table className="min-w-full divide-y divide-gray-300 text-md">
      <TableBody>
        <TableRow>
          <TableCell className="text-nowrap">言語</TableCell>
          <TableCell>{languages.join(" / ")}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-nowrap">フレームワーク</TableCell>
          <TableCell>{frameworks.join(" / ")}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-nowrap">ツール</TableCell>
          <TableCell>{tools.join(" / ")}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export { TechStackTable };
