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

  return (
    <>
      <div className="container text-center my-4">
      <h3 className="text-center">React Icons:-</h3>
        <FaReact color="lightblue" size="5rem" />
        <DiAngularSimple color="red" size="5em" />
        <DiApple color="black" size="5rem" />
        <DiCodeBadge color="orange" size="5rem" />
        <DiVisualstudio color="blue" size="5rem" />
      </div>

      <div className="container text-center my-4">
      <h5 className="text-center my-2">React Notify:-</h5>
        <button type="button" onClick={notify} className="btn btn-primary">
          Notify!
        </button>
      </div>

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

      <div className="container my-4 text-center">
      <h5 className="text-center my-2">React Tippy:-</h5>
        <Tippy content="Basic Tooltip">
          <button type="button" className="btn btn-primary">
            Hover
          </button>
        </Tippy>
      </div>

      <div className="container my-4 text-center">
      <h5 className="text-center my-2">React Countup:-</h5>
        <h1 className="my-1">
          <Countup end={200} />
        </h1>
        <br />
        <h1 className="my-1">
          <Countup end={200} duration={2} />
        </h1>
        <br />
        <h1 className="my-1">
          <Countup start={500} end={1000} duration={2} />
        </h1>
        <br />
        <h1>
          <Countup end={1000} duration={3} prefix="$" decimals={2} />
        </h1>
        <br />
      </div>
    </>
  );
}

export default Home;
