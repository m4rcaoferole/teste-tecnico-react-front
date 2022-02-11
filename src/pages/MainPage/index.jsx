import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Repositories } from "./Repositories";
import { Search } from "./Search";

import { getRepositories } from "../../services/api";

import "./style.css";

export const MainPage = () => {
  const [ repositories, setRepositories ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ loadingError, setLoadingError ] = useState(false);

  const  loadData = async (query = '') => {
    try {
      const response = await getRepositories()
      setRepositories(response.data)
    } catch (err) {
      console.log(err);
      setLoadingError(true);
    }

  }

  useEffect(() => {
    (async () => await loadData())();
  }, [])

  const handleLogout = () => {
    console.log("sair");
  };

  const handleSearch = (query) => {
    console.log("query", query);
  };

  const handleDeleteRepo = (repository) => {
    console.log("delete", repository);
  };

  const handleNewRepo = (url) => {
    console.log('Novo Repo', url)
  }

  // if (loadingError) {
  //   return (
  //     <div className="loading">
  //     Erro ao carregar os dados do repositório. <Link to='/login'>Voltar</Link>
  //     </div>
  //   )
  // // }

  // if (loading) {
  //   return (
  //     <div className="loading">
  //       Carregando...
  //     </div>
  //   )
  // }

  return (
    <div id="main">
      <NavBar onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories 
        repositories={repositories} 
        onDelete={handleDeleteRepo} 
        onNewRepo={handleNewRepo}
      />
    </div>
  );
};
