import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";



const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            COLLECTIONS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <List>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary="Home" sx={{ mr: "20px" }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary="Product" sx={{ mr: "20px" }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary="About" sx={{ mr: "20px" }} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary="Contact" sx={{ mr: "20px" }} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              "@media(max-Width:676px)" :{display:'none'}
            }}
          >
            COLLECTION
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <List>
              <ListItem>
                <NavLink to={'/'} style={{listStyle:'none', textDecoration:'none',color:'white'}}>
                <ListItemText primary="Home" sx={{ mr: "20px" }} />
                </NavLink>
                <NavLink to={'/product'} style={{listStyle:'none', textDecoration:'none',color:'white'}}>
                <ListItemText primary="Products" sx={{ mr: "20px" }} />
                </NavLink>
                <NavLink to={'/about'} style={{listStyle:'none', textDecoration:'none',color:'white'}}>
                <ListItemText primary="About" sx={{ mr: "20px" }} />
                </NavLink>
                <NavLink style={{listStyle:'none', textDecoration:'none',color:'white'}}>
                <ListItemText primary="Contact" sx={{ mr: "20px" }} />
                </NavLink>
                
                
              </ListItem>
            </List>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open ">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button variant="outlined" sx={{color:'white', border:'1px solid white', mr:'5px'}}> Login</Button>
              </IconButton>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button variant="outlined" sx={{color:'white', border:'1px solid white',mr:'5px'}}>Register</Button>
              </IconButton>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button variant="outlined" sx={{color:'white', border:'1px solid white',mr:'5px'}}><NavLink to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</NavLink> </Button>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
