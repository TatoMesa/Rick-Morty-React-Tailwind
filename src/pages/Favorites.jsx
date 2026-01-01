import { useFavorites } from '../context/FavoritesContext';
import CharacterList from '../components/characters/CharacterList';


function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-400">
        No tenés favoritos todavía
      </p>
    );
  }

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Favoritos</h1>
      <CharacterList characters={favorites} />
    </section>
  );
}

export default Favorites;
