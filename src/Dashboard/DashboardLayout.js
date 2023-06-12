import { Box, CssBaseline, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen,setSidebarOpen] = useState(false)
  return (
    <Box>
      <CssBaseline />
      <Box>
        <Navbar 
        handleDrawerClose={()=>setSidebarOpen(!isSidebarOpen)}
        />
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Sidebar isSidebarOpen={isSidebarOpen} handleDrawerClose={()=>setSidebarOpen(!isSidebarOpen)} />
          </Grid>
          <Grid item xs={8}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
