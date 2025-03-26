import { TicketBox } from "./ticket";
import Dropdown from "./dropdown";
import React, { useState } from "react";
import Papa from "papaparse";
import "../data/airports.csv";
import "../data/countries.csv";
const tickets = [
  {
    TimeRanges: { start: "08:00 AM", end: "10:00 AM" },
    tripType: "round trip",
    from: "Tampa",
    to: "Turkey",
    price: "$100 USD",
    class: "economy",
    stopAmount: 0,
  },
  {
    TimeRanges: { start: "12:00 PM", end: "02:00 PM" },
    tripType: "one-way",
    from: "Atlanta",
    to: "Paris",
    price: "$200 USD",
    class: "business",
    stopAmount: 1,
  },
  // Add more tickets as needed
];

const allowedExtensions = ["csv"];

function Selector() {
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");
  const [airports, setAirports] = useState();
  const [countries, setCountries] = useState();
  const loadAirports = function () {
    fetch("../../data/airports.csv").then((airportData) => {
      setAirports(airportData);
      console.log(airportData);
    });
  };
  let class_list = [
    "Class",
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
  ];
  let IATACode = ["TPA", "ORL"];

  let trip_type = ["One-Way", "Round-Trip"];
  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <Dropdown title="Trip Type" data={trip_type} />
        <Dropdown title="Class" data={class_list} />
      </div>
      <div className="flex justify-center">
        <label>Dates: </label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2024-11-05"
          min="2024-11-05"
          max="2025-09-30"
        />
      </div>

      <div className="flex justify-around">
        <Dropdown title="Depart From" data={IATACode} />
        <Dropdown title="Going to" data={IATACode} />
      </div>
      <div className="flex justify-center">
        <input className="bg-yellow-900" placeholder="Search"></input>
      </div>

      <div>
        <p>Here are some tickets:</p>
        <TicketBox tickets={tickets} />
      </div>
    </div>
  );
}

export default Selector;
