import React, { useState, useCallback, useEffect } from "react";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prev) => [
      ...prev,
      ...products.filter((el) => el.name === product),
    ]);
  }, []);

  const removeFromCart = useCallback((productId) => {
    console.log(productId);
    setCart((prev) => prev.filter((el) => el.name != productId));
  }, []);

  // addToCart 참조값 변경 여부 확인 [useEffect]

  useEffect(() => {
    console.log("add참조값 변경경");
  }, [addToCart]);

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log("remove참조값 변경경");
  }, [removeFromCart]);
  return (
    <div>
      <h2>Products</h2>
      {products.map((el) => {
        return (
          <ul style={{ listStyleType: "none" }} key={el.id}>
            <li>
              {el.name}{" "}
              <button
                onClick={() => {
                  addToCart(el.name);
                }}
              >
                Add to Cart
              </button>
            </li>
          </ul>
        );
      })}

      <h2>Shopping Cart</h2>
      {cart.map((el) => {
        return (
          <ul style={{ listStyleType: "none" }} key={el.id}>
            <li>
              {el.name}{" "}
              <button
                onClick={() => {
                  removeFromCart(el.name);
                }}
              >
                Remove
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ShoppingCartApp;
