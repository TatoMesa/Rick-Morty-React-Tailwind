function Select({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span className="text-gray-400">{label}</span>}

      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
