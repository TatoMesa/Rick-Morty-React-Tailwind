import { useState, useEffect } from 'react';
import { getCharacters } from '../api/rickAndMortyApi';
import { useFetch } from '../hooks/useFetch';
import CharacterList from '../components/characters/CharacterList';
import CharacterFilters from '../components/characters/CharacterFilters';

function Characters() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  const query = `?page=${page}&name=${search}&status=${status}`;

  const { data, loading, error } = useFetch(
    () => getCharacters(query),
    [search, status, page]
  );

  // Resetear a página 1 cuando cambia el filtro o búsqueda
  const handleSearchChange = value => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = value => {
    setStatus(value);
    setPage(1);
  };

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <CharacterFilters
        search={search}
        onSearchChange={handleSearchChange}
        status={status}
        onStatusChange={handleStatusChange}
      />

      {loading && (
        <p className="text-center mt-6">Cargando...</p>
      )}

      {error && (
        <p className="text-center mt-6 text-red-500">
          No hay resultados
        </p>
      )}

      {data?.results && (
        <>
          <CharacterList characters={data.results} />

          {/* PAGINACIÓN */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              disabled={!data.info?.prev}
              onClick={() => setPage(prev => prev - 1)}
              className="px-4 py-2 rounded bg-gray-700 text-white
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>

            <span className="text-sm text-gray-300">
              Página {page} de {data.info.pages}
            </span>

            <button
              disabled={!data.info?.next}
              onClick={() => setPage(prev => prev + 1)}
              className="px-4 py-2 rounded bg-gray-700 text-white
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Characters;
