import { Link } from 'react-router-dom';

function EpisodeCard({ episode }) {
  return (
    <Link
      to={`/episode/${episode.id}`}
      className="bg-gray-800 p-4 rounded hover:bg-gray-700"
    >
      <h3 className="font-bold">{episode.name}</h3>
      <p>{episode.episode}</p>
      <p className="text-sm text-gray-400">{episode.air_date}</p>
    </Link>
  );
}

export default EpisodeCard;
