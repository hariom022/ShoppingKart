import React from 'react'
import './Hero.css'
import { Box, Typography } from '@mui/material'


const HeroImg = () => {
  return (
    <div className='hero-img'>
        <Box>
            <Typography variant='h2' sx={{color:'white', pt:'80px'}}>NEW SEASON ARRIVAL </Typography>
            <Typography variant='h5'>CHECK OUT ALL THE TRENDS</Typography>
        </Box>
   
    </div>
  )
}

export default HeroImg
