import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {

    const [product, setProduct] = useState([]);
    const getProduct = () => {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => setProduct(data.products));
    }

    useEffect(() => {
        getProduct();
    }, []);

  console.log(product);
  
  return (
    <div className="flex flex-wrap gap-2">
      {product.map((product, i) => (
        <Card key={i} prodInfo={product} />
      ))}
    </div>
  );
}
