import React from "react";

export default function Message({ message }) {
  return (
    <section>
      <p>{message}</p>
      <a href="http://localhost:3000">
        <button>Home</button>
      </a>
    </section>
  );
}
