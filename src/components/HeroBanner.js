import React from 'react'
import {Box, Typography ,Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{ lg:'212px',xs:'70px',sm:'150px'},
      ml:{sm:'50px'},
    }} position="relative" p="20px" >
      <Typography color='#FF2625'
      fontWeight="600" fontSize="35px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize: {lg :'58px',xs:'24px'}}}mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" fontWeight={500} mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Typography fontWeight={600} mb={4} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
      <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#ff2625',padding:'10px'}}>Explore Exercises</Button>
    <img src={HeroBannerImage} alt="banner" className='hero-banner-img'
    style={{
      //position:'absolute',
     // transform:'translateX(150%)',
      //width:'70vh',
      //height:'50vw'
      borderRadius:'50px',
      opacity:'100%'
    }}
    />
    </Box>
  )
}

export default HeroBanner