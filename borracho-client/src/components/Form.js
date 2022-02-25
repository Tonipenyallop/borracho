import React from "react";

export default function Form({
  price,
  num,
  setNum,
  idx,
  quantity,
  temp,
  setTemp,
}) {
  // function a(e) {
  //   let result = document.getElementsByClassName(`result${idx}`)[0].value;
  //   if (result >= 10) return;
  //   console.log(this);
  //   setNum(parseInt(result) + 1);
  // }

  return (
    <div>
      <form
        className="form-item"
        action="create-checkout-session/"
        method="POST"
      >
        <div className="form-e">
          <input
            className="minus"
            type="button"
            value="-"
            onClick={() => {
              let result = document.getElementsByClassName(`result${idx}`)[0]
                .value;
              if (result <= 1) return;
              setNum(parseInt(result) - 1);
            }}
          />
          <input
            className={`result${idx}`}
            type="number"
            name="quantity"
            value={num}
            // value={quantity}
            readOnly
          />
          <input
            className="plus"
            type="button"
            value="+"
            onClick={(e) => {
              let result = document.getElementsByClassName(`result${idx}`)[0]
                .value;
              if (result >= 10) return;
              console.log(this);
              setNum(parseInt(result) + 1);
            }}
            // onClick={a}
          />
          <input
            type="text"
            name="price"
            value={price}
            className="hide"
            readOnly
          />
        </div>
        <button className="form-button" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
}
