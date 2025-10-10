import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../redux/features/blog/blogApi";

import PageHeader from "../../components/ui/PageHeader";
import RichTextRenderer from "../../components/ui/RichTextRenderer";

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetBlogByIdQuery({ id: id as string });

  console.log(data?.data);

  if (isLoading) {
    return (
      <>
        <div className="max-w-[1200px] mx-auto px-4 my-10">
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-96 w-full"></div>
            <div className="skeleton h-4 w-[70%]"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <PageHeader
        breadcrumbs={[
          {
            label: "Home",
            url: "/",
          },
          {
            label: "Blogs",
            url: "/blogs",
          },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="relative">
            <img
              src={
                data?.data?.featuredImage ??
                "https://blog.feedspot.com/wp-content/uploads/2018/06/uk-soap-making-copy.jpg"
              }
              alt="blog_image"
              className="w-full rounded-lg object-cover"
            />
            {/* Subtle Blended Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/100 to-transparent mix-blend-overlay"></div>

            {/* Content Area */}
            <div className="absolute bottom-0 sm:bottom-6 left-2 sm:left-6 right-2 sm:right-6 p-2 sm:p-4 text-slate-100">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h2 className="text-lg sm:text-2xl font-semibold">
                  {data?.data?.title}
                </h2>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                      <span className="text-xl">A</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-xs text-slate-200">Written by</h6>
                    <h4 className="font-bold text-md">Admin</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <RichTextRenderer
              content={[
                {
                  type: "heading-one",
                  children: [{ text: "The Art and Science of Handmade Soap" }],
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Handmade soap is more than just a cleansing product—it’s a blend of ",
                    },
                    { text: "artistry", bold: true },
                    { text: " and " },
                    { text: "science", italic: true },
                    {
                      text: " that transforms simple ingredients into luxurious experiences.",
                    },
                  ],
                },
                {
                  type: "heading-two",
                  children: [{ text: "Why Choose Handmade Soap?" }],
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Unlike commercial soaps, handmade soap is crafted with ",
                    },
                    { text: "natural oils", bold: true },
                    { text: " and " },
                    { text: "botanical extracts", italic: true },
                    {
                      text: ". It moisturizes the skin rather than stripping it.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  children: [
                    { text: "Learn more about natural ingredients at " },
                    {
                      text: "https://www.soapmaking.org",
                      link: "https://www.soapmaking.org",
                    },
                    { text: "." },
                  ],
                },
                {
                  type: "heading-two",
                  children: [{ text: "Key Ingredients in Handmade Soap" }],
                },
                {
                  type: "bulleted-list",
                  children: [
                    {
                      type: "list-item",
                      children: [
                        { text: "Olive oil – nourishes and softens skin" },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [{ text: "Coconut oil – creates rich lather" }],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "Essential oils – natural fragrance and therapeutic properties",
                        },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "Botanical additives – herbs, flowers, and clays for texture and benefits",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "heading-two",
                  children: [{ text: "The Handmade Soap Process" }],
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Creating handmade soap involves several careful steps:",
                    },
                  ],
                },
                {
                  type: "numbered-list",
                  children: [
                    {
                      type: "list-item",
                      children: [{ text: "Measure oils and lye accurately." }],
                    },
                    {
                      type: "list-item",
                      children: [
                        { text: "Mix ingredients at the right temperature." },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [{ text: "Pour into molds and let it set." }],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "Cure the soap for 4–6 weeks for hardness and longevity.",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "paragraph",
                  children: [
                    { text: "Read our detailed guide for beginners here: " },
                    {
                      text: "https://www.example.com/soap-guide",
                      link: "https://www.example.com/soap-guide",
                    },
                    { text: "." },
                  ],
                },
                {
                  type: "heading-two",
                  children: [{ text: "Benefits of Handmade Soap" }],
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Handmade soaps provide gentle cleansing, retain natural oils, and often include ",
                    },
                    { text: "therapeutic essential oils", italic: true },
                    { text: " that improve well-being." },
                  ],
                },
                {
                  type: "paragraph",
                  children: [
                    { text: "Explore our full range of soaps at " },
                    {
                      text: "https://www.handmadesoaps.com",
                      link: "https://www.handmadesoaps.com",
                    },
                    { text: " and experience the difference." },
                  ],
                },
                {
                  type: "heading-two",
                  children: [{ text: "Conclusion" }],
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Whether you are a soap enthusiast or just looking for a gentle, natural alternative, handmade soap offers quality, creativity, and care in every bar.",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
