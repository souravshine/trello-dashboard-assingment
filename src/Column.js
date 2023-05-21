import React, { useState } from "react";
import Item from "./Item";

const Column = ({ column, deleteColumn }) => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      text: "New Item"
    };

    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className="column">
      <h3>{column.title}</h3>
      <button onClick={() => deleteColumn(column.id)}>Delete Column</button>
      <button onClick={addItem}>Add Item</button>
      {items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Column;
