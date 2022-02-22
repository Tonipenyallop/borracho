import React from "react";
import axios from "axios";

export default function Favorites({ favs, setFavs }) {
  return (
    <div>
      <div>{favs}</div>
      {/* {favs.length === 0 ? (
        <div>No Favorites added yet</div>
      ) : (
        <div>
          {favs.map((e) => (
            <div key={e.id}>
              <div>{e.bottle}</div>
              <div>{e.vintage}</div>
            </div>
          ))}
        </div>
      )} */}
      {/* <img
        src="https://www.jocooks.com/wp-content/uploads/2020/06/red-sangria-1-2.jpg"
        alt="sangria"
      />
      <div>Sangria</div>
      <div>Description: Best wine in the world</div>
      <div>Vintage: 1998</div> */}

      <input id="bottle" type="text" placeholder="Name of Bottle" />
      {/* <input id="brand" type="text" placeholder="Name of Brand" /> */}
      <input id="vintage" type="text" placeholder="Vintage year" />
      <button
        onClick={async () => {
          const bottle = document.getElementById("bottle");
          const vintage = document.getElementById("vintage");
          if (!bottle.value || !vintage.value) return;
          console.log(bottle.value);
          console.log(vintage.value);
          await axios.post("add_wine/", {
            name: bottle.value,
            vintage: vintage.value,
          });

          // await axios.get("/add_wine").then((res) => console.log(res.data));
        }}
      >
        add
      </button>
    </div>
  );
}
