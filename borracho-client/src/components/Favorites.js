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
              <div>
                {" "}
                {e["fields"].url ? (
                  <img src={e["fields"].url} alt="wine img" />
                ) : (
                  "No image"
                )}
              </div>
              {e["fields"].name} : {e["fields"].vintage} :{" "}
              {e["fields"].description
                ? e["fields"].description
                : "No descriptions added"}
              <button
                className="delete"
                onClick={async () => {
                  const input = document.getElementById(`add_img${e.pk}`);
                  if (input.value.length === 0) return;
                  await axios.put("new_img/", { url: input.value, id: e.pk });
                  input.value = "";
                }}
              >
                <input
                  id={`add_img${e.pk}`}
                  type="text"
                  placeholder="URL here!"
                />
                Add Image
              </button>
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
      <input id="vintage" type="text" placeholder="Vintage year" />
      <input id="description" type="text" placeholder="Description here" />
      <input id="url" type="text" placeholder="URL of image" />
      <button
        onClick={async () => {
          const bottle = document.getElementById("bottle");
          const vintage = document.getElementById("vintage");
          const description = document.getElementById("description");
          const url = document.getElementById("url");
          if (!bottle.value || !vintage.value) return;

          await axios.post("add_wine/", {
            name: bottle.value,
            vintage: vintage.value,
            description: description.value,
            url: url.value,
          });
          bottle.value = "";
          vintage.value = "";
          description.value = "";
          url.value = "";
          // await axios.get("/add_wine").then((res) => console.log(res.data));
        }}
      >
        add
      </button>
    </div>
  );
}
