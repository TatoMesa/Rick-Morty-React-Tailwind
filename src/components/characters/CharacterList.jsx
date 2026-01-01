import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  if (!characters.length) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No hay personajes para mostrar
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}

export default CharacterList;
