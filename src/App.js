import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import { allProductData, singleProduct } from "./api";
import { useDispatch } from "react-redux";
import HomePage from "./components/HomePage"; 
import Product from "./components/Product/Product";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [loading, setLoading] = useState(false);
  const[cartItem,setCartItem] =useState([])

  let componentMounted = true;

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (componentMounted) {
        const product = await allProductData().then((data) =>
          dispatch({ type: "ALLPRODUCT", payload: data })
        );
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const singleProductData = (id) => {
    const single = singleProduct(id).then((data) =>
      dispatch({ type: "SINGLEDATA", payload: data })
    );
  };

  const HandleAddProduct=(product)=>{

    const ProductExist= cartItem.find((item)=>item.id===product.id);
    if(ProductExist){
      setCartItem(cartItem.map((item)=>item.id===product.id ?
      {...ProductExist, quantity: ProductExist.quantity+1} : item))
      console.log("cartItem",cartItem)
    }else{
      setCartItem([...cartItem , {...product,quantity:1}])
    }
  }
  const HandleRemoveProduct=(product)=>{
    const ProductExist= cartItem.find((item)=>item.id===product.id);
    if(ProductExist.quantity===1){
      setCartItem(cartItem.filter((item)=>item.id !== product.id))
    }else{
      setCartItem(
        cartItem.map((item)=>item.id === product.id ?{...ProductExist, quantity: ProductExist.quantity-1} :item)
      )
    }
  }
  const clearCartHandler=()=>{
    setCartItem([])

  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage loading={loading} singleProductData={singleProductData} />
          }
        />
        <Route
          path="/product"
          element={
            <Product singleProductData={singleProductData} loading={loading} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<SingleProduct  HandleAddProduct={HandleAddProduct}/>} />
        <Route path="/cart"  element={<Cart cartItem={cartItem} HandleAddProduct={HandleAddProduct} HandleRemoveProduct={HandleRemoveProduct}
                             clearCartHandler={clearCartHandler}/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
