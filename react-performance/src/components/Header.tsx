import { useSearchParams } from 'react-router-dom';
import { HeaderProps } from '../types/interfaces';
import SearchBar from './widgets/SearchBar';
import RegionFilterMenu from './widgets/RegionFilter';
import PopulationSortMenu from './widgets/PopulationSort';

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || '';

  const sortBy = searchParams.get('sortBy') || '';
  const sortOrder = searchParams.get('sortOrder') || 'asc';

  const handleRegionChange = (region: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (region) newParams.set('region', region);
      else newParams.delete('region');
      return newParams;
    });
  };

  const handleSortChange = (newSortBy: string, newSortOrder: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newSortBy) newParams.set('sortBy', newSortBy);
      else newParams.delete('sortBy');

      if (newSortOrder) newParams.set('sortOrder', newSortOrder);
      else newParams.delete('sortOrder');

      return newParams;
    });
  };

  return (
    <>
      <div className="header">
        <RegionFilterMenu
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        />
        <SearchBar onSearchChange={onSearchChange} />

        <PopulationSortMenu
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
      </div>
    </>
  );
};

export default Header;
