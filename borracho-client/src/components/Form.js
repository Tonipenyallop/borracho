import { Hidden } from "@material-ui/core";
import React from "react";

export default function Form({ price, num, setNum }) {
  return (
    <div>
      <form action="create-checkout-session/" method="POST">
        <div>
          <input
            className="minus"
            type="button"
            value="-"
            onClick={() => {
              let result = document.getElementsByClassName("result")[0].value;
              if (result <= 1) return;
              setNum(parseInt(result) - 1);
            }}
          />
          <input
            className="result"
            type="number"
            name="quantity"
            value={num}
            readOnly
          />
          <input
            className="plus"
            type="button"
            value="+"
            onClick={() => {
              let result = document.getElementsByClassName("result")[0].value;
              if (result >= 10) return;
              setNum(parseInt(result) + 1);
            }}
          />
          <input
            type="text"
            name="price"
            value={price}
            className="hide"
            readOnly
          />
        </div>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}
