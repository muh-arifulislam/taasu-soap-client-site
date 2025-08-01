import { FaRegBell, FaRegHeart, FaRegStar, FaRegUser } from "react-icons/fa";
import { TNavLinkData } from "../types";
import { BsBoxSeam } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

export const navLinksData: TNavLinkData[] = [
  {
    url: "/my-section/profile",
    label: "My Profile",
    icon: <FaRegUser />,
  },
  {
    url: "/my-section/orders",
    label: "My Orders",
    icon: <BsBoxSeam />,
  },
  {
    url: "/my-section/addresses",
    label: "Manage Addresses",
    icon: <GrLocation />,
  },
  {
    url: "/my-section/wishlists",
    label: "My Wishlists",
    icon: <FaRegHeart />,
  },
  {
    url: "/my-section/reviews",
    label: "My Reviews",
    icon: <FaRegStar />,
  },
  {
    url: "/my-section/notifications",
    label: "Notification",
    icon: <FaRegBell />,
  },
  {
    url: "/my-section/settings",
    label: "Settings",
    icon: <IoSettingsOutline />,
  },
];
