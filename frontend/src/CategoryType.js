import React from 'react'

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
    <button 
        onClick={handleAll}
        style={link} 
        
    >All</button>
    <button 
        onClick={handleWork}
        style={link} 
        
    >Work</button>
    <button 
        onClick={handleIdea}
        style={link} 
        
    >Idea</button>
    <button 
        onClick={handlePlan}
        style={link} 
        
    >Plan</button>
    </div>
);
export default CategoryType