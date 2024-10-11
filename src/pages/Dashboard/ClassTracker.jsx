import { useState } from "react";
import { Grid, Card, Typography, TextField, IconButton } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Sample Data
const classData = [
  { name: "Monday", classes: 4 },
  { name: "Tuesday", classes: 5 },
  { name: "Wednesday", classes: 2 },
  { name: "Thursday", classes: 3 },
  { name: "Friday", classes: 6 },
  { name: "Saturday", classes: 4 },
  { name: "Sunday", classes: 1 },
];

const ClassTracker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Default is current date
  const [weekStart, setWeekStart] = useState(dayjs().startOf("week")); // Start of the week
  const [weekEnd, setWeekEnd] = useState(dayjs().endOf("week")); // End of the week

  // Handle Date Change
  const handleDateChange = (event) => {
    const date = dayjs(event.target.value);
    const startOfWeek = date.startOf("week");
    const endOfWeek = date.endOf("week");

    setSelectedDate(date);
    setWeekStart(startOfWeek);
    setWeekEnd(endOfWeek);
  };

  // Handle previous and next week navigation
  const handlePreviousWeek = () => {
    const previousWeekStart = weekStart.subtract(7, "day");
    const previousWeekEnd = weekEnd.subtract(7, "day");

    setWeekStart(previousWeekStart);
    setWeekEnd(previousWeekEnd);
    setSelectedDate(previousWeekStart);
  };

  const handleNextWeek = () => {
    const nextWeekStart = weekStart.add(7, "day");
    const nextWeekEnd = weekEnd.add(7, "day");

    setWeekStart(nextWeekStart);
    setWeekEnd(nextWeekEnd);
    setSelectedDate(nextWeekStart);
  };

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: "2rem" }}>
        <Typography variant="h6">Live Classes This Week</Typography>

        {/* Week Picker with Date Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <IconButton onClick={handlePreviousWeek}>
            <ArrowBackIcon />
          </IconButton>

          <TextField
            type="date"
            value={selectedDate.format("YYYY-MM-DD")}
            onChange={handleDateChange}
            label={`Week: ${weekStart.format("YYYY-MM-DD")} - ${weekEnd.format(
              "YYYY-MM-DD"
            )}`}
            sx={{ flex: 1 }}
            InputLabelProps={{ shrink: true }}
          />

          <IconButton onClick={handleNextWeek}>
            <ArrowForwardIcon />
          </IconButton>
        </div>

        {/* Responsive Container for the BarChart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={classData}>
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="classes" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
};

export default ClassTracker;
