import { Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constants'

const Sidebar = () => {

const selectedCategory=''

  return (
   <Stack
   direction='row'
   sx={{overflowY:'auto',
   height:{sx:'auto',md:'95%'},
   flexDirection:{md:'column'}
}}>
    {
        categories.map(categorie=>(
            <button 
            className='category-btn'
            style={{
            background:categorie.name===selectedCategory&&"#FC1503",
            color:'white'
            }}
            >
                <span>{categorie.icon}</span>
                <span>{categorie.name}</span>
            </button>
        ))
    }


   </Stack>
  )
}

export default Sidebar