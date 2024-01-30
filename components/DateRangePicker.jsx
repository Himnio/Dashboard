"use client";

import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// date state
const DateRangePickerComp = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  // event listeners
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="inline-block relative text-black">
      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} To ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        className="text-sm p-2.5 border border-gray-600 rounded"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne} className="relative z-50">
        {open && (
          <DateRangePicker
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="transform top-2 border border-gray-300 absolute"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePickerComp;
