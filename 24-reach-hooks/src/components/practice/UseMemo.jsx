import React, { useState, useMemo } from "react";

const ProductFilter = () => {
  // 상품 가격 제한 상태 관리

  const [priceLimit, setPriceLimit] = useState(0);
  const products = [
    { name: "Product A", price: 30 },
    { name: "Product B", price: 50 },
    { name: "Product C", price: 70 },
  ];

  let [product, setProduct] = useState([]);
  const filteredProducts = useMemo(() => {
    setProduct(
      products.filter((el) => {
        return el.price < priceLimit;
      })
    );
  }, [priceLimit]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type="number"
        value={priceLimit}
        placeholder="Enter price limit"
        onChange={(e) => {
          setPriceLimit(e.target.value);
        }}
      />
      {product.map((el) => {
        return (
          <ul>
            <li>
              {el.name} - ${el.price}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductFilter;
