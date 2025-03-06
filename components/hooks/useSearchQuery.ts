import { useEffect, useState } from 'react';

export const useSearchQuery = () => {
  const [searchTerm, setSearchTerm] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('searchTerm') || '';
    }
    return '';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchTerm', searchTerm);
    }
  }, [searchTerm]);

  return { searchTerm, setSearchTerm };
};

