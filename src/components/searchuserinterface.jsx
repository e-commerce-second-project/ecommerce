import React, { useState, useEffect } from "react";
import NavbarWithSidebar from "./navsidebar.jsx";
import axios from "axios";
import { Card, CardContent, Typography, ListItemIcon } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarRating from "../components/starRating.jsx";
import { useParams } from "react-router-dom";

const Searchuserinterface = () => {
  const { target } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        let response;
        if (target.match(/^[A-Za-z]+$/)) {
          response = await axios.get(`http://localhost:3300/user/search`, {
            params: { category: target },
          });
        } else {
          response = await axios.get(`http://localhost:3300/user/search`, {
            params: { name: target },
          });
        }
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    search();
  }, [target]);

  return (
    <div>
      <NavbarWithSidebar />
      <div style={{ paddingBottom: '60px', textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <br />
        <Typography variant="h5" style={{ color: "red", textAlign: "left", marginLeft: "20px", width: "100%" }}>Search Results</Typography>
        {searchResults.map((product, index) => (
          <Card
            key={product.id}
            sx={{
              width: 200,
              marginBottom: "20px",
              marginRight: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={product.images[0]?.image}
              alt={`Product ${product.id}`}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <CardContent>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <Typography variant="h6" component="div">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">${product.price}</Typography>
              <Typography variant="body2" color="text.secondary">
                <StarRating rating={product.rate} />
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ backgroundColor: "red", color: "white", padding: "5px", borderRadius: "5px", marginTop: "5px" }}>Add to Cart</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Searchuserinterface;
