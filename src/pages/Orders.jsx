import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Header } from "../components";
import { DataGrid } from "@mui/x-data-grid";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { columns, rows } from "../data/Data";

const Orders = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="Page" title="Orders" />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Orders;
