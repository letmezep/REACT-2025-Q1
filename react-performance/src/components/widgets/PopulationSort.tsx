import { SortMenuProps } from '../../types/interfaces';

const PopulationSortMenu: React.FC<SortMenuProps> = ({
  sortBy,
  sortOrder,
  onSortChange,
}) => {
  return (
    <div className="sort-menu">
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value, sortOrder)}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => onSortChange(sortBy, e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default PopulationSortMenu;
