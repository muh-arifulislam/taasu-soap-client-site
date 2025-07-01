import Subscribe from "../../components/ui/Subscribe";

import { Send } from "lucide-react";
import { BiEnvelope, BiHome, BiPhoneCall } from "react-icons/bi";
import { IoInformationSharp } from "react-icons/io5";
import PageHeader from "../../components/ui/PageHeader";

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact"
        breadcrumbs={[
          {
            label: "Home",
            url: "/",
          },
          {
            label: "Contact",
          },
        ]}
      />
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Contact Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="col-span-2 bg-white p-6 border rounded-xl shadow-sm dark:bg-slate-400/10 dark:border-slate-400/10">
            <h2 className="text-2xl font-semibold mb-4">
              Do You Have Any Questions?
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows={4}
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full">
                  <Send className="mr-2" size={16} /> Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 border rounded-xl shadow-sm space-y-4 dark:bg-slate-400/10 dark:border-slate-400/10">
            <h2 className="text-2xl font-semibold mb-4">
              Get In Touch With Us
            </h2>
            <div className="flex  items-start gap-4 mb-2">
              <BiHome size={20} className="mt-2" />
              <div className="space-y-1]">
                <h4 className="font-semibold">Address:</h4>
                <p className="text-[15px">Paduar Bazar Bishwaroad</p>
                <p className="text-[15px">Sadar South Cumilla</p>
                <p className="text-[15px">BD, Bangladesh 1360</p>
              </div>
            </div>
            <div className="flex  items-start gap-4 mb-2">
              <BiPhoneCall size={20} className="mt-2" />
              <div className="space-y-1]">
                <h4 className="font-semibold">Contact No.:</h4>
                <p className="text-[15px">(+880) 1305-56-0747</p>
              </div>
            </div>
            <div className="flex  items-start gap-4 mb-2">
              <BiEnvelope size={20} className="mt-2" />
              <div className="space-y-1]">
                <h4 className="font-semibold">Email:</h4>
                <p className="text-[15px">arifibnenam@gmail.com</p>
              </div>
            </div>
            <div className="flex  items-start gap-4 mb-2">
              <IoInformationSharp size={20} className="mt-2" />
              <div className="space-y-1]">
                <h4 className="font-semibold">Store Info:</h4>
                <p className="text-[15px">Monday – Friday 10 AM – 8 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-72 rounded shadow-md overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.669563172447!2d90.40366011543105!3d23.79356398457079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c729a49a8b9d%3A0x2f6c9c3f69eabf!2sGulshan%202%2C%20Dhaka%201210!5e0!3m2!1sen!2sbd!4v1632228587520!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Subscribe Section */}
        <Subscribe />
      </div>
    </div>
  );
};

export default Contact;
