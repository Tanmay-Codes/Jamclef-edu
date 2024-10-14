import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DataTable = ({ rows, columns, pageSize }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
