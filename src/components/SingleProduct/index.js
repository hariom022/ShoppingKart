import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';


const SingleProduct = (props) => {
  let{HandleAddProduct}=props

  const dispatch=useDispatch()
  const nevigate=useNavigate()
  const dataSingle = useSelector((state) => state.ReducerSingleProduct );

  const cartItems=(title, price,image)=>{
    dispatch({type:'ADD_TO_CART',payload:{title,price,image}} )
  }
  return (
    <Box display='flex' justifyContent='center' m='50px 0px' sx={{sm:{display:'block'}}}>
      <img src={dataSingle.image} height={300}/>
      <Box width={500} alignItems='start' ml='50px'>
      <Typography variant='h4' >{dataSingle.title}</Typography>
      <Typography variant='h5' color='secondary'>{dataSingle.price} $</Typography>
      <Rating name="read-only" value={dataSingle.rating && dataSingle.rating.rate} readOnly />
      <Typography variant='h5'>{dataSingle.category}</Typography>
      <Typography >{dataSingle.description} </Typography>
      <Button variant="contained" sx={{m:'20px 20px'}} onClick={()=>HandleAddProduct(dataSingle)}>ADD TO CART</Button>
      <NavLink to={'/cart'}>
      <Button variant="contained" sx={{m:'20px 20px'}}>GO TO CART</Button>
      </NavLink>
      <Button variant="contained" onClick={()=>nevigate(-1)}>BACK</Button>
      </Box>
    </Box>
  )
};

export default SingleProduct;
