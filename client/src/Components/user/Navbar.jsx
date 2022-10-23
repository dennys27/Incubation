import React, { useContext } from 'react'
import LogoutIcon from "@mui/icons-material/Logout";
import './Navbar.css';
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Store/context';
import { OpenInFull } from '@mui/icons-material';
import { Notifications, Pets } from "@mui/icons-material";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  let navigate = useNavigate()
  let localUser = JSON.parse(localStorage.getItem("user"));

  if (user === null && localUser !== null) {
    setUser(localUser)
  }
  const onLogout = () => {
     
      setUser(null);
    localStorage.removeItem("user");
    navigate('/')
    };
  
    return (
      <div className="navbar">
        <Box sx={{ flexGrow: 1 }} mb={4}>
          <AppBar sx={{ backgroundColor: "#121858" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  {" "}
                  Reva Nests
                </Link>
              </Typography>
              {user ? (
                <Badge
                  sx={{ marginLeft: 2, marginRight: 2 }}
                  badgeContent={0}
                  color="error"
                >
                  <Notifications />
                </Badge>
              ) : (
                ""
              )}
              {user ? `Welcome ${user.name}` : ""}

              {user ? (
                <Typography
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: 10,
                  }}
                  onClick={onLogout}
                >
                  logout
                </Typography>
              ) : (
                <>
                  <Button color="inherit">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/login"
                    >
                      login
                    </Link>
                  </Button>
                  <Button color="inherit">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }


export default Navbar