import React from "react";
import axios from "axios";
import Wine from "./Wine";
export default function Wines({ num, setNum }) {
  return (
    <div>
      <Wine num={num} setNum={setNum} />
    </div>
  );
}
