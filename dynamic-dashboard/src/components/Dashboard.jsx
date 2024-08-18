// src/components/Dashboard.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Category from './category/Category';
import AddWidgetForm from './category/AddWidget';
import Widget from './category/Widget';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const searchTerm=useSelector((state)=>state.searchTerm.toLowerCase())

  const filterCategories=categories.filter((category)=>
    category.name.toLowerCase().includes(searchTerm)
)

  return (
    <div className='dashboard'>
        <div className="header">
            <h1 className='dash-heading'>Dynamic Dashboard</h1>
            <SearchBar  />
        </div>
      {filterCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;