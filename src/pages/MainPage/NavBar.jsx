import React from "react";

export const NavBar = ({ onLogout }) => {
  return (
    <div className="nav">
      <h1 className="logo"> Sistema de Repositórios </h1>
      <button onClick={onLogout}> Sair </button>
    </div>
  );
};
