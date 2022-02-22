import React from "react";
import axios from "axios";
export default function Wines() {
  return (
    <div>
      <div>Bodega Catena Zapata Adrianna Vineyard</div>
      <img
        src="https://cdn.luxe.digital/media/2020/07/06143657/best-wine-adrianna-vineyard-luxe-digital%402x.jpg.webp"
        alt="wine"
      />
      {/* <div>
        Selecting our overall best wine was no easy task but this 2016 Malbec is
        sure to be a winner no matter who’s pouring it. It’s an incredibly
        nuanced and detailed wine, promising depth and character from every sip.
        One of the highest rated wines, it’s a critic’s favourite and a rich,
        aromatic bottle to delight family and friends over dinner. Thought to be
        perhaps the best ever wine produced by Catena, it’s dense and fresh,
        full-bodied and layered, flavourful and elegant all at once. It’s a wine
        to please the masses but a bottle that you’d be forgiven for saving for
        yourself. Featuring aromas of roses and pine needles with hints of spice
        and tobacco, it’s a wine that just keeps on giving. Enjoy it for its
        bold and structured notes.{" "}
      </div> */}
      <div>Variety: Malbec</div>
      <div>Vintage: 2016 </div>
      <div>Appellation: Uco Valley, </div>
      <div> Argentina ABV: 14.6%</div>
      <button
        onClick={
          async () =>
            // console.log("clicked")
            axios.get("/read_wine").then((res) => console.log(res.data))
          // await axios.post("/add_wine", {
          //   name: bottle.value,
          //   vintage: vintage.value,
          // })
        }
      >
        Buy
      </button>
    </div>
  );
}
