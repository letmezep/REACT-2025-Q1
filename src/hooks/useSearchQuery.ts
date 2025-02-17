import { useEffect, useState } from 'react';
import { localStorageItem } from '../constants';

export const useSearchQuery = () => {
  const [searchTerm, setSearchTerm] = useState(localStorageItem);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm };
};
