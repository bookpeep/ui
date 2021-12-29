import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

export interface TableProps {
  headers: any;
  items: any;
  hideHeader?: boolean;
}

export function TableComponent(props: TableProps) {
  const { headers, items, hideHeader } = props;
  return (
    <TableContainer>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        {!hideHeader && (
          <TableHead>
            <TableRow>
              {headers?.map((header: any) => (
                <TableCell key={header.key} align={header.align}>
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {items?.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headers?.map((h) => (
                <TableCell
                  style={{ width: h.width || "auto", padding: "14px" }}
                  key={h.key}
                  component="th"
                  scope="row"
                >
                  {item[h.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
