import contactBannerBg from "../../assets/images/CONTACTUS_BANNER.jpg";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/ui/PageHeader";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import SentEmail from "./SentEmail";
import Subscribe from "../../components/ui/Subscribe";
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
      <div className="text-center my-16">
        <h1 className="font-secondary font-bold text-2xl text-slate-700 my-[20px]">
          Contact Details:
        </h1>
        <h2 className="mb-1 text-lg text-slate-700">
          <span className="font-bold text-primary">Phone:</span> 01386 853 025
          (during office hours)
        </h2>
        <h2 className="mb-1 text-lg  text-slate-700">
          <span className="font-bold text-primary">Email:</span>
          <a href="mailto:taasu@soap.com"> taasu@soap.com</a>
        </h2>
        <h2 className="text-lg text-slate-700">
          <span className="font-bold text-primary">Address:</span>Paduar Bazar
          Bishwaroad, Sadar South, Cumilla
        </h2>
      </div>

      <SentEmail />

      <div className="text-center my-16">
        <h1 className="font-secondary font-bold text-2xl text-slate-700 mt-[40px] mb-[20px]">
          Online Press Pack
        </h1>
        <h4 className="mb-[20px] text-lg">
          We have a downloadable bank of images and documents for the media.
          Please{" "}
          <a className="underline" href="mailto:arifibnenam@gmail.com">
            email us
          </a>{" "}
          for the current password to access.
        </h4>
        <Button>Press & Media Enquiries</Button>
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;
