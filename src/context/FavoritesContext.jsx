import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    const normalized = {
      id: character.id,
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species,
    };

    setFavorites(prev => {
      const exists = prev.some(f => f.id === normalized.id);
      return exists
        ? prev.filter(f => f.id !== normalized.id)
        : [...prev, normalized];
    });
  };

  const isFavorite = (id) =>
    favorites.some(f => f.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
