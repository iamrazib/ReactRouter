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

  //console.log(product);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //console.log("number: ",randomNumberInRange(1, 20), Date.now());

  return (
    <div className="flex flex-wrap gap-2">
      {product.map((product, i) => (
        <Card key={i} prodInfo={product} />
      ))}
    </div>
  );
}
