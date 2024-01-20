"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function SelectAutoWidth({ onYearChange }) {
  const [year, setYear] = useState("2010"); //current year

  const handleChange = (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    onYearChange(selectedYear);
    console.log(onYearChange)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={year}
          onChange={handleChange}
          autoWidth
          label="Year"
        >
          <MenuItem value={year} onChange={(event) => handleChange(event)}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
