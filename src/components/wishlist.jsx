import React, { useEffect, useState } from 'react';
import NavbarWithSidebar from './navsidebar.jsx';
import axios from 'axios';
import { Card, CardContent, Typography, Button, ListItemIcon } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete'; 

const WishList = () => {
  const [datawishlist, setdatawishlist] = useState([]);
const [refresh,setrefresh]=useState(false)


  useEffect(() => {
    axios
      .get(`http://localhost:3300/user/getallwishlistproducts/${1}`)
      .then((res) => {
        console.log('products fetched from wishlist !');
        setdatawishlist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);



  const deleteProductFromWishlist = (idpro) => {
    axios
      .delete('http://localhost:3300/user/deletefromwishlist', {
        data: {
          userId: 1,
          productId:idpro
        }
      })
      .then(() => {
        console.log("deleted");
        setrefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div>
      <NavbarWithSidebar />
      <br />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {datawishlist.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 200,
              marginBottom: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <CardContent>
              <ListItemIcon  onClick={() => deleteProductFromWishlist (product.id)}>
                <DeleteIcon  /> 
              </ListItemIcon>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {product.rate}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '5px',
                  borderRadius: '5px',
                  marginTop: '5px',
                }}
              >
                Add to Cart
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WishList;
