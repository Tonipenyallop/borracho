import React from "react";
import axios from "axios";

export default function Favorites({ favs }) {
  return (
    <div>
      {favs.length === 0 ? (
        <div>No Favorites added yet</div>
      ) : (
        <ul>
          {favs.map((e, idx) => (
            <li key={idx}>
              {e["fields"].name} : {e["fields"].vintage}
              <div
                className="delete"
                onClick={() => axios.delete("wine/", { data: e.pk })}
              >
                Delete
              </div>
            </li>
          ))}
        </ul>
      )}

      <input id="bottle" type="text" placeholder="Name of Bottle" />
      {/* <input id="brand" type="text" placeholder="Name of Brand" /> */}
      <input id="vintage" type="text" placeholder="Vintage year" />
      <button
        onClick={async () => {
          const bottle = document.getElementById("bottle");
          const vintage = document.getElementById("vintage");
          if (!bottle.value || !vintage.value) return;

          await axios.post("add_wine/", {
            name: bottle.value,
            vintage: vintage.value,
          });
          bottle.value = "";
          vintage.value = "";
          // await axios.get("/add_wine").then((res) => console.log(res.data));
        }}
      >
        add
      </button>
    </div>
  );
}
