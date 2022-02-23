import React from "react";

export default function Message({ message }) {
  return (
    <section>
      <p>{message}</p>
      <button>Home</button>
    </section>
  );
}
