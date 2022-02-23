import React, { useState, useEffect } from "react";
import Wines from "./Wines";
import "../style.css";
import Favorites from "./Favorites";
import axios from "axios";

function App() {
  const [mode, setMode] = useState("wines");
  const [favs, setFavs] = useState([]);

  const getFavs = async () => {
    await axios.get("/all_wines").then((res) => {
      setFavs(res.data);
    });
  };

  useEffect(async () => {
    await getFavs();
  }, [favs]);

  return (
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
      {mode === "wines" ? <Wines /> : <Favorites favs={favs} />}
    </div>
  );
}

export default App;
