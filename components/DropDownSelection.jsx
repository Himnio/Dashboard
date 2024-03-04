"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import {SuperClass} from '@/data/data.dropdown';

export default function DropDownSelection({ onCategoryChange }) {
  const [category, setcategory] = useState(SuperClass[0].label);
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setcategory(selectedCategory);
    onCategoryChange(selectedCategory);
    console.log(onCategoryChange)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Issues..</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value={category} onChange={(event) => handleChange(event)}/>
          {SuperClass.map((data)=>(
          <MenuItem key={data.label}value={data.label}>{data.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
