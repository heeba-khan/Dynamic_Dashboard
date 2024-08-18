// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';
import '../App.css'

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setTerm(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
  
        <input
      className='search-bar'
      type="text"
      value={term}
      onChange={handleSearch}
      placeholder="Search widgets..."
    />
  
    
  );
};

export default SearchBar;