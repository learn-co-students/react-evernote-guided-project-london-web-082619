import React, { Fragment } from 'react'

/* Add basic styling for NavLinks */
const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }
const CategoryType = ({handleAll, handleWork, handleIdea, handlePlan}) =>(
    <div>
    {/* {
        categories.map(category => <button 
        onClick={() => handleClick(category)}
        style={link} 
        // which category is currently selected?
        // className={selectedCategory === "All" ? "active" : undefined}
        
    >{category}</button>)
    } */}
    <button 
        onClick={handleAll}
        style={link} 
        // which category is currently selected?
        // className={selectedCategory === "All" ? "active" : undefined}
        
    >All</button>
    <button 
        onClick={handleWork}
        style={link} 
        // which category is currently selected?
        // className={selectedCategory === "All" ? "active" : undefined}
        
        
    >Work</button>
    <button 
        onClick={handleIdea}
        style={link} 
        // which category is currently selected?
        // className={selectedCategory === "All" ? "active" : undefined}
        
        
    >Idea</button>
    <button 
        onClick={handlePlan}
        style={link} 
        // which category is currently selected?
        // className={selectedCategory === "All" ? "active" : undefined}
        
        
    >Plan</button>
    </div>
);
export default CategoryType