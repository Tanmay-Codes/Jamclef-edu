import { useState, useEffect } from "react";
import { Grid, Card, Typography, Box, Divider } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

// Sample active classes data with full date and time
const activeClasses = [
  {
    name: "Music Theory 101",
    startTime: "2024-10-11T18:00:00",
    endTime: "2024-10-11T19:00:00",
  },
  {
    name: "Guitar Basics",
    startTime: "2024-10-11T17:00:00",
    endTime: "2024-10-11T18:10:00",
  },
  {
    name: "Piano Fundamentals",
    startTime: "2024-10-11T15:00:00",
    endTime: "2024-10-11T16:00:00",
  },
  {
    name: "Violin Workshop",
    startTime: "2024-10-11T20:00:00",
    endTime: "2024-10-11T21:00:00",
  },
];

const ClassStatus = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [activeClassList, setActiveClassList] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentActiveClasses = activeClasses.filter((classInfo) => {
      const start = dayjs(classInfo.startTime);
      const end = dayjs(classInfo.endTime);
      return start.isBefore(currentTime) && end.isAfter(currentTime);
    });

    setActiveClassList(currentActiveClasses);
  }, [currentTime]);

  const isEndingSoon = (endTime) => {
    const end = dayjs(endTime);
    return end.diff(currentTime, "minute") <= 5 && end.isAfter(currentTime);
  };

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          padding: "2rem",
          textAlign: "center",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" mb={2}>
          Active Classes Today
        </Typography>
        {activeClassList.length > 0 ? (
          <Box>
            {activeClassList.map((classInfo, index) => {
              const { name, startTime, endTime } = classInfo;
              const start = dayjs(startTime).format("hh:mm A");
              const end = dayjs(endTime).format("hh:mm A");

              return (
                <Box key={index}>
                  <Box
                    sx={{
                      padding: "1rem 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1" sx={{ flex: 1 }}>
                      {name}
                    </Typography>
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      Starts at: {start}
                    </Typography>
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      {isEndingSoon(endTime)
                        ? "Ending soon!"
                        : `Ends at: ${end}`}
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
              );
            })}
          </Box>
        ) : (
          <Typography variant="h6">No Active Classes at the Moment</Typography>
        )}
      </Card>
    </Grid>
  );
};

export default ClassStatus;
