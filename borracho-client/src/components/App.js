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

  const getFavs = async () => {
    await axios.get("/all_wines").then((res) => {
      setFavs(res.data);
    });
  };

  useEffect(async () => {
    await getFavs();
  }, [favs]);

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
    <div>
      {message ? (
        <Message message={message} />
      ) : (
        <div>
          <h1>Welcome to Borracho</h1>
          <button
            onClick={() => {
              let temp;
              mode === "wines" ? (temp = "favorites") : (temp = "wines");
              setMode(temp);
            }}
          >
            {mode === "wines" ? "Mypage" : "Best Wines"}
          </button>
          {mode === "wines" ? (
            <Wines num={num} setNum={setNum} />
          ) : (
            <Favorites favs={favs} />
          )}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
