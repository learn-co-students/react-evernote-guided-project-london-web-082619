import React from 'react';
import CategoryType from '../CategoryType';


const Search = (props) => {
  return (
    <div className="filter">
      <input onChange={(e)=> props.search(e.target.value)}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
      <div className="category">

      <CategoryType handleAll={()=> props.handleAll('All')} 
        handleWork={()=> props.handleWork("Work")} 
        handleIdea={()=> props.handleIdea("Idea")} 
        handlePlan={()=> props.handlePlan("Plan")}/>
      </div>
    </div>
  );
}

export default Search;
