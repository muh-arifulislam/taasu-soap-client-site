/* eslint-disable @typescript-eslint/no-explicit-any */

import image1 from "../../assets/images/TILE_ARTISAN.jpg";
import image2 from "../../assets/images/TILE_ECOWARRIOR.jpg";
import image3 from "../../assets/images/TILE_GIFTING.jpg";
import image4 from "../../assets/images/TILE_LITTLEBEAST.jpg";
import image5 from "../../assets/images/TILE_NATURALS.jpg";
import image6 from "../../assets/images/TILE_ORGANIC.jpg";
import Product from "../../components/Product";

const bundleProducts = [
  {
    title: "Artisan",
    price: 4.5,
    image: image1,
    _id: "001",
  },
  {
    title: "Eco Warrior",
    price: 4.5,
    image: image2,
    _id: "002",
  },
  {
    title: "Gifting",
    price: 4.5,
    image: image3,
    _id: "003",
  },
  {
    title: "Little Beast",
    price: 4.5,
    image: image4,
    _id: "004",
  },
  {
    title: "Naturals",
    price: 4.5,
    image: image5,
    _id: "005",
  },
  {
    title: "Organic",
    price: 4.5,
    image: image6,
    _id: "006",
  },
];

const OtherProducts = () => {
  return (
    <div className="py-5 md:py-8 lg:py-10">
      <div className="text-center mb-12">
        <h2 className="mb-[20px] font-secondary text-xl md:text-2xl leading-10 text-gray-900 dark:text-white/90">
          Our Bundle Products
        </h2>
        <h4 className=" text-gray-800 dark:text-gray-200 w-full max-w-2xl mx-auto text-center">
          Discover our specially curated bundle products—designed perfect for
          gifting or stocking up on your everyday essentials.
        </h4>
      </div>
      <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-cols-1 lg:gap-[20px] gap-[30px]">
        {bundleProducts.map((item: any) => (
          <Product.Bundle data={item} key={item?._id} />
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;
