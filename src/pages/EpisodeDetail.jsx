import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisodeById, getMultipleCharacters } from '../api/rickAndMortyApi';
import { useFetch } from '../hooks/useFetch';
import CharacterCard from '../components/characters/CharacterCard';

function EpisodeDetail() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);

  const { data: episode, loading, error } = useFetch(
    () => getEpisodeById(id),
    [id]
  );

  useEffect(() => {
    if (!episode) return;

    const ids = episode.characters
      .map(url => url.split('/').pop())
      .join(',');

    getMultipleCharacters(ids).then(res =>
      setCharacters(Array.isArray(res) ? res : [res])
    );
  }, [episode]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">{episode.name}</h1>
      <p>{episode.episode}</p>

      <h2 className="mt-6 mb-4 font-bold">Personajes</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </section>
  );
}

export default EpisodeDetail;
