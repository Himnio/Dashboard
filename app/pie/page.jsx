"use client"

import { Box } from "@mui/material";
import Header from "@/components/Header";
import PieChart from "@/components/PieChart";
import SelectAutoWidth from "@/components/DropDown";
import { useState } from "react";

const Pie = () => {
  const [selectedYear, setSelectedYear] = useState('2010');
  const handleYearChange = (updatedYear) => {
    setSelectedYear(updatedYear);
    console.log(setSelectedYear)
  };

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="" />
      <Box height="75vh">
        <div>
          <h4 className="font-semibold">Select the year For year base complaine</h4>
        <SelectAutoWidth onYearChange={handleYearChange}/>
        </div>
        <PieChart selectedYear={selectedYear} />
      </Box>
    </Box>
  );
};

export default Pie;
