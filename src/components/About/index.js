import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box>
      <Typography variant='h3' fontWeight={'bold'} mt={'100px'}>ABOUT US</Typography>
      <Typography mt={'20px'}>Welcome to our e-commerce store. Here's a little bit about who we are...</Typography>
      <Typography>Our mission is to provide high-quality products with exceptional customer service...</Typography>
      
    </Box>
  )
}

export default About
