import React, { useState } from 'react';

function Buscador() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Buscando: ${query}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu búsqueda"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Buscador;
