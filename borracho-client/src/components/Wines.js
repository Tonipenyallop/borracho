import React from "react";
import axios from "axios";
export default function Wines({ num, setNum }) {
  return (
    <div>
      <label for="name" class="form__label"></label>
      <div>Bodega Catena Zapata Adrianna Vineyard</div>
      <img
        src="https://cdn.luxe.digital/media/2020/07/06143657/best-wine-adrianna-vineyard-luxe-digital%402x.jpg.webp"
        alt="wine"
      />
      <div>Variety: Malbec</div>
      <div>Vintage: 2016 </div>
      <div>Appellation: Uco Valley, </div>
      <div> Argentina ABV: 14.6%</div>
      <div>JPY 12980</div>
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
        </div>
        <button className="button-29" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
}
