import React from "react";
import { NavBar } from "./NavBar";
import { Repositories } from "./Repositories";
import { Search } from "./Search";

import "./style.css";

export const MainPage = () => {
  const handleLogout = () => {
    console.log("sair");
  };

  const handleSearch = (query) => {
    console.log("query", query);
  };

  const handleDeleteRepo = () => {
    console.log("delete");
  };

  return (
    <div id="main">
      <NavBar onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories onDelete={handleDeleteRepo} onNewRepo={}/>
    </div>
  );
};
