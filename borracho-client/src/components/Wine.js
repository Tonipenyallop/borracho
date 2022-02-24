import React from "react";
import Form from "./Form";
export default function Wine({ num, setNum }) {
  const wines = [
    {
      name: "Bodega Catena Zapata Adrianna Vineyard",
      vintage: 2016,
      price: 12980,
      price2: "price_1KVRVqJv2BSK7V9Oovy9WnfF",
      url: "https://cdn.luxe.digital/media/2020/07/06143657/best-wine-adrianna-vineyard-luxe-digital%402x.jpg.webp",
    },
    {
      name: "Sine Qua Non",
      vintage: 2006,
      price: 90198,
      price2: "price_1KWhGIJv2BSK7V9OL4Jixhov",
      url: "https://cdn.luxe.digital/media/2020/07/06143759/best-wine-sine-qua-non-luxe-digital%402x.jpg.webp",
    },
    {
      name: "Grgich Hills Estate",
      vintage: 2016,
      price: 8129,
      price2: "price_1KWhI1Jv2BSK7V9O0ClnKDNR",
      url: "https://cdn.luxe.digital/media/2020/07/06143718/best-wine-grgich-hills-estate-chardonnay-luxe-digital%402x.jpg.webp",
    },
    {
      name: "Screaming Eagle",
      vintage: 2010,
      price: 578238,
      price2: "price_1KWhIPJv2BSK7V9O5yx02GvD",
      url: "https://cdn.luxe.digital/media/2020/05/07134053/best-wine-screaming-eagle-cabernet-sauvignon-luxe-digital%402x.jpg.webp",
    },
    {
      name: "Heitz Cellar",
      vintage: 2014,
      price: 7503,
      price2: "price_1KWhIhJv2BSK7V9ODDh9CNFo",
      url: "https://cdn.luxe.digital/media/2020/07/06143722/best-wine-heitz-cellar-martha-vineyard-cabernet-sauvignon-luxe-digital%402x.jpg.webp",
    },
  ];

  return (
    <div>
      {wines.map((wine) => (
        <div>
          <div>{wine.name}</div>
          <img src={wine.url} alt="wine img" />
          <div>Vintage:{wine.vintage}</div>
          <div>JPY{wine.price}</div>
          <Form price={wine.price} num={num} setNum={setNum} />
        </div>
      ))}
    </div>
  );
}
