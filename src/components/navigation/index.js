import React from "react";
import "./navigation.css";
import { useLocation, Link } from "react-router-dom";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Tuiter", icon: <CropSquareIcon />, path: "/tuiter" },
    { label: "Home", icon: <HomeIcon />, path: "/home" },
    { label: "Explore", icon: <ExploreIcon />, path: "/explore" },
    {
      label: "Notifications",
      icon: <NotificationsActiveIcon />,
      path: "/notifications",
    },
    { label: "Messages", icon: <MailIcon />, path: "/messages" },
    { label: "Bookmarks", icon: <BookmarkBorderIcon />, path: "/bookmarks" },
    { label: "Lists", icon: <ListIcon />, path: "/lists" },
    { label: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
    { label: "More", icon: <MoreHorizIcon />, path: "/more" },
  ];
  return (
    <div className="ttr-navigation">
      <ul className="list-group">
        {links.map((link, ndx) => {
          return (
            <li
              key={ndx}
              className={`list-group-item border-0 ttr-font-size-150pc text-nowrap
         ${pathname.indexOf(link.path) >= 0 ? "fw-bold" : ""}`}
            >
              <Link
                to={link.path}
                id={link.label}
                className="text-decoration-none text-black"
              >
                {link.icon} {""}
                <span className="ttr-label">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <a
        href="#"
        className="mt-3 btn btn-lg btn-primary rounded-pill w-100 fw-bold text-white"
      >
        Tuit
      </a>
    </div>
  );
}

export default Navigation;
