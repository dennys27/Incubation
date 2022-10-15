import React, { useContext } from 'react'
import './Navbar.css';
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Store/context';


const Navbar = () => {
const { user } = useContext(AuthContext);
console.log(user,"user context...............");
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
              Reva Nests
            </Typography>
            {user ? 
              `Welcome ${user.name}` :""}
            
            {user? <Link 
                    style={{ textDecoration: "none", color: "white",marginLeft:10 }}
                    to="/login"
                  >
                    logout
                  </Link> : (
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