import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 20;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const Navigate = useNavigate()

  let addtoCart = async (itemId, size) => {
    let cartdata = structuredClone(cartItems);

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      } else {
        cartdata[itemId][size] = 1;
      }
    } else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;
    }
    setCartItems(cartdata);
  };

  let getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartdata = structuredClone(cartItems);
    cartdata[itemId][size] = quantity;

    setCartItems(cartdata);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      
      let itemInfo = products.find((product) => product._id === items)
      for (const item in cartItems[items]){
        try {
          if (cartItems[items][item] > 0) { 
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addtoCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    Navigate,
  };
  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
