import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/actions";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
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

  const handleSidebarClick = (option) => {
    dispatch(setSelectedOption(option));
  };
  return (
    <Card className="h-[calc(95vh-2rem)] w-1/5 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        <ListItem onClick={() => handleSidebarClick("Dashboard")}>
          <ListItemPrefix>
            <DashboardOutlinedIcon className="" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Organisation")}>
          <ListItemPrefix>
            <CorporateFareOutlinedIcon className="" />
          </ListItemPrefix>
          Organisation
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("QR Code")}>
          <ListItemPrefix>
            <QrCodeOutlinedIcon className="" />
          </ListItemPrefix>
          QR Code
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Customer")}>
          <ListItemPrefix>
            <PermIdentityOutlinedIcon className="" />
          </ListItemPrefix>
          Customer
        </ListItem>

        <ListItem onClick={() => handleSidebarClick("Food & Beverages")}>
          <ListItemPrefix>
            <RestaurantOutlinedIcon className="" />
          </ListItemPrefix>
          Food & Beverages
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Room Services")}>
          <ListItemPrefix>
            <RoomServiceOutlinedIcon className="" />
          </ListItemPrefix>
          Room Services
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Complaint")}>
          <ListItemPrefix>
            <SupportAgentOutlinedIcon className="" />
          </ListItemPrefix>
          Complaint
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Feedback")}>
          <ListItemPrefix>
            <ChatOutlinedIcon className="" />
          </ListItemPrefix>
          Feedback
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Terms")}>
          <ListItemPrefix>
            <GroupsOutlinedIcon className="" />
          </ListItemPrefix>
          Teams
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Logout")}>
          <ListItemPrefix>
            <LogoutOutlinedIcon className="" />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
}
