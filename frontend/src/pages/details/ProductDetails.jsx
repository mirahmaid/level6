import React, { useRef, useState } from "react";
import "./ProductDetails.css";

import { useGetOneProductQuery } from "../../Redux/productApi";
import { useParams } from "react-router-dom";

import {
  Badge,
  Box,
  Button,
  CircularProgress,
  IconButton,
  styled,
  Typography,
} from "@mui/material";

import { Add, Remove, ShoppingCart } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  decreaseQuantity,
  increaseQuantity,
} from "../../Redux/cartSlice";

import DetailsThumb from "./DetailsThumb";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

export default function ProductDetails() {
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.cartt
  );

  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const myRef = useRef(null);

  const { id } = useParams();

  const parsedId = Number(id);

  const { data, error, isLoading } = useGetOneProductQuery(parsedId);

  const productQuantity = (itemAPI) => {
    const myProduct = selectedProducts.find(
      (itemUser) => itemUser.id === itemAPI.id
    );

    return myProduct?.quantity ?? 0;
  };

  const handleTab = (index) => {
    setIndex(index);

    const images = myRef.current.children;

    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }

    images[index].className = "active";
  };

  console.log("id =", id);
  console.log("parsedId =", parsedId);
  console.log("data =", data);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          Error
        </Typography>
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="app details-page">
      <div className="details">

        <div className="big-img">
          <img src={data.imageLink[index]} alt="" />
        </div>

        <div className="box">

          <div className="row">
            <h2>{data.productName}</h2>

            <span>${data.price}</span>
          </div>

          <p>{data.description}</p>

          <DetailsThumb
            images={data.imageLink}
            tab={handleTab}
            myRef={myRef}
          />

          {selectedProductsID.includes(data.id) ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                color="primary"
                sx={{ mr: "10px" }}
                onClick={() => {
                  dispatch(decreaseQuantity(data));
                }}
              >
                <Remove fontSize="small" />
              </IconButton>

              <StyledBadge
                badgeContent={productQuantity(data)}
                color="primary"
              />

              <IconButton
                color="primary"
                sx={{ ml: "10px" }}
                onClick={() => {
                  dispatch(increaseQuantity(data));
                }}
              >
                <Add fontSize="small" />
              </IconButton>
            </div>
          ) : (
            <Button
              sx={{
                textTransform: "capitalize",
                p: 1,
                lineHeight: 1.1,
              }}
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(addProduct(data));
              }}
            >
              <ShoppingCart
                sx={{
                  fontSize: "18px",
                  mr: 1,
                }}
              />

              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}