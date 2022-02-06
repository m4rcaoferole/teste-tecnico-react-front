import React, { useState } from "react";

export const Search = ({ onClear, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="search">
      <label htmlFor="query">Procurar:</label>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={handleClear}>Limpar</button>
      <button onClick={() => onSearch(query)}>Procurar</button>
    </div>
  );
};
