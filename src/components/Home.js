import React from "react";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 1299,
      id: "djhfsjkahdfkjs",
      imgSrc:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-640",
    },
    {
      name: "iPhone 12",
      price: 799,
      id: "djhfsjkahdghhdfkjs",
      imgSrc:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png?tr=w-640",
    },
    {
      name: "Airpods Max",
      price: 729,
      id: "djhfdsfsddfdfsaghhdfkjs",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000",
    },
    {
      name: "Airpods",
      price: 429,
      id: "djhfdsfsdd3445dghhdfkjs",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    },
    {
      name: "Ipad Pro",
      price: 829,
      id: "djhfdsfafdsfdfhdghhdfkjs",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161220",
    },
    {
      name: "Airtag",
      price: 99,
      id: "djhfdsfsd43534hdghhdfkjs",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-single-select-202104?wid=445&hei=445&fmt=jpeg&qlt=95&.v=1617761671000",
    },
    {
      name: "Apple TV 4K",
      price: 499,
      id: "djhfdsfsfhwartdghhdfkjs",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=538&hei=535&fmt=jpeg&qlt=95&.v=1664896361408",
    },
    {
      name: "iPhone 13 Leather Case",
      price: 59,
      id: "djhfdsfsddf=]fadghhdfkjs",
      imgSrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPPP3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1662503140974",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({type:"addToCart", payload : options})
    dispatch({type:"calculatePrice"})
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          imgSrc={i.imgSrc}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
