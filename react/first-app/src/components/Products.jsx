import React from "react";
import useFetch from "./useFetch";

function Products() {
  const { data, error, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
    method: "GET"
  });

  return (
    <main>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div>
        {data && data.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
            />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;