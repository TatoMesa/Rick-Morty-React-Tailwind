import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';
import Favorites from './pages/Favorites';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EpisodeDetail from './pages/EpisodeDetail';
import Episodes from './pages/Episodes';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;