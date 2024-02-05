import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, ButtonGroup } from "@mui/material";
import Grid from '@mui/material/Grid';
import Skeleton from "react-loading-skeleton";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

const Product = (props) => {
  let { loading ,singleProductData} = props;
  const allproductdata = useSelector((state) => state.ReducerProduct.productData );
  const dispatch=useDispatch()
  const Loading = () => {
    return <>
    <div>
      <Skeleton height={350}/>
    </div>
    <div>
      <Skeleton height={350}/>
    </div>
    <div>
      <Skeleton height={350}/>
    </div>
    
    </>;
  };

  const filterProduct=(cat)=>{
    const filterData= allproductdata.filter((x)=>x.category===cat)
    console.log("filterData",filterData)
    dispatch({type:'ALLPRODUCT' , payload:filterData})
  }

  const ShowProduct = () => {
    return (
      <Box>
        <ButtonGroup size="large" aria-label="large button group">
          <Button key="one" onClick={()=>dispatch({type:'ALLPRODUCT', payload:allproductdata})} >ALL</Button>
          <Button key="two" onClick={()=>filterProduct("men's clothing")}>MEN'S CLOTHING</Button>
          <Button key="three" onClick={()=>filterProduct("women's clothing")}>WOMEN'S CLOTHING</Button>
          <Button key="four" onClick={()=>filterProduct("electronics")}>ELECTRONIC DEVICE</Button>
          <Button key="five" onClick={()=>filterProduct("jewelery")}>JEWELERY</Button>
        </ButtonGroup>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {allproductdata.map((allproductdata) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={allproductdata.id} >
            <Card sx={{ maxWidth: 400, m: "10px 0px 10px 20px" }} height={300}>
              <img src={allproductdata.image} height={300}/>
              
              <CardContent> 
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  
                >
                  {allproductdata.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {allproductdata.price} $
                </Typography>
              </CardContent>
              <CardActions sx={{ alignItems: "center" }}>
                <NavLink to={`/product/${allproductdata.id}`}>
                <Button size="small" onClick={()=>singleProductData(allproductdata.id)} variant="contained">Buy Now</Button>
                </NavLink>
              </CardActions>
            </Card>
            </Grid>
          );
        })}
         </Grid>
         </Box>
      </Box>
    );
  };
  return (
    <Box m="50px 0px ">
      <Box>
        <Typography variant="h1 " sx={{ fontSize: "50px" ,fontWeight:'bold'}}>
          Letest Product
        </Typography>
      </Box>

      <hr />
      <div style={{margin:'50px 0px'}}>
        {loading ? <Loading/> : <ShowProduct/>}
      </div>
    </Box>
  );
};

export default Product;
