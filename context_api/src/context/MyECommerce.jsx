import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyShopProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider value={{ toggle, setToggle, setCartItems, cartItems }}>
      {children}
    </MyStore.Provider>
  );
};
