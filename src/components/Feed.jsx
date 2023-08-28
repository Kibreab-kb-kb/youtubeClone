import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import {Sidebar,Videos} from './'

const Feed = () => {
  return (
   <Stack sx={{
    flexDirection:
   {sx:'column',md:'row'}}}>
    <Box sx={{height:
    {sx:'auto',
    md:'92vh'},
    borderRight:'1px solid #3d3d3d',
    px:{sx:0,md:2}}}>
      <Sidebar/>

      <Typography className='copyright'
      variant='body2' sx={{mt:1.5,color:"#fff"}}>
        Copyright 2023 kb kb
      </Typography>
    </Box>

    <Box>
      <Typography
      variant='h4'
      fontWeight='bold'
      color='white'>
        New<span style={{color:'#F31503'}}>videos</span>
      </Typography>

      <Videos videos={[]}/>

    </Box>
   </Stack>
  )
}

export default Feed