import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <Box sx={{background:'gray',position:'static', left:'0', bottom:'0', width:'100%'}}>
      <Box display={'flex'} justifyContent={'center'} pt='80px'>
        <Typography mr={'20px'}>Features</Typography>
        <Typography mr={'20px'}>Enterprise</Typography>
        <Typography mr={'20px'}>Support</Typography>
        <Typography>ICO</Typography>
      </Box>
      <Box pt='20px'>
        <TwitterIcon sx={{marginRight:'30px'}}/>
        <FacebookIcon sx={{marginRight:'30px'}}/>
        <InstagramIcon sx={{marginRight:'30px'}}/>
        <LinkedInIcon sx={{marginRight:'30px'}}/>
      </Box>
      <Typography p='20px 0px 80px 0px' >© 2020 Pied Piper. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer
