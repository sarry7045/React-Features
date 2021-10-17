import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);
  const onIdle = () => {
    console.log("User is idle");
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User has been logged out");
  };
  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is active");
  };
  return (
    <div className="container my-4 text-center">
      {isLoggedIn ? <h2>Hello Suraj Yadav</h2> : <h2>Hello Guest</h2>}
      <IdleTimer ref={idleTimerRef} timeout={1000} onIdle={onIdle} />
      <Modal isOpen={modalIsOpen}>
        <h2 className="container my-2 text-center">
          You've been idle for a while!
        </h2>
        <p className="container my-2 text-center">
          You will be logged out soon
        </p>
        <div>
          <button
            type="button"
            className="btn btn-primary mx-2 text-center"
            onClick={logOut}
          >
            Log me out
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 text-center"
            onClick={stayActive}
          >
            Keep me signed in
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default IdleTimerContainer;
