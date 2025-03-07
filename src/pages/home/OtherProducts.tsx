import ProductAlt from "../../components/ui/ProductAlt";

import image1 from "../../assets/images/TILE_ARTISAN.jpg";
import image2 from "../../assets/images/TILE_ECOWARRIOR.jpg";
import image3 from "../../assets/images/TILE_GIFTING.jpg";
import image4 from "../../assets/images/TILE_LITTLEBEAST.jpg";
import image5 from "../../assets/images/TILE_NATURALS.jpg";
import image6 from "../../assets/images/TILE_ORGANIC.jpg";

const bundleProducts = [
  {
    title: "Artisan",
    price: 4.5,
    image: image1,
  },
  {
    title: "Eco Warrior",
    price: 4.5,
    image: image2,
  },
  {
    title: "Gifting",
    price: 4.5,
    image: image3,
  },
  {
    title: "Little Beast",
    price: 4.5,
    image: image4,
  },
  {
    title: "Naturals",
    price: 4.5,
    image: image5,
  },
  {
    title: "Organic",
    price: 4.5,
    image: image6,
  },
];

const OtherProducts = () => {
  return (
    <section className="lg:mx-[100px] mx-[20px] grid lg:grid-cols-3 grid-cols-1 lg:gap-[20px] gap-[30px]">
      {bundleProducts.map((item, idx: number) => (
        <ProductAlt data={item} key={idx} />
      ))}
    </section>
  );
};

export default OtherProducts;
