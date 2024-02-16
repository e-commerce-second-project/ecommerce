import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, InputBase, Button, Avatar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

const NavbarWithSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleSidebar} 
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ color: 'black' }}>
              MyShop
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
              {['Home', 'Contact', 'About'].map((item) => (
                <Typography key={item} variant="h6" component="div" sx={{ color: 'black', mr: 2 }}>
                  {item}
                </Typography>
              ))}
            </div>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="favorite"
              sx={{ color: 'black', mr: 2 }}
            >
              <FavoriteIcon />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32, marginRight: 2 }} src="/path/to/profile/photo.jpg" alt="Profile" />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                sx={{ mr: 1 }}
              />
              <IconButton color="inherit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar} sx={{ width: 300 }}>
        <List>
          {['Home', 'Products', 'About', 'Contact'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavbarWithSidebar;
