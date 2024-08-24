import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.startDate}</TableCell>
        <TableCell align="right">{row.endDate}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.lastActivity}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <TableContainer
                sx={{
                  maxHeight: row.history.length > 5 ? 200 : "auto", // Set max height for scroll
                  overflowY: row.history.length > 5 ? "auto" : "visible",
                }}
              >
                <Table size="small" aria-label="history">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Task</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Start Time</TableCell>
                      <TableCell>End Time</TableCell>
                      <TableCell>Total Time Elapsed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.task}</TableCell>
                        <TableCell>{historyRow.taskStatus}</TableCell>
                        <TableCell>{historyRow.startTime}</TableCell>
                        <TableCell>{historyRow.endTime}</TableCell>
                        <TableCell>
                          {(() => {
                            // Helper function to convert 12-hour time string to 24-hour Date object
                            const parseTime = (timeStr) => {
                              const [time, period] = timeStr.split(" ");
                              const [hours, minutes] = time
                                .split(":")
                                .map(Number);

                              let hour24 = hours;
                              if (period === "PM" && hours !== 12) {
                                hour24 += 12;
                              } else if (period === "AM" && hours === 12) {
                                hour24 = 0;
                              }

                              return new Date(
                                Date.UTC(1970, 0, 1, hour24, minutes)
                              );
                            };

                            // Parse start and end times
                            const startTime = parseTime(historyRow.startTime);
                            const endTime = parseTime(historyRow.endTime);

                            // Calculate difference in milliseconds
                            const diffMs = endTime - startTime;

                            // Calculate hours, minutes, and seconds from the difference
                            const hours = Math.floor(diffMs / (1000 * 60 * 60));
                            const minutes = Math.floor(
                              (diffMs % (1000 * 60 * 60)) / (1000 * 60)
                            );
                            const seconds = Math.floor(
                              (diffMs % (1000 * 60)) / 1000
                            );

                            // Return the formatted string
                            return `${hours}h ${minutes}m ${seconds}s`;
                          })()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function DataTableComponent() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetch("../../data/data.json")
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Project</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Last Activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.name} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
