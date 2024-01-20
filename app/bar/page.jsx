import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import BarChart from "@/components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bus complains" />
      <Box height="75vh">
        <button>Chart View</button>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
