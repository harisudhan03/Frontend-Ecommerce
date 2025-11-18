import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import "animate.css";

const LatestCollection = () => {
  const { products } = useContext(Shopcontext);
  const [latestProduct,setLatestProduct] = useState([])

    useEffect(() => {
        setLatestProduct(products.slice(0,10));
    },[])
    
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 text-xs sm:text-sm md:text-base m-auto text-gray-600">
          Maiores reiciendis quibusdam reprehenderit quo aperiam quae at qui
          dignissimos ducimus cum
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
