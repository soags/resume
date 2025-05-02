import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";

type ProjectTechs = {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  server?: string[];
  others?: string[];
};

function ProjectTechTable({
  frontend,
  backend,
  database,
  server,
  others,
}: ProjectTechs) {

  const rows = [
    frontend,
    backend,
    database,
    server,
    others,
  ].filter(row => row && row.length > 0) as string[][];

  return (
    <Table className="min-w-full divide-y divide-gray-300">
      <TableHeader>
        <TableRow>
          <TableHead>技術スタック</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell key={index} className="text-sm">
              {row.map((tech, index2) => (
                <>
                <span key={index2} className="whitespace-nowrap">
                  {tech}                  
                </span>
                {index2 < row.length - 1 && " / "}
                </>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export type { ProjectTechs };

export { ProjectTechTable };
