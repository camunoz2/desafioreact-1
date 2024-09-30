import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const { state, dispatch } = useContext(CartContext);
  const [sucessMessage, setSucessMessage] = useState("");

  const addToCart = (item) => {
    dispatch({
      type: "added",
      id: item.id,
      item: item,
    });
  };

  const removeFromCart = (item) => {
    dispatch({
      type: "removed",
      id: item.id,
      item: item,
    });
  };

  const checkout = async (token, cart) => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Error procesando el pago");
      }

      const data = await response.json();
      setSucessMessage(
        `${data.message}, tu codigo de transaccion es ${data.user.iat} y compraste ${data.cart}`
      );

      dispatch({
        type: "checkout",
        payload: {
          cart: data.cart,
          message: data.message,
          user: data.user,
        },
      });
    } catch (error) {
      console.error("Checkout error:", error.message);
      setSucessMessage("Hubo un error con el pago 🤣");
    }
  };

  return {
    addToCart,
    removeFromCart,
    checkout,
    cart: state,
    sucessMessage,
  };
}
