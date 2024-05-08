import React, { useState } from "react";

function CategoryFilter({categories, setSelectedCategory, selectedCategory}) {
  const [activeCategory, setActive] = useState(null)
  function handleClick(category) {
    setSelectedCategory(category)
    setActive(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button key={category} className= {activeCategory === category ? "selected" : ""} onClick={() =>handleClick(category) }>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
