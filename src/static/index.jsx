import { FaHome, FaUser } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
export const LINKS = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "Users",
    path: "/users",
    icon: <HiMiniUsers />,
  },
  {
    id: 3,
    name: "Create-user",
    path: "/create-user",
    icon: <FaUser />,
  },
];
