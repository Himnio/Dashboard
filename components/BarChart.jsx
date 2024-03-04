"use client";

import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "@/app/theme";
import { mockBarData as data } from "@/data/mockData";
import { useEffect, useState } from "react";

const BarChart = ({ selectedDateRange }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {};

  const reqData = [
    {
      issues: "Crew Behaviors",
      "Wrong Date/Day/Month in Pass Issued": 544,
      "Physically challenged pass/Reserved seat issue": 232,
      "Student pass": 123,
      "Gender Miss Punch": 543,
      "Senior citizen pass issue/ Seat Issue/concession ticket": 642,
      "Smart Card": 311,
      "Tummoc/app based passes": 999,
    },
    {
      issues: "PASS/Reserved Seat Issue",
      "Wrong Date/Day/Month in Pass Issued": 789,
      "Physically challenged pass/Reserved seat issue": 123,
      "Student pass": 456,
      "Gender Miss Punch": 333,
      "Senior citizen pass issue/ Seat Issue/concession ticket": 222,
      "Smart Card": 666,
      "Tummoc/app based passes": 999,
    },
    {
      issues: "Ticket Related Issue",
      "Re-Issued": 864,
      "Ticket printing issue": 223,
      "Ticket not issued": 545,
      "Change Due": 976,
      "Checking Issue": 321,
      "Q R code issue": 777,
    },
    {
      issues: "Vehicle Related Issue",
      "Digital and Manual board Issue": 456,
      "Vehicle Defect": 789,
      "Break Down": 654,
      "Emission OF Smoke": 333,
      "Pathetic Seats": 222,
      "Display Of Advertisement": 888,
      "Cleanliness Of vehicle": 244,
      "A/C Issue": 999,
    },
    {
      issues: "Crew Behaviors",
      "Rash Driving": 555,
      "Signal jump/violations": 777,
      "Crew misbehavior": 888,
      Harassment: 222,
      "Women issue": 444,
      Assault: 333,
      "Mobile usage while driving": 666,
      "Drink And Drive": 123,
      Accident: 321,
    },
    {
      issues: "Route",
      "Irregular operation": 456,
      "Partial Trip": 789,
      "Route deviation": 654,
      "Delay departure": 333,
      "Stopping more than mins in Bus stops": 222,
      "Non stoppage of buses in scheduled bus stops": 888,
      "Trip Miss": 244,
    },
    {
      issues: "Facility Issue",
      "Baggage loss": 444,
      "Shanthinagar TTMC": 321,
      "Jayanagar TTMC": 555,
      "Kengeri TTMC": 666,
      "Banashankari TTMC": 123,
      "Koramangala TTMC": 777,
      "Yeshawanthapura TTMC": 999,
      "Vijayanagar TTMC": 456,
      "Domlur TTMC": 789,
      "Whitefield TTMC": 654,
      "Bannerghatta TTMC": 333,
      "Kempegowda Bus Station TTMC": 222,
      "Shivajinagar TTMC": 888,
    },
    {
      issues: "Website/App Related Issue",
      "Website Related Complaints": 244,
      "Mobile app related": 999,
    },
  ];

  return (
    <ResponsiveBar
      data={reqData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      keys={[
        "Wrong Date/Day/Month in Pass Issued",
        "Physically challenged pass/Reserved seat issue",
        "Student pass",
        "Gender Miss Punch",
        "Senior citizen pass issue/ Seat Issue/concession ticket",
        "Smart Card",
        "Tummoc/app based passes",
        "Re-Issued",
        "Ticket printing issue",
        "Ticket not issued",
        "Change Due",
        "Checking Issue",
        "Q R code issue",
        "Digital and Manual board Issue",
        "Vehicle Defect",
        "Break Down",
        "Emission OF Smoke",
        "Pathetic Seats",
        "Display Of Advertisement",
        "Cleanliness Of vehicle",
        "A/C Issue",
        "Rash Driving",
        "Signal jump/violations",
        "Crew misbehavior",
        "Harassment",
        "Women issue",
        "Assault",
        "Mobile usage while driving",
        "Drink And Drive",
        "Accident",
        "Irregular operation",
        "Partial Trip",
        "Route deviation",
        "Delay departure",
        "Stopping more than mins in Bus stops",
        "Non stoppage of buses in scheduled bus stops",
        "Trip Miss",
        "Baggage loss",
        "Shanthinagar TTMC",
        "Jayanagar TTMC",
        "Kengeri TTMC",
        "Banashankari TTMC",
        "Koramangala TTMC",
        "Yeshawanthapura TTMC",
        "Vijayanagar TTMC",
        "Domlur TTMC",
        "Whitefield TTMC",
        "Bannerghatta TTMC",
        "Kempegowda Bus Station TTMC",
        "Shivajinagar TTMC",
        "Website Related Complaints",
        "Mobile app related",
      ]}
      indexBy="issues"
      margin={{ top: 50, right: 40, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      // fill={[
      //   {
      //     match: {
      //       id: "fries",
      //     },
      //     id: "dots",
      //   },
      //   {
      //     match: {
      //       id: "sandwich",
      //     },
      //     id: "lines",
      //   },
      // ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 1,
        tickRotation: 0,
        legend: "Issues category", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 0,
        tickRotation: 0,
        legend: "Issue Rate", // changed
        legendPosition: "middle",
        legendOffset: -50,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      // legends={[
      //   {
      //     dataFrom: "keys",
      //     anchor: "top-right",
      //     direction: "column",
      //     justify: false,
      //     translateX: 100,
      //     translateY: 0,
      //     itemsSpacing: 30,
      //     itemWidth: 50,
      //     itemHeight: 0,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 0.85,
      //     symbolSize: 20,
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
