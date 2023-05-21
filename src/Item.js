import React from "react";

const Item = ({ item, deleteItem }) => {
  return (
    <div className="item">
      <p>{item.text}</p>
      <button onClick={() => deleteItem(item.id)}>Delete Item</button>
    </div>
  );
};

export default Item;
