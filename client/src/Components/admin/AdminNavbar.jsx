import { Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationContext } from "../../Store/applications";
import { useContext } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));
const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login")
  }

  let notifications=0;
  const { applications } = useContext(ApplicationContext);
  applications?.map((data) => {
    if (data.View == false) {
      notifications+=1
    }
   })

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#212121" }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Admin
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
      
        <Icons>
          <Badge badgeContent={notifications} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://wallpapermemory.com/uploads/761/avatar-wallpaper-hd-1080p-73184.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://wallpapermemory.com/uploads/761/avatar-wallpaper-hd-1080p-73184.jpg"
          />
          <Typography variant="span">john</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default AdminNavbar;
