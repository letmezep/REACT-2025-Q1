import React from 'react';
import { RegionFilterProps } from '../../types/interfaces';

const RegionFilterMenu: React.FC<RegionFilterProps> = ({
  selectedRegion,
  onRegionChange,
}) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRegionChange(e.target.value);
  };

  return (
    <div className="region-filter-box">
      <select value={selectedRegion} onChange={handleChange}>
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(RegionFilterMenu);
