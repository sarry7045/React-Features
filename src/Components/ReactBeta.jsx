import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { sculptureList } from "./data";
import { people } from "./data1";
// import { contacts } from "./contact";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

function Page1() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const ref = useRef(null);
  const [isPlaying, setisPlaying] = useState(false);

  const Greeting = ({ name }) => {
    return <h4> Hello , {name}</h4>;
  };

  const Photo = () => {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        className="avatar"
      />
    );
  };

  const Photoframe = ({ imgUrl, name }) => {
    return <img src={imgUrl} alt={name} className="avatar" />;
  };

  const [index, setindex] = useState(0);
  const [showmore, setShowmore] = useState(false);

  const NextClick = () => {
    setindex(index + 1);
  };
  const MoreClick = () => {
    setShowmore(!showmore);
  };

  let sculpture = sculptureList[index];

  let nextId = 0;
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const Panel = ({ title, children, isActive, onShow }) => {
    return (
      <section className="panel">
        <h3 className="my-4">{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button className="btn btn-primary" onClick={onShow}>
            Show Details
          </button>
        )}
      </section>
    );
  };

  const Item = ({ name, isPacked }) => {
    return (
      <li className="item">
        {name} {isPacked && "*"}
      </li>
    );
  };

  const listItem = people.map((person) => (
    <li key={person.id}>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt={person.name} />
      <p>
        {" "}
        <b>{person.name}</b>----- <b>{person.accomplishment}</b>
      </p>
    </li>
  ));

  const [to, setTo] = useState("Suraj");
  const [message, setMessage] = useState("Hello");
  const [messagee, setMessagee] = useState("Yadav");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You Said ${message} to ${to} ${messagee}`);
  };

  const [text, setText] = useState("");

  const Chat = ({ contact }) => {
    return (
      <section className="chat">
        <textarea
          value={text}
          placeholder={"Chat to " + contact.name}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button className="btn btn-primary my-2">
          Send to {contact.email}
        </button>
      </section>
    );
  };

  const ContactList = ({ selectedContact, contacts, onSelect }) => {
    return (
      <section className="contact-list">
        {contacts.map((contact) => (
          <li key={contact}>
            <button
              className=" btn btn-dark my-2"
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </section>
    );
  };

  const [too, setToo] = useState(contacts[0]);

  const [textt, settextt] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function formSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(setIsSending);
    setIsSent(true);
  }

  if (isSent) {
    return <h3>Thanks For Feedback</h3>;
  }

  const sendMessage = (textt) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  const Form = () => {
    const [text, setText] = useState("");
    return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
  };
  const Hintt = () => {
    const [showHint, setShowHint] = useState(false);
    return (
      <div>
        {showHint && (
          <p>
            <i>Hint: Your favorite city?</i>
          </p>
        )}

        {showHint ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowHint(false);
            }}
          >
            Hide hint
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowHint(true);
            }}
          >
            Show hint
          </button>
        )}
      </div>
    );
  };

  const ScrollToFirstCat = () => {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const ScrollToSecondCat = () => {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const ScrollToThirdCat = () => {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const PlayClick = () => {
    const nextIsPlaying = !isPlaying;
    setisPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <h4 className="text-center my-4"> JavaScript's Logics:</h4>
      <br/>
    <div className="container my-4 text-center">
      <div className="text-center my-4">
        {" "}
        <Greeting name="Suraj" />
      </div>{" "}
      <br />
      <div className="container text-center my-4">
        <h4 className="my-4">Gallery</h4>
        <Photo />
        <Photo />
        <Photo />
      </div>
      <div className="container text-center my-4">
        <Photoframe imgUrl="https://i.imgur.com/1bX5QH6.jpg" />
        <Photoframe imgUrl="https://i.imgur.com/7vQD0fPs.jpg" />
        <Photoframe imgUrl="https://i.imgur.com/yXOvdOSs.jpg" />
      </div>{" "}
      <br />
      <div className="container text-center my-4">
        <button className="btn btn-primary my-4" onClick={NextClick}>
          Next
        </button>
        <strong>
          {" "}
          <h4 className="">
            {" "}
            {sculpture.name} by {sculpture.artist}
          </h4>
        </strong>
        <h6>
          {" "}
          ({index + 1} of {sculptureList.length})
        </h6>
        <button className="btn btn-primary my-2" onClick={MoreClick}>
          {showmore ? "Hide" : "Show"} Details
        </button>
        {showmore && <p>{sculpture.description} </p>}
        <div className="text-center my-4">
          <img src={sculpture.url} />
        </div>
      </div>
      <br />
      <div className="container text-center my-4">
        <h5 className="my-4">Create Notes:</h5>
        <input
          className="form-control"
          placeholder="Add Notes"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            setName();
            setArtists([...artists, { id: nextId++, name: name }]);
          }}
        >
          Add Notes
        </button>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      </div>
      <br />
      <div className="container text-center my-4">
        <h4 className="my-4">Click To See Details:</h4>

        <Panel
          title="Earth"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
          title="SKY"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for "apple" and is often translated as "full of apples". In fact, the
          region surrounding Almaty is thought to be the ancestral home of the
          apple, and the wild <i lang="la">Malus sieversii</i> is considered a
          likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </div>
      <br />
      <div className="container text-center my-4">
        <h4> Products Packing List</h4>
        <h6> * Signed Product Is Packed</h6>

        <Item isPacked={true} name="Onion">
          {" "}
        </Item>
        <Item isPacked={false} name="Tomato">
          {" "}
        </Item>
        <Item isPacked={true} name="Apple">
          {" "}
        </Item>
        <Item isPacked={false} name="Banana">
          {" "}
        </Item>
      </div>
      <br />
      <div className="container text-center my-4">
        <h4 className="my-4"> Scientist</h4>
        <article>{listItem}</article>
      </div>
      <br />
      <div className="container my-4 text-center">
        <form onSubmit={handleSubmit}>
          <label>
            To:
            <div>
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="Neeraj">Neeraj</option>
                <option value="Suraj">Suraj</option>
              </select>
            </div>
            <div className="my-2">
              <select
                value={messagee}
                onChange={(e) => setMessagee(e.target.value)}
              >
                <option value="Yadav">Yadav</option>
                <option value="Gupta">Gupta</option>
              </select>
            </div>
            <div className="my-4">
              <textarea
                placeholder="Messsage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary">Send Messgae</button>
          </label>
        </form>
      </div>
      <br />
      <div className="container text-center my-4">
        <ContactList
          contacts={contacts}
          selectedContact={too}
          onSelect={(contact) => setToo(contact)}
        />
        <Chat contact={too} />
      </div>
      <br />
      <div className="container text-center my-4">
        <form onSubmit={formSubmit}>
          <h6> How was Your Experiecne in our Company Give Feedback Below:</h6>
          <textarea
            disabled={isSending}
            value={textt}
            onChange={(e) => settextt(e.target.value)}
          />
          <div>
            <button
              className="btn btn-primary"
              disabled={isSending}
              type="submit"
            >
              Send{" "}
            </button>
          </div>
          {isSending && <p>Sending...</p>}
        </form>
      </div>
      <br />
      <div className="container my-4 text-center">
        <Form />
        <Hintt />
      </div>
      {/* <nav>
        <button
          className="btn btn-primary mx-2 my-4"
          onClick={ScrollToFirstCat}
        >
          Tom
        </button>
        <button
          className="btn btn-primary mx-2 my-4"
          onClick={ScrollToSecondCat}
        >
          Maru
        </button>
        <button
          className="btn btn-primary mx-2 my-4"
          onClick={ScrollToThirdCat}
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li className="my-2">
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li className="my-2">
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li className="my-2">
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div> */}
      <br />
      <div className="container my-4 text-center">
        <h5> Video Player:</h5>
        <video className="my-2" width="250" ref={ref}>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          {" "}
          <button className="btn btn-primary" onClick={PlayClick}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
      </div>
      </>
  );
}

export default Page1;
