import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/actions";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  const dispatch = useDispatch();

  const handleSidebarClick = (option) => {
    dispatch(setSelectedOption(option));
  };
  return (
    <Card className="h-[calc(100vh-2rem)] w-1/5 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        <ListItem onClick={() => handleSidebarClick("Dashboard")}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Organisation")}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Organisation
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("QR Code")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          QR Code
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Customer")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Customer
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("DashSettingsboard")}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Food & Beverages")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Food & Beverages
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Room Services")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Room Services
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Complaint")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Complaint
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Feedback")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Feedback
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Terms")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Terms
        </ListItem>
        <ListItem onClick={() => handleSidebarClick("Logout")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
}
