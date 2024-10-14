import {
  Grid,
  Card,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "./DataTable";

const StudentSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const studentData = [
    {
      id: 1,
      name: "John Doe",
      course: "Music Theory",
      status: "Active",
      callCount: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      course: "Piano Basics",
      status: "On Hold",
      callCount: 1,
    },
    // More students...
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "course", headerName: "Course", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "callCount", headerName: "Calls Made", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <Box>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
      width: 120,
    },
  ];

  return (
    <Box sx={{ marginLeft: "45px", minHeight: "100vh" }}>
      {/* Header for Student Section */}
      <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
        Student Management
      </Typography>

      {/* Summary Cards for Student Data */}
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: "1.5rem", textAlign: "center" }}>
            <Typography variant="h6">Total Students Joined</Typography>
            <Typography variant="h4">120</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: "1.5rem", textAlign: "center" }}>
            <Typography variant="h6">Calls Made</Typography>
            <Typography variant="h4">25</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: "1.5rem", textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              fullWidth
            >
              Add Student
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Student Management Table */}
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12}>
          <Card sx={{ padding: "1.5rem" }}>
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              Manage Students
            </Typography>
            <DataTable rows={studentData} columns={columns} pageSize={5} />
          </Card>
        </Grid>
      </Grid>

      {/* Student Reports Section */}
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12}>
          <Card sx={{ padding: "1.5rem" }}>
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              Student Reports
            </Typography>
            <Typography variant="body1">
              You can generate reports for students and the classes they are
              taking here.
            </Typography>
            <Button variant="outlined" sx={{ marginTop: "1rem" }} fullWidth>
              Generate Report
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentSection;
