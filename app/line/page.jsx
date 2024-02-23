"use client"

import { Box } from "@mui/material";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
import { useState } from "react";
import SelectAutoWidth from "@/components/DropDown";

const Line = () => {

const [selectedYear, setSelectedYear] = useState('2023');
const handleYearChange =(updatedYear)=>{
  setSelectedYear(updatedYear);
}
  return (
    <Box m="20px">
    <Header title="Line Chart" subtitle="Select year base complaines" />
    <Box height="75vh">
      <SelectAutoWidth onYearChange={handleYearChange}/>
      <LineChart selectedYear={selectedYear} />
    </Box>
  </Box>
  );
};

export default Line;