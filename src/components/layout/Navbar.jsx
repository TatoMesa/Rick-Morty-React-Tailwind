import { NavLink, Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

function Navbar() {
    const { favorites } = useFavorites();
    const baseClass =
        'px-3 py-2 rounded text-sm font-medium hover:bg-gray-700';

    return (
        <nav className="bg-gray-800 px-6 py-5 flex items-center gap-6 max-w-7xl mx-auto">
            <Link to="/characters" className="flex items-center gap-2">
                <img
                    src="src/assets/Rick-and-Morty-500x281.png"
                    alt="Rick and Morty Explorer"
                    className="h-12 sm:h-20 w-auto"
                />
            </Link>

            <NavLink
                to="/characters"
                className={({ isActive }) => `${baseClass} ${isActive ? 'bg-gray-700' : ''}`}>
                Personajes
            </NavLink>

            <NavLink
                to="/episodes"
                className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}>
                Episodios
            </NavLink>

            <NavLink
                to="/favorites"
                className={({ isActive }) => `flex items-center gap-1 sm:gap-2 ${baseClass} ${isActive ? 'bg-gray-700' : ''}`}>
                <span className="text-yellow-400 text-lg">
                    ★
                </span>
                <span className="hidden sm:inline">
                    Favoritos
                </span>
                {favorites.length > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                    {favorites.length}
                    </span>
                )}
            </NavLink>  
        </nav>
  );
}

export default Navbar;
