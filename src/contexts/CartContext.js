import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Cart state and totals
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate total price
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price * item.amount, 0));
  }, [cart]);

  // Calculate total item amount
  useEffect(() => {
    setItemAmount(cart.reduce((acc, item) => acc + item.amount, 0));
  }, [cart]);

  // Add item to cart or increase quantity if item already exists
  const addToCart = (product, id) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === id);
      return itemExists
        ? prevCart.map((item) =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          )
        : [...prevCart, { ...product, amount: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear all items in cart
  const clearCart = () => setCart([]);

  // Increase item amount
  const increaseAmount = (id) => addToCart(cart.find((item) => item.id === id), id);

  // Decrease item amount
  const decreaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0) // Remove items with 0 amount
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
