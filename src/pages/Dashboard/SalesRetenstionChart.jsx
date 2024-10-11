import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const timeFrameOptions = ["Day", "Month", "Year"];

const filteredSalesData = {
  Day: [
    { name: "Day 1", sales: 400, retention: 200 },
    { name: "Day 2", sales: 300, retention: 150 },
    { name: "Day 3", sales: 500, retention: 300 },
  ],
  Month: [
    { name: "Jan", sales: 5000, retention: 3000 },
    { name: "Feb", sales: 4500, retention: 2500 },
    { name: "Mar", sales: 5200, retention: 3500 },
  ],
  Year: [
    { name: "2022", sales: 62000, retention: 42000 },
    { name: "2023", sales: 68000, retention: 45000 },
  ],
};

const SalesRetentionChart = () => {
  const [timeFrame, setTimeFrame] = useState("Year");

  // Handle Time Frame Change
  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: "2rem" }}>
        <Typography variant="h6">Sales & Retention</Typography>
        <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
          <InputLabel>Time Frame</InputLabel>
          <Select
            value={timeFrame}
            label="Time Frame"
            onChange={handleTimeFrameChange}
          >
            {timeFrameOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Responsive Container for the LineChart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredSalesData[timeFrame]}>
            <XAxis dataKey="name" />
            <YAxis domain={["dataMin", "dataMax"]} />{" "}
            {/* Adjust Y-axis domain */}
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="retention" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
};

export default SalesRetentionChart;
