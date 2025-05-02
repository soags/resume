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
    <Table className="min-w-full divide-y divide-gray-300">
      <TableHeader>
        <TableRow>
          <TableHead>技術スタック</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {frontend && frontend.length > 0 && (
          <TableRow>
            <TableCell className="text-sm font-medium">
              フロントエンド
            </TableCell>
            <TableCell className="text-sm">
              {frontend.map((tech, index) => (
                <>
                  <span key={index} className="whitespace-nowrap">
                    {tech}
                  </span>
                  {index < frontend.length - 1 && " / "}
                </>
              ))}
            </TableCell>
          </TableRow>
        )}
        {backend && backend.length > 0 && (
          <TableRow>
            <TableCell className="text-sm font-medium">バックエンド</TableCell>
            <TableCell className="text-sm">
              {backend.map((tech, index) => (
                <>
                  <span key={index} className="whitespace-nowrap">
                    {tech}
                  </span>
                  {index < backend.length - 1 && " / "}
                </>
              ))}
            </TableCell>
          </TableRow>
        )}
        {infrastructure && infrastructure.length > 0 && (
          <TableRow>
            <TableCell className="text-sm font-medium">
              インフラ
            </TableCell>
            <TableCell className="text-sm">
              {infrastructure.map((tech, index) => (
                <>
                  <span key={index} className="whitespace-nowrap">
                    {tech}
                  </span>
                  {index < infrastructure.length - 1 && " / "}
                </>
              ))}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export { ProjectTechStackTable };
