"use client";

import { Box } from "@mui/material";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
import { useState } from "react";
import SelectAutoWidth from "@/components/DropDown";
import DropDownSelection from "@/components/DropDownSelection";

const Line = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const handleYearChange = (updatedYear) => {
    setSelectedYear(updatedYear);
  };

  const [selectedCategory, setSelectedCategory] = useState("PASS/Reserved Seat Issue");
  const categoeyChange = (updatedCategory) => {
    setSelectedCategory(updatedCategory);
    console.log(setSelectedCategory);
  };


  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Select year base complaines" />
      <Box height="75vh">
        <div className="flex justify-between">
          <SelectAutoWidth onYearChange={handleYearChange} />
          <div className="pr-10">
            <DropDownSelection onCategoryChange={categoeyChange}/>
          </div>
        </div>
        <LineChart selectedYear={selectedYear} selectedCategory={selectedCategory}/>
      </Box>
    </Box>
  );
};

export default Line;
