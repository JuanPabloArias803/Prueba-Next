'use client'

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutButton from "@/ui/atoms/LogoutBtn";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const {data}=useSession();
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor:'transparent'}}>
        <Toolbar>
          <DirectionsCarIcon sx={{color:'#3b82f6',fontSize:'4rem'}}></DirectionsCarIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'#3b82f6'}}>{data?.user?.email}</Typography>
          <LogoutButton></LogoutButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};




export default Navbar;