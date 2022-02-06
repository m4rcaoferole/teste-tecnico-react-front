import React from "react";

export const Repositories = ({ repositories, onDelete, onNewRepo }) => {
  const [newRepo, setNewRepo] = useState("");

  return (
    <div className="repositories">
      <h2 className="title"> Repositórios </h2>

      <ul className="list">
        <li className="item">
          <div className="info">
            <div className="owner">Facebook</div>
            <div className="name">React</div>
          </div>
          <button onClick={() => onDelete(null)}> Apagar </button>
        </li>
      </ul>

      <div className="new">
        <label htmlFor="new-repo">Novo Repositório:</label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
        />
        <button onClick={() => onNewRepo(newRepo)}> Adicionar </button>
      </div>
    </div>
  );
};
