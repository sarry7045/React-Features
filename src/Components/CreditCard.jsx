import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Components/CreditCard.css";


import {
  BounceLoader,
  BarLoader,
  BeatLoader,
  DotLoader,
  ScaleLoader,
  RingLoader,
  HashLoader,
} from "react-spinners";

function CreditCard() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container my-2 text-center">
     <h4 className="text-center my-3">React Credit Card:-</h4>
      {/* <h2 className="container text-center my-3">Credit Card</h2> */}
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />

      <form className="container my-4 text-center">
        <input
          className="mx-2"
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          className="mx-2"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          className="mx-2"
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          className="mx-2"
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>

      <h5 className="text-center my-2">React Date-Picker:-</h5>
      <div className=" text-center">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Date:-"
          minDate={new Date()}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </div>

      <div className="container my-5 text-center">
      
      <h5 className="text-center my-4">React Spinners:-</h5>
        <div className="spinner">
          <BounceLoader color="#295FFF" />
          <BarLoader color="#295FFF" />
          <BeatLoader color="#295FFF" />
          <DotLoader color="#295FFF" />
          <ScaleLoader color="#295FFF" />
          <RingLoader color="#295FFF" />
          <HashLoader color="#295FFF" />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
