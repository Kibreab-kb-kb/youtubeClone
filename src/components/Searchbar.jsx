import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <Paper
    component='form'
    onSubmit={()=>{}}
    sx={{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      mr:{sm:5}
    }}
    >

    <input
   className='search-bar'
   placeholder='search...'
   value=''
   onChange={()=>{}}
    />
    <IconButton type='submit' sx={{color:'red',p:'10px'}}>
      <SearchIcon/>
    </IconButton>

    </Paper>
  )
} 

export default Searchbar