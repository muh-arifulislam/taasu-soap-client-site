import Slider from "../../components/Slider/Slider";
import { TBanner } from "../../types";
import BannerSlider from "../../components/Slider/BannerSlider";

import banner1 from "../../assets/images/banner/banner1.jpg";
import banner2 from "../../assets/images/banner/banner2.jpg";
import banner3 from "../../assets/images/banner/banner3.jpg";
import banner4 from "../../assets/images/banner/banner4.jpg";
import banner5 from "../../assets/images/banner/banner5.jpg";

const banners: TBanner[] = [
  {
    id: "0",
    title: "Happy Organic September!",
    description:
      "Make the switch to organic soaps this September with our rich, natural & wholesome soap, fragranced with only pure essential oils.",
    btn: true,
    btnText: "Organics Range",
    btnUrl: "#",
    image: banner1,
  },
  {
    id: "1",
    title: "All-natural handmade soap. created in the Cotswolds",
    description:
      "The Cotswolds is where our products were born, and our story began. Follow our journey from the kitchen table to the supermarket shelf.",
    btn: true,
    btnText: "Our Story",
    btnUrl: "#",
    image: banner2,
  },
  {
    id: "2",
    title: "We've been awarded The Queen's Award!",
    description:
      "Eliminate unnecessary plastic bottles with our innovative Eco Warrior range. Functional bars to cleanse from head to toe",
    btn: true,
    btnText: "Eco Warrior Range",
    btnUrl: "#",
    image: banner3,
  },
  {
    id: "3",
    title: "Introducing our B Corp Impact Report!",
    description:
      "Read our latest report where we'll take you through what we have done, and continue to do for the planet, for nature & communities.",
    btn: true,
    btnText: "Read now",
    btnUrl: "#",
    image: banner4,
  },
  {
    id: "4",
    title: "Introducing our B Corp Impact Report!",
    description:
      "Read our latest report where we'll take you through what we have done, and continue to do for the planet, for nature & communities.",
    btn: true,
    btnText: "Read now",
    btnUrl: "#",
    image: banner5,
  },
];

const TopBanner = () => {
  // const [banners, setBanners] = useState<TBanner[]>([]);
  // useEffect(() => {
  //   fetch("banners.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBanners(data);
  //     });
  // }, []);
  return (
    <div>
      <Slider
        data={banners}
        renderItem={(banner) => <BannerSlider data={banner} />}
      />
    </div>
  );
};

export default TopBanner;
