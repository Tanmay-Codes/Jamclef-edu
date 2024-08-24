import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2, // margin top
      }}
    >
      <TextField
        variant="outlined"
        sx={{
          width: "50%",
          height: "40px",
          borderRadius: "20px",
          "& .MuiOutlinedInput-root": {
            height: "40px",
            borderRadius: "20px",
          },
          "& input": {
            padding: "10px",
          },
        }}
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
