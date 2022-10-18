import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import StoreIcon from "@mui/icons-material/Store";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Person2Icon from "@mui/icons-material/Person2";
import { Home } from "@mui/icons-material";
import React from "react";
 
const Sidebar = ({ setSelected }) => {
 
  return (
    <Box flex={1} p={0} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        position="fixed"
        sx={{
          backgroundColor: "#212121",
          width: 230,
          height: "100%",
          color: "white",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  setSelected("applications");
                }}
                primary="Applicant List"
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <WorkspacesIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  setSelected("slotbooking");
                }}
                primary="Booking Slots"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <StoreIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Record Track" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Diversity2Icon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Record List" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <SettingsSuggestIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
