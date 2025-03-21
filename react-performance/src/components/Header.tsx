import { useSearchParams } from 'react-router-dom';
import { HeaderProps } from '../types/interfaces';
import SearchBar from './widgets/SearchBar';
import RegionFilterMenu from './widgets/RegionFilter';

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || '';

  const handleRegionChange = (region: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (region) newParams.set('region', region);
      else newParams.delete('region');
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
      </div>
    </>
  );
};

export default Header;
