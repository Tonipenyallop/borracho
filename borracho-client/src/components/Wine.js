import React from "react";
import Form from "./Form";
export default function Wine({ num, setNum, temp, setTemp }) {
  const wines = [
    {
      name: "Bodega Catena Zapata Adrianna Vineyard",
      vintage: 2016,
      price: 12980,
      price2: "price_1KVRVqJv2BSK7V9Oovy9WnfF",
      url: "https://cdn.luxe.digital/media/2020/07/06143657/best-wine-adrianna-vineyard-luxe-digital%402x.jpg.webp",
      quantity: 1,
    },
    {
      name: "Sine Qua Non",
      vintage: 2006,
      price: 90198,
      price2: "price_1KWhGIJv2BSK7V9OL4Jixhov",
      url: "https://cdn.luxe.digital/media/2020/07/06143759/best-wine-sine-qua-non-luxe-digital%402x.jpg.webp",
      quantity: 1,
    },
    {
      name: "Grgich Hills Estate",
      vintage: 2016,
      price: 8129,
      price2: "price_1KWhI1Jv2BSK7V9O0ClnKDNR",
      url: "https://cdn.luxe.digital/media/2020/07/06143718/best-wine-grgich-hills-estate-chardonnay-luxe-digital%402x.jpg.webp",
      quantity: 1,
    },
    {
      name: "Screaming Eagle",
      vintage: 2010,
      price: 578238,
      price2: "price_1KWhIPJv2BSK7V9O5yx02GvD",
      url: "https://cdn.luxe.digital/media/2020/05/07134053/best-wine-screaming-eagle-cabernet-sauvignon-luxe-digital%402x.jpg.webp",
      quantity: 1,
    },
    {
      name: "Heitz Cellar",
      vintage: 2014,
      price: 7503,
      price2: "price_1KWhIhJv2BSK7V9ODDh9CNFo",
      url: "https://cdn.luxe.digital/media/2020/07/06143722/best-wine-heitz-cellar-martha-vineyard-cabernet-sauvignon-luxe-digital%402x.jpg.webp",
      quantity: 1,
    },
  ];

  return (
    <div className="wine-container">
      {wines.map((wine, idx) => (
        <div className="wine-item" key={idx}>
          <div className="wine-elements">
            <img className="wine-img" src={wine.url} alt="wine img" />
            <div className="wine-e">{wine.name}</div>
            <div className="wine-e">Vintage:{wine.vintage}</div>
            <div className="wine-e">JPY{wine.price}</div>
          </div>
          <Form
            price={wine.price2}
            num={num}
            setNum={setNum}
            idx={idx}
            quantity={wine.quantity}
            temp={temp}
            setTemp={setTemp}
          />
        </div>
      ))}
    </div>
  );
}
