import { useSearchParams } from 'react-router-dom';
import SearchBar from './widgets/SearchBar';
import RegionFilterMenu from './widgets/RegionFilter';
import SortMenu from './widgets/Sorting';
import { useCallback } from 'react';
import React from 'react';

const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || '';

  const sortBy = searchParams.get('sortBy') || '';
  const sortOrder = searchParams.get('sortOrder') || 'asc';

  const handleRegionChange = useCallback(
    (region: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (region) newParams.set('region', region);
        else newParams.delete('region');
        return newParams;
      });
    },
    [setSearchParams]
  );

  const handleSortChange = useCallback(
    (newSortBy: string, newSortOrder: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (newSortBy) newParams.set('sortBy', newSortBy);
        else newParams.delete('sortBy');

        if (newSortOrder) newParams.set('sortOrder', newSortOrder);
        else newParams.delete('sortOrder');

        return newParams;
      });
    },
    [setSearchParams]
  );

  return (
    <>
      <div className="header">
        <RegionFilterMenu
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        />
        <SearchBar />

        <SortMenu
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
      </div>
    </>
  );
};

export default React.memo(Header);
