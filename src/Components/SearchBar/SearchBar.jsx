import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchterm] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchterm('')
    }
  }
  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
      borderRadius: 20,
      border: '1px solid #e3e3e3',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
    }}
  >
    <input
      className='searchBar'
      placeholder='Search...'
      value={searchTerm}
      onChange={(e) => setSearchterm(e.target.value)}
    />
    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
      <Search />
    </IconButton>
  </Paper>
  );
}
