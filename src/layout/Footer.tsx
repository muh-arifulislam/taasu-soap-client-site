import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/icons/taasu-soap-logo-secondary.png";

import bgEdge from "../assets/icons/rough-edge-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="relative">
        <span className="absolute w-full top-0 left-0">
          <img className="w-full h-[25px]" src={bgEdge} alt="" />
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0  lg:text-start text-center lg:px-[100px] px-[20px] bg-primary text-white py-20 text-lg dark:bg-slate-900">
          <div className="flex flex-col">
            <h2 className="mb-[15px] font-bold text-xl">About Us</h2>
            <a href="#">Our Story</a>
            <a href="#">Giving Back</a>
            <a href="#">Testimonials</a>
            <a href="#">Our Achievement</a>
            <a href="#">Palm Oil Statement</a>
            <a href="#">Careers</a>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-[15px] font-bold text-xl">Customer Service</h2>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
            <a href="#">Ingredient Glossary</a>
            <a href="#">Samples Policy</a>
            <a href="#">Delivery & Returns</a>
            <a href="#">Press & Media Enquiries</a>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-[15px] font-bold text-xl">Other Information</h2>
            <a href="#">Terms and Condition</a>
            <a href="#">Wholesale Terms and Condition</a>
            <a href="#">Coockings and Company Privacy</a>
            <a href="#">Company Policies</a>
            <a href="#">Corporate Gifting</a>
            <a href="#">Gift Cards</a>
          </div>
          <div>
            <div className="w-full max-w-[180px] mx-auto">
              <img src={logo} alt="logo" />
              <div className="flex items-center justify-center my-4 gap-4">
                <a href="http://google.com">
                  <FaFacebook size={20} />
                </a>
                <a href="http://google.com">
                  <FaInstagram size={20} />
                </a>
                <a href="http://google.com">
                  <FaYoutube size={20} />
                </a>
                <a href="http://google.com">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute w-full bottom-0">
          <img className="w-full h-[25px] rotate-180" src={bgEdge} alt="" />
        </span>
      </div>
      <div></div>
      <p className="pb-[20px] px-[20px] text-center text-lg text-slate-800 dark:text-white/60">
        Copyright 2022 Taasu Soap. Reg. Company Number: 06727643. VAT Number:
        135300751.
      </p>
    </footer>
  );
};

export default Footer;
