import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../ui/FavoriteButton';


function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/character/${character.id}`)}
      className="bg-gray-800 rounded-xl overflow-hidden shadow hover:scale-105 transition cursor-pointer"
    >
      <img src={character.image} alt={character.name} />

      <div className="p-3 space-y-2">
        <h3 className="font-bold text-lg">{character.name}</h3>
        <p className="text-sm text-gray-300">
          {character.status} - {character.species}
        </p>

        <FavoriteButton character={character} />
      </div>
    </div>
  );
}

export default CharacterCard;
