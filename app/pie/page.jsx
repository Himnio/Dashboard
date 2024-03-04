"use client";

import { Box } from "@mui/material";
import Header from "@/components/Header";
import PieChart from "@/components/PieChart";
import SelectAutoWidth from "@/components/DropDown";
import { useState, useRef } from "react";
import ExportButton from "@/components/ExportButton";

const Pie = () => {
  const [selectedYear, setSelectedYear] = useState("2010");
  const handleYearChange = (updatedYear) => {
    setSelectedYear(updatedYear);
    console.log(setSelectedYear);
  };

  let chartRef = useRef(null);

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Select year base complaines" />
      <Box height="70vh">
        <div className="flex">
          <SelectAutoWidth onYearChange={handleYearChange} />
          <div className="pt-4">
            <ExportButton ref={chartRef} />
          </div>
        </div>
        <PieChart selectedYear={selectedYear} />
      </Box>
    </Box>
  );
};

export default Pie;
