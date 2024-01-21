import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import BarChart from "@/components/BarChart";
import DateRangePickerComp from "@/components/DateRangePicker";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="" />
      <Box height="75vh">
      <div >
          <p className="text-sm pb-4">Select the Start date and End date</p>
        <DateRangePickerComp/>
        </div>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
