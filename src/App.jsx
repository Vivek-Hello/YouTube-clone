import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import  Feed  from './components/Feed'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'



export default function App() {
  return (
   <BrowserRouter>
   <Box sx={{background: "#000"}}>
   <Navbar />
   
   <Routes>
    <Route path='/' exact element={< Feed/>}/>
    <Route path='/video/:id'  element={< VideoDetail />}/>
    <Route path='/search/:searchTerm' exact element={< SearchFeed/>}/>
   </Routes>

    

   </Box>
   </BrowserRouter>
  )
}
