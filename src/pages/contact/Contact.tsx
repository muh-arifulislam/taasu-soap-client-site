import contactBannerBg from "../../assets/images/CONTACTUS_BANNER.jpg";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/ui/PageHeader";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
const Contact = () => {
  const banner = {
    title: "Contact Us",
    description:
      "We love to hear from customers and retailers. For any questions or feedback, get in touch now!",
    image: contactBannerBg,
  };
  return (
    <div>
      <Breadcrum
        items={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <PageHeader data={banner} />
      <div className="text-center">
        <h1 className="font-secondary my-[20px]">Contact Details:</h1>
        <h2 className="mb-[20px]">
          <span className="font-bold">Address:</span>The Workshop, 99 Upper High
          Street, Broadway, Worcestershire, WR12 7AL
        </h2>
        <h2 className="mb-[20px]">
          <span className="font-bold">Phone:</span> 01386 853 025 (during office
          hours Monday to Friday)
        </h2>
        <h1 className="font-secondary mt-[40px] mb-[20px]">
          Online Press Pack
        </h1>
        <h4 className="mb-[20px]">
          We have a downloadable bank of images and documents for the media.
          Please email us for the current password to access.
        </h4>
        <Button>Press & Media Enquiries</Button>
      </div>
      {/* <SentEmail></SentEmail> */}
    </div>
  );
};

export default Contact;
