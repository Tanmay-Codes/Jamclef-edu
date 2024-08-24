import * as React from "react";
import CountUp from "react-countup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../App.css";

export default function CardComponent({ title, counterValue, iconType }) {
  return (
    <Box sx={{ width: 250, height: 300 }}>
      <Card
        variant="outlined"
        sx={{ height: 270, border: "2px solid darkgray", borderRadius: 5 }}
      >
        <CardContent>
          <Typography
            sx={{
              padding: 2,
              fontSize: 14,
              fontWeight: 600,
              background: "#ebebf0",
              borderRadius: 5,
              color: "black",
            }}
            color="text.secondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 700,
              position: "relative",
              top: "120px",
            }}
          >
            <CountUp className="card-counter" end={counterValue} />
            <ArrowUpwardIcon />
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              color: "gray",
              position: "relative",
              top: 115,
            }}
          >
            +2 Projects Annually
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Box>
  );
}
