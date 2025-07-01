import { NavLink } from "react-router-dom";
import { navLinksData } from "../../constant/navLInkData";
import { useGetUserQuery } from "../../redux/features/user/userApi";

import profileImg from "../../assets/images/astronaut.png";

const Sidebar = () => {
  const { data } = useGetUserQuery(undefined);

  return (
    <div>
      <div className="border">
        <div className="flex items-center p-4 gap-2 border-b mb-4">
          <img
            className="w-12 rounded-full"
            alt="Tailwind CSS Navbar component"
            src={profileImg}
          />
          <div>
            <small>Hello,</small>
            <p className="font-bold">
              {data?.success && data?.data?.firstName && data?.data?.lastName
                ? data?.data?.firstName + " " + data?.data?.lastName
                : "Unknown User"}
            </p>
          </div>
        </div>
        <ul className="">
          {navLinksData.map((item) => (
            <li key={item.url}>
              <NavLink
                to={item.url}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    " w-full p-4 flex items-center gap-2",
                    isPending ? "pending" : "",
                    isActive ? "bg-black text-white" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <span className="">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
