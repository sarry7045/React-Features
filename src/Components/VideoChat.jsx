import { Axios } from "axios";
import React, { useState } from "react";
import { Jutsu } from "react-jutsu";

function VideoChat() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
 

  const handleClick = (e) => {
    e.preventDefault();
    if (room && name) setCall(true);
  };


    return call ? (
      
    <Jutsu
      roomName={room}
      userName={name}
      loadingComponent={<h3>Loading..</h3>}
      containerStyles={{
        height: "100%",
        position: "absolute",
        left: "0",
        width: "100%",
        overflow: "hidden",
      }}
    />
  ) : (
    <form id="form">
      <div>
        <label for="full-name">Room Name</label>
        <input
          type="text"
          name="Room name"
          id="full-name"
          placeholder="Room Name"
          required
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <div>
        <label for="email-input">Full Name</label>
        <input
          type="text"
          name="Full Name"
          id="email-input"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label for=""></label>
        <input
          type="submit"
          value="Join/Create Meeting"
          onClick={handleClick}
        />
      </div>
          </form>
          
  );
}

export default VideoChat;
