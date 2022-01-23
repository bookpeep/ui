import {
  Button,
  Grid,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DoubleChevronLeft,
  DoubleChevronRight,
} from "..";

import React from "react";
import palette from "../theme/palette";
import { styled } from "@mui/system";

export interface TableProps {
  headers: any;
  items: any;
  hideHeader?: boolean;
  paginationProps?: PaginationProps;
  hasPagination: boolean;
}

export interface PaginationProps {
  page?: number;
  count?: number;
  rowsPerPage?: any;
  onChange?: any;
  handleChangeRow?: any;
  rowPerPage?: number;
}

const RowsOnPageButton = styled(Button)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "17px",
  marginLeft: "auto",
  color: palette.common.black,
  b: {
    marginLeft: "5px",
  },
}));

export function TableComponent(props: TableProps) {
  const {
    headers,
    items,
    hideHeader,
    paginationProps,
    hasPagination = false,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenPerPage = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {items?.map((item: any, index: any) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headers?.map((header: any) => (
                <TableCell
                  style={{ width: header.width || "auto", padding: "14px" }}
                  key={header.key}
                  component="th"
                  scope="row"
                >
                  {item[header.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {hasPagination && (
        <Grid
          container
          sx={{
            borderTop: `1px solid ${palette.common.gray}25`,
            paddingTop: "18px",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Pagination
              count={paginationProps?.count}
              page={paginationProps?.page}
              showFirstButton
              showLastButton
              sx={{
                ul: {
                  justifyContent: "center",
                },
              }}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    last: DoubleChevronRight,
                    first: DoubleChevronLeft,
                    next: ChevronRight,
                    previous: ChevronLeft,
                  }}
                  sx={{
                    color: palette.common.black,
                  }}
                  {...item}
                />
              )}
              onChange={paginationProps?.onChange}
            />
          </Grid>
          <Grid xs={3} sx={{ textAlign: "right" }}>
            <RowsOnPageButton variant="text" onClick={handleOpenPerPage}>
              Rows on page: <b> {paginationProps?.rowPerPage}</b>{" "}
              <ChevronDown sx={{ color: palette.text.placeholder }} />{" "}
            </RowsOnPageButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {paginationProps?.rowsPerPage.map(
                (page: number, index: number) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      paginationProps?.handleChangeRow(page);
                      handleClose();
                    }}
                  >
                    {page}
                  </MenuItem>
                )
              )}
            </Menu>
          </Grid>
        </Grid>
      )}
    </TableContainer>
  );
}

export default TableComponent;
