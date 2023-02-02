import { avaluadorState } from "context/Avaluador/avaluadorState";
import React, { useEffect, useRef, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { shallow } from "zustand/shallow";

export default function ButtonsYears({ years }) {
  const submit = useRef(null);
  const [selectedYears, setSelectedYears] = useState([]);

  const setYears = avaluadorState((state)=> state.setYears)
  

  years = years || [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ];

  const handleYearSelection = async (year) => {
    let newSelectedYears;
    if (selectedYears.includes(year)) {
      newSelectedYears = selectedYears.filter(
        (selectedYear) => selectedYear !== year
      );
    } else {
      newSelectedYears = [...selectedYears, year];
    }
    setSelectedYears(newSelectedYears);
    setYears({years:newSelectedYears})
  };

  return (
    <div className="d-flex mb-2" style={{ height: "36px", overflowX: "auto", flexFlow: "row" }}>
    <ToggleButtonGroup
      className=" gap-2 "
      type="checkbox"
      
      name={"years"}
    >
      {years.map((year) => (
        <ToggleButton
          style={{
            width: "65px",
            borderRadius: "0.375rem",
          }}
          name="years"
          key={year}
          id={year}
          variant="outline-primary"
          value={year}
          onClick={() => {
            handleYearSelection(year);
          }}
        >
          {year}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    </div>
  );
}

/* import React from "react";
import {
  Button,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ButtonsYears({ years = [
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ] }) {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (e) => {
    console.log(e.years);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ButtonToolbar
        className="mb-3"
        style={{
          overflowX: "auto",
          display: "flex",
          gap: "8px",
          flexFlow: "row",
        }}
      >
        {years.map((year) => (
          <ToggleButtonGroup
            className="mb-2"
            type="checkbox"
            style={{ height: "36px" }}
            key={year}
            {...register("years")}
            onChange={handleSubmit(onSubmit)}
          >
            <ToggleButton
              style={{
                width: "60px",
              }}
              type="submit"
              id={year}
              variant="outline-primary"
              value={year}
            >
              {year}
            </ToggleButton>
          </ToggleButtonGroup>
        ))}
      </ButtonToolbar>
    </form>
  );
} */
