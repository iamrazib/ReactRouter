import { useParams } from "react-router-dom"
import { ProfileDetails } from "../components/ProfileDetails"
import { useEffect, useState } from "react";

export const Profile = () => {

  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const getSingleProduct = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  console.log(singleProduct);

  return <ProfileDetails singel={singleProduct} />;
}
