import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import Column from "./Column";

const Trello = () => {
  const [columns, setColumns] = useState([]);

  const addColumn = () => {
    const newColumn = {
      id: columns.length + 1,
      title: "New Column",
      items: []
    };

    setColumns([...columns, newColumn]);
  };

  const deleteColumn = (columnId) => {
    const updatedColumns = columns.filter((column) => column.id !== columnId);
    setColumns(updatedColumns);
  };
  return (
    <div className="trello-main-box">
      <div className="board">
        {columns.map((column) => (
          <Column key={column.id} column={column} deleteColumn={deleteColumn} />
        ))}
      </div>
      <section>
        <button className="trello-add-btn" onClick={addColumn}>
          Add todo
        </button>
      </section>
    </div>
  );
};

export default Trello;
