import React, { useState } from "react";
import EditSection from "./EditSection";
import Sidebar from "./Sidebar";
import Trello from "./Trello";
import "./styles.css";

const Board = () => {
  return (
    <div className="app">
      <Sidebar />
      <Trello />
      <EditSection />
    </div>
  );
};

export default Board;
