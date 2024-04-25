import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/actions";
import "../../App.css";
import { useState } from "react";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export function Sidebar() {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(null);

  const handleSidebarClick = (option, clickedItem) => {
    dispatch(setSelectedOption(option));
    setActiveItem(clickedItem);
  };
  return (
    <div class="sidebar">
      <ul>
        <li
          className={activeItem === 1 ? "active" : ""}
          onClick={() => handleSidebarClick("Dashboard", 1)}
        >
          <span class="icon">
            <DashboardOutlinedIcon />
          </span>
          Dashboard
        </li>
        <li
          className={activeItem === 2 ? "active" : ""}
          onClick={() => handleSidebarClick("Organisation", 2)}
        >
          <span class="icon">
            <CorporateFareOutlinedIcon />
          </span>
          Organisation
        </li>
        <li
          className={activeItem === 3 ? "active" : ""}
          onClick={() => handleSidebarClick("QR Code", 3)}
        >
          <span class="icon">
            <QrCodeOutlinedIcon />
          </span>
          QR Code
        </li>
        <li
          className={activeItem === 4 ? "active" : ""}
          onClick={() => handleSidebarClick("Customer", 4)}
        >
          <span class="icon">
            <PermIdentityOutlinedIcon />
          </span>
          Customer
        </li>
        <li
          className={activeItem === 5 ? "active" : ""}
          onClick={() => handleSidebarClick("Food & Beverages", 5)}
        >
          <span class="icon">
            <RestaurantOutlinedIcon />
          </span>
          Food & Beverages
        </li>
        <li
          className={activeItem === 6 ? "active" : ""}
          onClick={() => handleSidebarClick("Room Services", 6)}
        >
          <span class="icon">
            <RoomServiceOutlinedIcon />
          </span>
          Room Services
        </li>
        <li
          className={activeItem === 7 ? "active" : ""}
          onClick={() => handleSidebarClick("Complaint", 7)}
        >
          <span class="icon">
            <SupportAgentOutlinedIcon />
          </span>
          Complaint
        </li>
        <li
          className={activeItem === 8 ? "active" : ""}
          onClick={() => handleSidebarClick("Feedback", 8)}
        >
          <span class="icon">
            <ChatOutlinedIcon />
          </span>
          Feedback
        </li>
        <li
          className={activeItem === 9 ? "active" : ""}
          onClick={() => handleSidebarClick("Teams", 9)}
        >
          <span class="icon">
            <GroupsOutlinedIcon />
          </span>
          Teams
        </li>
        <li
          className={activeItem === 10 ? "active" : ""}
          onClick={() => handleSidebarClick("Logout", 10)}
        >
          <span class="icon">
            <LogoutOutlinedIcon />
          </span>
          Logout
        </li>
      </ul>
    </div>
  );
}
