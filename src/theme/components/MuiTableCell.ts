import { Components } from "@mui/material";
import palette from "../palette";
import shadows from "../shadows";

const MuiTableCell: Components["MuiTableCell"] = {
  styleOverrides: {
    head: {
      color: palette.text.primary,
      fontSize: "14px",
      fontWeight: "700",
      padding: "14px",
    },
    body: {
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      borderBottom: `1px solid ${palette.common.gray}25`,
    },
  },
};

export default MuiTableCell;
