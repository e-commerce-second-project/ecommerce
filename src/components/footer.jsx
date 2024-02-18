import React from "react";
import { Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", padding: '20px', textAlign: 'center', width: '100%' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="textSecondary" style={{ color: 'white', marginBottom: '10px' }}>
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
            <Link href="#" style={{ color: 'white', marginRight: '10px' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: 'white' }}>Terms of Service</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
