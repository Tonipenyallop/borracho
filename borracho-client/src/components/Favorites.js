import React from "react";
import axios from "axios";

export default function Favorites({ favs, isCalled, setIsCalled }) {
  const wines = favs;
  return (
    <div className="favoritas-container">
      {wines.length === 0 ? (
        <div>No Favorites added yet</div>
      ) : (
        <div className="favoritas-container">
          {/* <input
        type="input"
        class="form__field"
        placeholder="Name"
       
        required
      /> */}
          {wines.map((e, idx) => (
            <div className="favoritas-items" key={idx}>
              <div>
                {" "}
                {e["fields"].url ? (
                  <img src={e["fields"].url} alt="wine img" />
                ) : (
                  <img
                    src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    alt="No image"
                  />
                )}
              </div>
              <p>
                {e["fields"].name} : {e["fields"].vintage} :{" "}
                {e["fields"].description
                  ? e["fields"].description
                  : "No descriptions added"}
              </p>
              <button
                className="button-29"
                onClick={async () => {
                  const input = document.getElementById(`add_img${e.pk}`);
                  if (input.value.length === 0) return;
                  await axios.put("new_img/", { url: input.value, id: e.pk });
                  input.value = "";
                  setIsCalled(!isCalled);
                }}
              >
                <input
                  className="form__field"
                  id={`add_img${e.pk}`}
                  type="text"
                  placeholder="URL here!"
                />
                Add Image
              </button>
              <div
                className="delete"
                onClick={() => {
                  axios.delete("wine/", { data: e.pk });
                  setIsCalled(!isCalled);
                }}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      )}

      <input id="bottle" type="text" placeholder="Name of Bottle" />
      <input id="vintage" type="text" placeholder="Vintage year" />
      <input id="description" type="text" placeholder="Description here" />
      <input id="url" type="text" placeholder="URL of image" />
      <button
        className="button-29"
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

          setIsCalled(!isCalled);

          bottle.value = "";
          vintage.value = "";
          description.value = "";
          url.value = "";
        }}
      >
        add
      </button>
    </div>
  );
}
