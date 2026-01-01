import EpisodeCard from './EpisodeCard';

function EpisodeList({ episodes }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {episodes.map(ep => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  );
}

export default EpisodeList;
