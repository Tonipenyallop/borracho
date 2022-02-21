import React from "react";

export default function Favorites() {
  return (
    <div>
      <img
        src="https://www.jocooks.com/wp-content/uploads/2020/06/red-sangria-1-2.jpg"
        alt="sangria"
      />
      <div>Sangria</div>
      <div>Description: Best wine in the world</div>
      <div>Vintage: 1998</div>

      <input type="text" placeholder="Name of Bottle" />
      <input type="text" placeholder="Name of Brand" />
      <input type="text" placeholder="Vintage year" />
      <button>add</button>
    </div>
  );
}
