import { toTitleCase, toCurrency } from "@/utils/helpers/helpers";
import { iTransactionTableProps } from "@/utils/models";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { FC, useMemo } from "react";

export const TransactionTable: FC<iTransactionTableProps> = ({transactions}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  function createDate(
    title: string,
    date: Date,
    amount: string
  ): { title: string; date: Date; amount: string } {
    return { title, date, amount };
  }

  const rows = useMemo(() => {
    return transactions.map((transaction) => {
      return createDate(
        toTitleCase(transaction.name),
        transaction.date,
        toCurrency(transaction.amount)
      );
    });
  }, [transactions]);

  const Head = useMemo(() => {
    if (isMobile) {
      return null;
    }
    return (
      <TableHead>
        <TableRow>
          <TableCell>Bill Title</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHead>
    );
  }, []);

  const Body = useMemo(() => {
    return isMobile
      ? rows.map((row) => {
          return (
            <TableRow key={row.title}>
              <TableCell colSpan={1}>
                <div>
                  <div>
                    <span>Avatar</span>
                    <span>Title</span>
                  </div>
                  <div>Due Date</div>
                </div>
                <div>Amount</div>
              </TableCell>
            </TableRow>
          );
        })
      : rows.map((row) => (
          <TableRow key={row.title}>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell>{row.date.toDateString()}</TableCell>
            <TableCell>{row.amount}</TableCell>
          </TableRow>
        ));
  }, [isMobile, rows]);

  return (
    <TableContainer component={Paper}>
      <div
        style={{
          border: "1px solid crimson",
          textAlign: "center",
          padding: "2em 1em",
        }}
      >
        Filter Bar
      </div>
      <Table sx={{ minWidth: "100%" }} aria-label="transaction-table">
        {Head}
        <TableBody component="tbody">{Body}</TableBody>
      </Table>
    </TableContainer>
  );
};
