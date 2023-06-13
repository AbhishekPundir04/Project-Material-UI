import { Grid, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
    <>
    <Grid padding={2}>
    <Typography variant='h4'>
        About US
      </Typography>

    </Grid>
     <Grid >
      <Typography variant='3'  xs={4}>SHow your talent on this Platform</Typography>
      <img src='https://image.shutterstock.com/image-photo/happy-businesspeople-laughing-while-collaborating-260nw-2159023891.jpg' alt='about1' />
      </Grid>
      <Grid>
        <Typography></Typography>
        <img src='https://images.unsplash.com/photo-1602492665157-639323eadd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt=''/>
      </Grid>

    </>
  )
}

export default AboutUs