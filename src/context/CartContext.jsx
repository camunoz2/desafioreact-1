/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import cartReducer from "../reducers/CartReducer";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
