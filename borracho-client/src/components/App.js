import React, { useState, useEffect } from "react";
import Wines from "./Wines";
import "../style.css";
import Favorites from "./Favorites";
import axios from "axios";
function App() {
  const [mode, setMode] = useState("wines");
  const [favs, setFavs] = useState([]);

  const getFavs = async () => {
    await axios.get("/all_wines").then((res) => {
      setFavs(res.data);
    });
  };

  useEffect(async () => {
    await getFavs();
  }, [favs]);

  return (
    <div>
      <h1>Welcome to Borracho</h1>

      <button
        onClick={() => {
          let temp;
          mode === "wines" ? (temp = "favorites") : (temp = "wines");
          setMode(temp);
        }}
      >
        {mode === "wines" ? "Mypage" : "Best Wines"}
      </button>
      {mode === "wines" ? (
        <Wines />
      ) : (
        <Favorites favs={favs} setFavs={setFavs} />
      )}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
// import "../style.css";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe(
//   "pk_test_51KSfuOJv2BSK7V9Ok67sTNfZ3U21zrKKaWZ72Y47VZbguJyCKFEUBzDnGM2SaEdb9NGILBkujuzlWGdfmv8XmoZw00rg8uMHpR"
// );

// export default function App() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: "stripe",
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }
