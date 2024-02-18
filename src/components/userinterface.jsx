import React, { useEffect, useState } from "react";
import NavbarWithSidebar from "./navsidebar.jsx";
import Footer from "./footer.jsx";
import axios from "axios";
import { Card, CardContent, Typography, Button, ListItemIcon } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';
import newarrivalimage from './imagesUser/newarrival1.avif'
import newarrivalimage2 from './imagesUser/newarrival2.jpg'
import newarrivalimage3 from './imagesUser/newarrival3.jpg'


const UserInterface = () => {
  const [products, setProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/allproducts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const posttowishlist = (productid, userid) => {
    axios.post('http://localhost:3300/user/addtowishlist', { userId: userid, productId: productid })
      .then(() => {
        console.log("added to wishlist");
      }).catch((err) => {
        console.log(err);
      });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 2) % 3);
  };

  const handleToggleProducts = () => {
    setShowAllProducts((prevShowAllProducts) => !prevShowAllProducts);
  };

  const filteredProducts = showAllProducts ? products : products.slice(0, 5);

  const imageURLs = [
    "https://cdn.appleigeek.com/2018/09/apple-iphone-xs-iphone-xs-max-officiels.jpg",
    "https://www.iphon.fr/app/uploads/2020/10/iphone-12-pro-publicite-apple.jpg",
    "https://generations.fr/media/articles/beats_solo2_wireless-jpg.jpg",
    "https://img.phonandroid.com/2022/09/Capture-decran-2022-09-02-094305.jpg",
  ];

  return (
    <div style={{ paddingBottom: '60px', textAlign: "center" }}>
      <NavbarWithSidebar />
      <br />
      <div style={{ position: "relative", display: "inline-block", maxWidth: "100%" }}>
        <img
          src={imageURLs[currentImageIndex]}
          alt="User-friendly image"
          style={{
            maxWidth: "100%",
            width: "1000px",
            maxHeight: "500px",
            display: "block",
            margin: "0 auto"
          }}
        />
        <div style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)", cursor: "pointer", fontSize: 24, color: "white" }} onClick={handlePrevImage}>
          &lt;
        </div>
        <div style={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)", cursor: "pointer", fontSize: 24, color: "white" }} onClick={handleNextImage}>
          &gt;
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h5" style={{ color: "red", textAlign: "left", marginLeft: "20px" }}>Today's Products</Typography>
      <div style={{ display: "flex", flexWrap: showAllProducts ? "wrap" : "nowrap", justifyContent: "center", gap: "20px" }}>
        {filteredProducts.map((product, index) => (
          <Card
            key={product.id}
            sx={{
              width: 200,
              marginBottom: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={product.images[0]?.image}
              alt={`Product ${product.id}`}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <CardContent>
              <ListItemIcon onClick={() => {
                posttowishlist(product.id, 1)
              }}>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <Typography variant="h6" component="div">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">${product.price}</Typography>
              <Typography variant="body2" color="text.secondary">Rating: {product.rate}</Typography>
              <Typography variant="body2" color="text.secondary" style={{ backgroundColor: "red", color: "white", padding: "5px", borderRadius: "5px", marginTop: "5px" }}>Add to Cart</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        onClick={handleToggleProducts}
        variant="contained"
        style={{ marginBottom: "20px", backgroundColor: "red", color: "white" }}
      >
        {showAllProducts ? "Show Less" : "View All Products"}
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h5" style={{ color: "red", textAlign: "left", marginLeft: "20px" }}>New Arrival</Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "3px" }}>
        <img src={newarrivalimage} style={{ width: "600px", height: "500px", objectFit: "cover" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <img src={newarrivalimage2} style={{ width: "600px", height: "250px", objectFit: "cover" }} />
          <img src={newarrivalimage3} style={{ width: "600px", height: "250px", objectFit: "cover" }} />
        </div>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <LocalShippingIcon style={{ fontSize: 40, color: "black" }} />
          <Typography variant="subtitle1">Free and Fast Delivery</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <HeadsetMicIcon style={{ fontSize: 40, color: "black" }} />
          <Typography variant="subtitle1">24/7 Customer Service</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <VerifiedIcon style={{ fontSize: 40, color: "green" }} />
          <Typography variant="subtitle1">Money Back Guarantee</Typography>
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
