import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ClassIcon from "@mui/icons-material/Class";
import FeedbackIcon from "@mui/icons-material/Feedback";
import TaskAltIcon from "@mui/icons-material/TaskAlt"; // Alternative icon for certification
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TimelineSection() {
  const navigate = useNavigate();
  const handleStartJourney = () => {
    navigate("/contact");
  };

  return (
    <Box>
      <Container sx={{ paddingTop: 15, paddingBottom: 15 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={7}
        >
          <Stack width={{ xs: "300px", md: "500px" }}>
            <Typography variant="h4" fontWeight={600}>
              Your Journey to Learning: From Booking to Certification
            </Typography>
            <Typography variant="body" sx={{ marginTop: 2, marginBottom: 1 }}>
              Follow each step of your course journey, from booking your course
              and selecting a session to receiving valuable feedback and earning
              your certification.
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginTop: 2 }}
                onClick={handleStartJourney}
              >
                Start Now
              </Button>
            </Box>
          </Stack>
          <Stack>
            <Timeline position="alternate">
              {/* Booking a Course */}
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  Booking
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <EventAvailableIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Book Your Course
                  </Typography>
                  <Typography>Select and book your desired course.</Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Select Session */}
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  Session
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <ClassIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Select a Session
                  </Typography>
                  <Typography>
                    Choose an available session to attend the online class.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Get Feedback */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="secondary">
                    <FeedbackIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Provide Feedback
                  </Typography>
                  <Typography>
                    Give feedback on the session you attended.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Certification */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="success">
                    <TaskAltIcon /> {/* Updated icon */}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Certification
                  </Typography>
                  <Typography>
                    Receive your certification of completion.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
