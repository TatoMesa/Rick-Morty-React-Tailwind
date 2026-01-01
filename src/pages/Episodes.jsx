import { useState } from 'react';
import { getEpisodes } from '../api/rickAndMortyApi';
import { useFetch } from '../hooks/useFetch';
import EpisodeList from '../components/episodes/EpisodeList';

function Episodes() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch(
    () => getEpisodes(`?page=${page}`),
    [page]
  );

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Episodios</h1>

      {loading && <p>Cargando...</p>}
      {error && <p>Error al cargar episodios</p>}

      {data?.results && (
        <EpisodeList episodes={data.results} />
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
        >
          Anterior
        </button>

        <button
          disabled={!data?.info?.next}
          onClick={() => setPage(p => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}

export default Episodes;
