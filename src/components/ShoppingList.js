import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items : initialItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSerach] = useState("")
  const [items, setItems] = useState(initialItems); 

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setSerach(event.target.value);
  }
  const itemsToDisplay = items
    .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
    })
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm search={search} onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
