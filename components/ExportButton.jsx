"use client"

import React from "react";
import Button from '@mui/material/Button';
import html2canvas from "html2canvas";

const ExportButton = ({chartRef}) => {

    const handleDownload = () => {
        if (chartRef.current) {
          html2canvas(chartRef.current).then((canvas) => {
            const link = document.createElement("a");
            link.download = "pie_chart.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          });
        }
      };

  return (
    <Button 
    size="medium"
    variant="contained"
    color="inherit"
    className="ml-4 flex content-between"
    onClick={handleDownload}
    >Export</Button>
  );
};

export default ExportButton;
