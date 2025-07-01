import { Leaf, HandHeart, Smile } from "lucide-react";
import { FaSoap } from "react-icons/fa";
import PageHeader from "../../components/ui/PageHeader";
import Subscribe from "../../components/ui/Subscribe";

const AboutUsPage = () => {
  return (
    <div>
      <PageHeader
        title="About"
        breadcrumbs={[
          {
            label: "Home",
            url: "/",
          },
          {
            label: "About",
          },
        ]}
      />
      <div className="container mx-auto px-4 py-10 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Our Soap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We craft premium handmade organic soaps with love and care. Our
            mission is to bring nature back into your skincare routine.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              To promote healthy, sustainable, and eco-friendly skincare by
              providing handcrafted soaps made from natural and ethically
              sourced ingredients.
            </p>
          </div>
          <div className="bg-white p-6 border rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p>
              To become a trusted brand in organic skincare, known for quality,
              transparency, and positive impact on both skin and the
              environment.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border rounded-xl shadow-sm">
              <Leaf size={36} className="mx-auto text-green-600 mb-2" />
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-sm">
                We believe in reducing our carbon footprint and protecting
                nature.
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <HandHeart size={36} className="mx-auto text-pink-600 mb-2" />
              <h3 className="font-semibold">Care & Craft</h3>
              <p className="text-sm">
                Each soap is handmade with care, ensuring top quality for your
                skin.
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <FaSoap size={36} className="mx-auto text-blue-600 mb-2" />
              <h3 className="font-semibold">Natural Ingredients</h3>
              <p className="text-sm">
                We use only organic, chemical-free ingredients in our products.
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <Smile size={36} className="mx-auto text-yellow-600 mb-2" />
              <h3 className="font-semibold">Customer Happiness</h3>
              <p className="text-sm">
                Your satisfaction is our top priority — always.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold">Ariful Islam</h3>
              <p className="text-sm text-gray-500">Co-Founder & Tech Lead</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold">Sadia Rahman</h3>
              <p className="text-sm text-gray-500">
                Founder & Product Designer
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <h3 className="font-semibold">Md. Farhan</h3>
              <p className="text-sm text-gray-500">Marketing Strategist</p>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <Subscribe />
      </div>
    </div>
  );
};

export default AboutUsPage;
