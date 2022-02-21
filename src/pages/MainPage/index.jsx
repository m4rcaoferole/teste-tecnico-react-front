import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { Repositories } from "./Repositories";

import { getRepositories, createRepository, destroyRepository } from "../../services/api";

import "./style.css";

const userId = '6205c0ceb465f070b41e3f27'

export const MainPage = () => {
  const [ repositories, setRepositories ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ loadingError, setLoadingError ] = useState(false);

  const  loadData = async (query = '') => {
    try {
      const response = await getRepositories(userId, query)
      setRepositories(response.data)
      setLoading(false)
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
    loadData(query);
  };

  const handleDeleteRepo = async (repository) => {
    console.log("delete", repository);
    await destroyRepository(userId, repository._id)
    await loadData(true)
  };

  const handleNewRepo = async (url) => {
    try {
      await createRepository(userId, url)
      await loadData();
    } catch (err) {
      console.error(err)
      setLoadingError(true)
    }
  }

  if (loadingError) {
    return (
      <div className="loading">
      Erro ao carregar os dados do repositório. <Link to='/login'>Voltar</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading">
        Carregando...
      </div>
    )
  }

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
