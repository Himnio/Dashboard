import { tokens } from "@/app/theme";

export const lineData = [
  {
    id: "PASS/Reserved Seat Issue",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Wrong Date/Day/Month in Pass Issued",
        y: 101,
      },
      {
        x: "Physically challenged pass/Reserved seat issue",
        y: 75,
      },
      {
        x: "Student pass",
        y: 36,
      },
      {
        x: "Gender Miss Punch",
        y: 216,
      },
      {
        x: "Senior citizen pass issue/ Seat Issue/concession ticket",
        y: 35,
      },
      {
        x: "Smart Card",
        y: 236,
      },
      {
        x: "Tummoc/app based passes",
        y: 88,
      },
    ],
  },
  {
    id: "Ticket Related Issue",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Re-Issued",
        y: 212,
      },
      {
        x: "Ticket printing issue",
        y: 190,
      },
      {
        x: "Ticket not issued",
        y: 270,
      },
      {
        x: "Change Due",
        y: 9,
      },
      {
        x: "Checking Issue",
        y: 75,
      },
      {
        x: "Q R code issue",
        y: 175,
      },
    ],
  },
  {
    id: "Vehicle Related Issue",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Digital and Manual board Issue",
        y: 191,
      },
      {
        x: "Vehicle Defect",
        y: 136,
      },
      {
        x: "Break Down",
        y: 91,
      },
      {
        x: "Emission OF Smoke",
        y: 190,
      },
      {
        x: "Pathetic Seats",
        y: 211,
      },
      {
        x: "Display Of Advertisement",
        y: 152,
      },
      {
        x: "Cleanliness Of vehicle",
        y: 189,
      },
      {
        x: "A/C Issue",
        y: 152,
      },
    ],
  },
];
