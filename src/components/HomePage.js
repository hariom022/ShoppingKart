import React from 'react'
import Header from './Header'
import Product from './Product/Product'
import HeroImg from './HeroImg'

const HomePage = (props) => {
 
  let {loading,singleProductData}=props

   
  return (
    <div>
    
      <HeroImg/>
      <Product loading={loading} singleProductData={singleProductData}/> 
      
    </div>
  )
}

export default HomePage
