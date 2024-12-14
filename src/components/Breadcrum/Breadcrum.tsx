import { Link, useLocation } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  path: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[]; // optional for custom items
};

const Breadcrum: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  // Generate breadcrumb items dynamically if none provided
  const pathItems =
    items ??
    location.pathname
      .split("/")
      .filter(Boolean)
      .map((_, idx, arr) => ({
        label: arr[idx],
        path: "/" + arr.slice(0, idx + 1).join("/"),
      }));
  return (
    <div className="text-sm breadcrumbs bg-secondary">
      <ul className="justify-center">
        {pathItems.map((item, idx) => (
          <li key={idx + Math.random()}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrum;
