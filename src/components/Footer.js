import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4" width="100vw">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Empower your body, inspire your soul. Together, let's reach new heights of strength and vitality.</Typography>
  </Box>
  )
}

export default Footer