// import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import {
  useGetNextPageQuery,
  useSearchCharactersQuery,
} from '../../services/api/starWarsApi';
import Card from './Card';
import Loader from '../ui/Loader';
import BaseButton from '../ui/BaseButton';
import { Character } from '../../types/interfaces';
import { itemsPerPage } from '../../constants';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const CardList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const page = Number(searchParams.get('page')) || 1;

  const { data, error, isLoading } = searchTerm
    ? useSearchCharactersQuery(searchTerm)
    : useGetNextPageQuery(page.toString());

  const totalPages = data?.count ? Math.ceil(data.count / itemsPerPage) : 1;

  const changePage = (newPage: number) => {
    setSearchParams({ search: searchTerm, page: newPage.toString() });
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading characters</p>;

  return (
    <>
      <div className="card-list">
        {data?.results.length > 0 ? (
          data.results.map((item: Character) => (
            <Card key={item.url} item={item} />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>

      <div className="card-list__pagination">
        <BaseButton onClick={() => changePage(page - 1)} disabled={page <= 1}>
          Previous
        </BaseButton>
        <div className="pagination__page-number">
          Page {page} of {totalPages}
        </div>
        <BaseButton
          onClick={() => changePage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </BaseButton>
      </div>
    </>
  );
};

export default CardList;

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router';
// import Card from './Card';
// import Loader from '../ui/Loader';
// import BaseButton from '../ui/BaseButton';
// import { getFilteredData } from '../../services/filterData';
// import { fetchData } from '../../services/api/fetchData';
// import { Character, Data } from '../../types/interfaces';
// import { itemsPerPage, urlPage } from '../../constants';

// import '../../styles/card-list.css';
// import '../../styles/variables.css';

// const CardList: React.FC = () => {
//   const [allData, setAllData] = useState<Character[]>([]);
//   const [filteredData, setFilteredData] = useState<Character[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchTerm = searchParams.get('search') || '';
//   const page = Number(searchParams.get('page')) || 1;

//   useEffect(() => {
//     const loadAllData = async () => {
//       setLoading(true);
//       let results: Character[] = [];
//       let pageNum = 1;
//       let nextPage = `${urlPage}${pageNum}`;

//       try {
//         while (nextPage) {
//           const response: Data | null = await fetchData(nextPage);
//           if (response) {
//             results = [...results, ...response.results];
//             nextPage = response.next ?? '';
//             pageNum++;
//           }
//         }
//         setAllData(results);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAllData();
//   }, []);

//   useEffect(() => {
//     if (searchTerm) {
//       setFilteredData(
//         getFilteredData(
//           {
//             results: allData,
//             previous: null,
//             next: null,
//           },
//           searchTerm
//         )
//       );
//     } else {
//       setFilteredData(allData);
//     }
//   }, [allData, searchTerm]);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const paginatedData = filteredData.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const changePage = (newPage: number) => {
//     setSearchParams({ search: searchTerm, page: newPage.toString() });
//   };

//   if (loading) return <Loader />;

//   return (
//     <>
//       <div className="card-list">
//         {paginatedData.length > 0 ? (
//           paginatedData.map((item: Character) => (
//             <Card key={item.url} item={item} />
//           ))
//         ) : (
//           <p>No characters found</p>
//         )}
//       </div>

//       <div className="card-list__pagination">
//         <BaseButton onClick={() => changePage(page - 1)} disabled={page <= 1}>
//           Previous
//         </BaseButton>
//         <div className="pagination__page-number">
//           Page {page} of {totalPages}
//         </div>
//         <BaseButton
//           onClick={() => changePage(page + 1)}
//           disabled={page >= totalPages}
//         >
//           Next
//         </BaseButton>
//       </div>
//     </>
//   );
// };

// export default CardList;
