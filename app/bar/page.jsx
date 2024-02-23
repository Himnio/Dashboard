import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import BarChart from "@/components/BarChart";
import DateRangePickerComp from "@/components/DateRangePicker";
import ExportButton from "@/components/ExportButton";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="" />
      <Box height="70vh">
        <div>
          <p className="text-sm pb-4">Select the Start date and End date</p>
          <div className="flex">
            <DateRangePickerComp />
            <ExportButton />
          </div>
        </div>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
