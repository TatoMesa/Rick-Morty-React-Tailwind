import Select from '../ui/Select';
import {statusOptions} from '../../utils/filterConfig'
function CharacterFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="flex-1 p-2 rounded bg-gray-800 text-white"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />

      <Select
        label="Estado"
        value={status}
        onChange={onStatusChange}
        options={statusOptions}
      />
    </div>
  );
}

export default CharacterFilters;
