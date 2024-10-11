import {
  Grid,
  Card,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import DataTable from "./DataTable";
import SalesRetentionChart from "./SalesRetenstionChart";
import ClassTracker from "./ClassTracker";

const Dashboard = () => {
  // Sample Data for charts
  const salesData = [
    { name: "Jan", sales: 300, retention: 250 },
    { name: "Feb", sales: 400, retention: 300 },
    { name: "Mar", sales: 500, retention: 350 },
  ];

  const ticketData = [
    { name: "Open", value: 10 },
    { name: "Closed", value: 20 },
  ];

  const classData = [
    { name: "Mon", classes: 5 },
    { name: "Tue", classes: 3 },
    { name: "Wed", classes: 4 },
    { name: "Thu", classes: 6 },
    { name: "Fri", classes: 8 },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ marginLeft: "45px", minHeight: "100vh" }}>
      {/* Finance Summary */}
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: "1.5rem", textAlign: "center" }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">₹50,000</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: "1.5rem", textAlign: "center" }}>
            <Typography variant="h6">Expenses</Typography>
            <Typography variant="h4">₹20,000</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: "1.5rem", textAlign: "center" }}>
            <Typography variant="h6">Profit</Typography>
            <Typography variant="h4">₹30,000</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        {/* Sales & Retention Line Chart */}
        <SalesRetentionChart />

        <ClassTracker />
      </Grid>

      {/* Ticket Summary */}
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        {/* Support Tickets */}
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: "2rem", textAlign: "center" }}>
            <Typography variant="h6">Support Tickets</Typography>
            <PieChart width={isMobile ? 300 : 400} height={300}>
              <Pie
                data={ticketData}
                dataKey="value"
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {ticketData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? "#FF8042" : "#00C49F"}
                  />
                ))}
              </Pie>
            </PieChart>
          </Card>
        </Grid>

        {/* Current Active Class */}
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: "2rem", textAlign: "center" }}>
            <Typography variant="h6">Current Active Class</Typography>
            <CircularProgress size={80} thickness={5} color="secondary" />
            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
              Active: Music Theory 101
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Data Table for Student/Teacher Management */}
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
