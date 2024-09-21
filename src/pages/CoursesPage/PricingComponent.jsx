/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { gradients } from "../../theme";

const PricingComponent = ({ pricingOptions }) => {
  const theme = useTheme();
  return (
    <Box
      mt={5}
      p={{ xs: 2, md: 5 }}
      sx={{
        backgroundImage: gradients.sunriseGradient,
        textAlign: "center",
        borderRadius: 5,
      }}
    >
      <Typography variant="h4" color={"white"} fontWeight={600} gutterBottom>
        Fee Structure
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {Object.entries(pricingOptions).map(([lessonType, options], index) => (
          <Card
            key={lessonType}
            sx={{
              width: { xs: "100%" },
              boxShadow: 3,
              color: index === 1 ? "white" : "black",
              backgroundColor:
                index === 1 ? theme.palette.secondary.main : "white",
              textAlign: "center",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {lessonType
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Typography>

              {/* Table for pricing options */}
              <Table>
                <TableBody>
                  {Object.entries(options).map(([optionKey, optionValue]) => (
                    <TableRow key={optionKey}>
                      <TableCell
                        align="left"
                        sx={{ color: index === 1 ? "white" : "black" }}
                      >
                        {optionKey
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: index === 1 ? "white" : "black" }}
                      >
                        {optionValue}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Highlighted Price */}
              {/* {index === 1 && (
                <Typography variant="h4" fontWeight={600} sx={{ mt: 3 }}>
                  {options.packageOf4Lessons}
                </Typography>
              )} */}

              {/* CTA Button */}
              <Button
                variant="contained"
                color={index === 1 ? "secondary" : "primary"}
                sx={{
                  mt: 3,
                  width: "100%",
                  backgroundColor: index === 1 ? "white" : "primary.main",
                  color: index === 1 ? "black" : "white",
                }}
              >
                {index === 1 ? "Book Now" : "Learn More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default PricingComponent;
