import React, { useState, useEffect } from "react";
import Wines from "./Wines";
import "../style.css";
import Favorites from "./Favorites";
import axios from "axios";
import Message from "./Message";
function App() {
  const [message, setMessage] = useState("");

  const [mode, setMode] = useState("wines");
  const [favs, setFavs] = useState([]);
  const [num, setNum] = useState(1);
  const [isCalled, setIsCalled] = useState(true);

  const getFavs = async () => {
    await axios.get("/all_wines").then((res) => {
      setFavs(res.data);
    });
  };

  useEffect(async () => {
    await getFavs();
  }, [isCalled]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <div className="container">
      {message ? (
        <Message message={message} />
      ) : (
        <div className="container">
          <h1>Borracho-{mode === "wines" ? "Wine Page" : "Mypage"}</h1>
          <button
            className="button-29"
            id="nav-var"
            onClick={() => {
              let temp;
              mode === "wines" ? (temp = "favorites") : (temp = "wines");
              setMode(temp);
            }}
          >
            {mode === "wines" ? "To Mypage" : "To Best Wines"}
          </button>
          {mode === "wines" ? (
            <Wines num={num} setNum={setNum} />
          ) : (
            <Favorites
              favs={favs}
              isCalled={isCalled}
              setIsCalled={setIsCalled}
            />
          )}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
