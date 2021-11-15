import React, { useState } from "react";

import { FaReact } from "react-icons/fa";
import { DiAngularSimple } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiCodeBadge } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "react-modal";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import Countup from "react-countup";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../Components/CreditCard.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  BounceLoader,
  BarLoader,
  BeatLoader,
  DotLoader,
  ScaleLoader,
  RingLoader,
  HashLoader,
} from "react-spinners";

import ReactPlayer from "react-player";

toast.configure();

Modal.setAppElement("#root");

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const notify = () => {
    toast("Basic Notification!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 7000,
    });
    toast.success("Success Notification!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.info("Info Notification!", { position: toast.POSITION.TOP_CENTER });
    toast.error("Error Notification!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

  const [data] = useState([
    {
      name: "MongoDb",
      id: 1,
    },
    {
      name: "Express",
      id: 2,
    },
    {
      name: "React",
      id: 3,
    },
    {
      name: "Node",
      id: 4,
    },
  ]);

  return (
    <>
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
      </div>
      <br />
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

      <br />
      <div className="container text-center my-4">
        <h5 className="text-center my-2">React Notify:-</h5>
        <button type="button" onClick={notify} className="btn btn-primary">
          Notify!
        </button>
      </div>
      <br />

      <div className="container text-center my-4">
        <h5 className="text-center my-2">React Open Modal:-</h5>
        <button
          type="button"
          onClick={() => setModalIsOpen(true)}
          className="btn btn-primary"
        >
          Open Modal
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2 className="container text-center">Modal Title</h2>
          <p className="container text-center">Modal Body</p>
          <div className="container text-center my-4">
            <button
              type="button"
              onClick={() => setModalIsOpen(false)}
              className="btn btn-primary text-center"
            >
              Close Modal
            </button>
          </div>
        </Modal>
      </div>
      <br />

      <div className="container my-4 text-center">
        <h5 className="text-center my-2">React Tippy:-</h5>
        <Tippy content="Basic Tooltip">
          <button type="button" className="btn btn-primary">
            Hover
          </button>
        </Tippy>
      </div>
      <br />

      <div className="container my-4 text-center">
        <h5 className="text-center my-2">React Countup:-</h5>

        <h1 className="my-1">
          <Countup start={500} end={1000} duration={2} />
        </h1>
        <br />
        <h1>
          <Countup end={1000} duration={3} prefix="$" decimals={2} />
        </h1>
        <br />
      </div>
      <div className="container my-2 text-center">
        <h4 className="text-center">React Icons:-</h4>
        <FaReact color="lightblue" size="5rem" />
        <DiAngularSimple color="red" size="5em" />
        <DiApple color="black" size="5rem" />
        <DiCodeBadge color="orange" size="5rem" />
        <DiVisualstudio color="blue" size="5rem" />
      </div>
      <br />
      <div className="container">
        <h4 className="text-center my-4">React Spinners:-</h4>
        <div className="spinner">
          <BounceLoader color="#295FFF" />
          <BarLoader color="#295FFF" />
          <BeatLoader color="#295FFF" />
          <DotLoader color="#295FFF" />
          <ScaleLoader color="#295FFF" />
          <RingLoader color="#295FFF" />
          <HashLoader color="#295FFF" />
        </div>
        <br />
        <div className="container text-center my-4">
          <h4 className="text-center my-2">React VideoPlayer:-</h4>
          <ReactPlayer
            width="400px"
            height="200px"
            controls
            className="container text-center my-4"
            url="https://www.youtube.com/watch?v=AETFvQonfV8  "
          />
        </div>
        <br />

        <div className="my-4 text-center">
          <h4 className="my-4">Using Map:</h4>
          {data.map((item) => {
            return <h5 key={item.id}>{item.name}</h5>;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
