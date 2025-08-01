import { NavLink } from "react-router-dom";
import bg from "../../assets/site-header.jpg";

// type Item = {
//   label: string;
//   url?: string;
// };

// type PropsType = {
//   items: Item[];
// };

type BreadcrumbItem = {
  label: string;
  url?: string;
};

type PageHeaderProps = {
  title?: string;
  breadcrumbs: BreadcrumbItem[];
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="">
      <div
        className="bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="absolute inset-0 bg-white opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        <div className="py-8 md:py-[65px] text-center relative z-10">
          {title && (
            <p className="text-3xl text-slate-900 font-bold">{title}</p>
          )}
          <nav className="flex justify-center space-x-0 text-white text-sm mt-2">
            {breadcrumbs.map((item, idx) => (
              <span key={idx} className="flex items-center">
                {item.url ? (
                  <NavLink
                    to={item.url}
                    className="hover:underline text-slate-900"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <span>{item.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-slate-900">/</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
