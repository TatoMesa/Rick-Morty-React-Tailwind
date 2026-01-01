import { useParams, useNavigate } from 'react-router-dom';
import { getCharacterById } from '../api/rickAndMortyApi';
import { useFetch } from '../hooks/useFetch';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    () => getCharacterById(id),
    [id]
  );

  if (loading) {
    return <p className="text-center mt-10">Cargando personaje...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error al cargar personaje
      </p>
    );
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-green-400 hover:underline"
      >
        ← Volver
      </button>

      <div className="flex flex-col md:flex-row gap-6 bg-gray-800 rounded-xl p-6">
        <img
          src={data.image}
          alt={data.name}
          className="w-64 rounded-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

          <ul className="space-y-2 text-gray-300">
            <li><strong>Status:</strong> {data.status}</li>
            <li><strong>Species:</strong> {data.species}</li>
            <li><strong>Gender:</strong> {data.gender}</li>
            <li><strong>Origin:</strong> {data.origin.name}</li>
            <li><strong>Location:</strong> {data.location.name}</li>
            <li><strong>Episodios:</strong> {data.episode.length}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;
