import { useFavorites } from '../../context/FavoritesContext';

function FavoriteButton({ character }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(character.id);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(character);
      }}
      className={`px-3 py-1 rounded text-sm ${
        favorite
          ? 'bg-red-500'
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
    >
      {favorite ? '★ Favorito' : '☆ Favorito'}
    </button>
  );
}

export default FavoriteButton;
