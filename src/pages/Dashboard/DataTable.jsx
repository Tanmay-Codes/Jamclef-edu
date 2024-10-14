import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

// Sample data structure
const sampleData = [
  {
    id: 1,
    name: "John Doe",
    role: "Student",
    email: "johndoe@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Teacher",
    email: "janesmith@gmail.com",
    status: "Inactive",
  },
  // Add more data as needed
];

// eslint-disable-next-line react/prop-types
const DataTable = ({ onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
      <Table aria-label="custom table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle2" fontWeight={600}>
                Name
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle2" fontWeight={600}>
                Role
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle2" fontWeight={600}>
                Email
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle2" fontWeight={600}>
                Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2" fontWeight={600}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => onEdit(row.id)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => onDelete(row.id)}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
