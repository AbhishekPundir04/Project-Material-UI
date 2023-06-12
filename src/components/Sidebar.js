import {
  Groups,
  Home,
  Login,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor=""
      flex={1}
      p={2}
      sx={{ display:"block",marginTop:'50px' }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/homepage">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/group">
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/marketplace">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/setting">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText primary="Login Page" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

const AppDrawer=(props)=>{
  

  return (
    <>
    <Drawer
        variant={"temporary"}
        anchor="left"
        onClose={()=>{props.handleDrawerClose()}}
        open={props.isSidebarOpen}
        sx={{
        display: { xs: "block", sm: "block", md:"none" ,
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          backgroundColor: "#E0EEF7",
          width: 200,
          boxSizing: "border-box",
        },
      } }}
      >
        <Sidebar />
      </Drawer>

      <Drawer
        variant={"permanent"}
        
        anchor="left"
        open={props.isSidebarOpen}
        sx={{
        display: { xs: "none", sm: "none", md:"block" ,
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          backgroundColor: "#E0EEF7",
          width: 200,
          boxSizing: "border-box",
        },
      } }}
      >
        <Sidebar />
      </Drawer>
    </>
  )
}

export default AppDrawer;
