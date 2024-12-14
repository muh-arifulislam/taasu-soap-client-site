import { useEffect, useState } from "react";

import Slider from "../../components/Slider/Slider";
import { TBanner } from "../../types";
import BannerSlider from "../../components/Slider/BannerSlider";

const TopBanner = () => {
  const [banners, setBanners] = useState<TBanner[]>([]);
  useEffect(() => {
    fetch("banners.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      });
  }, []);
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
