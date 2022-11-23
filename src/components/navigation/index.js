import React from "react";
import "./navigation.css";
import { useLocation, Link } from "react-router-dom";
import {
  faSquare,
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";

function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Tuiter", icon: faSquare, path: "/tuiter" },
    { label: "Home", icon: faHouse, path: "/home" },
    { label: "Explore", icon: faHashtag, path: "/explore" },
    { label: "Notifications", icon: faBell, path: "/notifications" },
    { label: "Messages", icon: faEnvelope, path: "/messages" },
    { label: "Bookmarks", icon: faBookmark, path: "/bookmarks" },
    { label: "Lists", icon: faList, path: "/lists" },
    { label: "Profile", icon: faUser, path: "/profile" },
    { label: "More", icon: faEllipsis, path: "/more" },
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
                <FontAwesomeIcon icon={link.icon} />
                <span className="ttr-label" style={{ marginLeft: 10 }}>
                  {link.label}
                </span>
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
