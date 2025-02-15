import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../ui/Loader';
import { getFilteredData } from '../../services/filterData';
import { Character, Data } from '../../types.ts/interfaces';
import { fetchData } from '../../services/api/fetchData';

import '../../styles/card-list.css';
import '../../styles/variables.css';
import BaseButton from '../ui/BaseButton';
import { useSearchParams } from 'react-router';
import { urlPage } from '../../constants';

const ITEMS_PER_PAGE = 10;

const CardList: React.FC = () => {
  const [allData, setAllData] = useState<Character[]>([]);
  const [filteredData, setFilteredData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const loadAllData = async () => {
      setLoading(true);
      let results: Character[] = [];
      let pageNum = 1;
      let nextPage = `${urlPage}${pageNum}`;

      try {
        while (nextPage) {
          const response: Data | null = await fetchData(nextPage);
          if (response) {
            results = [...results, ...response.results];
            nextPage = response.next ?? '';
            pageNum++;
          }
        }
        setAllData(results);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredData(
        getFilteredData(
          {
            results: allData,
            previous: null,
            next: null,
          },
          searchTerm
        )
      );
    } else {
      setFilteredData(allData);
    }
  }, [allData, searchTerm]);

  // Разбиваем данные на страницы
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const changePage = (newPage: number) => {
    setSearchParams({ search: searchTerm, page: newPage.toString() });
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="card-list">
        {paginatedData.length > 0 ? (
          paginatedData.map((item: Character) => (
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
// import Card from './Card';
// import Loader from '../ui/Loader';
// import { getFilteredData } from '../../services/filterData';
// import { Character, Data } from '../../types.ts/interfaces';
// import { fetchData } from '../../services/api/fetchData';

// import '../../styles/card-list.css';
// import '../../styles/variables.css';
// import BaseButton from '../ui/BaseButton';
// import { useSearchParams } from 'react-router';
// import { urlPage } from '../../constants';

// const ITEMS_PER_PAGE = 10;

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
//           if(response){
//           results = [...results, ...response.results];
//           nextPage = response.next ?? '';
//           pageNum++;
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
//       setFilteredData(getFilteredData({
//         results: allData,
//         previous: null,
//         next: null
//       }, searchTerm));
//     } else {
//       setFilteredData(allData);
//     }
//   }, [allData, searchTerm]);

//   // Разбиваем данные на страницы
//   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
//   const paginatedData = filteredData.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   const changePage = (newPage: number) => {
//     setSearchParams({ search: searchTerm, page: newPage.toString() });
//   };

//   if (loading) return <Loader />;

//   return (
//     <>
//       <div className="card-list">
//         {paginatedData.length > 0 ? (
//           paginatedData.map((item: Character) => <Card key={item.url} item={item} />)
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
//         <BaseButton onClick={() => changePage(page + 1)} disabled={page >= totalPages}>
//           Next
//         </BaseButton>
//       </div>
//     </>
//   );
// };

// export default CardList;

// // import React, { useEffect, useState } from 'react';
// // import Card from './Card';
// // import Loader from '../ui/Loader';
// // import { getFilteredData } from '../../services/filterData';
// // import { CardListProps, Character, Data } from '../../types.ts/interfaces';
// // import { fetchData } from '../../services/api/fetchData';

// // import '../../styles/card-list.css';
// // import '../../styles/variables.css';
// // import BaseButton from '../ui/BaseButton';
// // import { useSearchParams } from 'react-router';
// // import { urlPage } from '../../constants';

// // const CardList: React.FC<CardListProps> = ({ searchTerm }) => {
// //   const [data, setData] = useState<Data | null>(null);
// //   const [filterData, setFilterData] = useState<Character[] | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [prevPage, setPrevPage] = useState<string | null>(null);
// //   const [nextPage, setNextPage] = useState<string | null>(null);

// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const page = Number(searchParams.get('page')) || 1;

// //   const changePage = (newPage: number) => {
// //     setSearchParams({ page: newPage.toString() });
// //   };

// //   useEffect(() => {
// //     const loadData = async () => {
// //       try {
// //         const response = await fetchData(`${urlPage}${page}`);
// //         setData(response);
// //         if (response) {
// //           setPrevPage(response.previous ?? null);
// //           setNextPage(response.next ?? null);
// //         }
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadData();
// //   }, [page]);

// //   useEffect(() => {
// //     if (data) {
// //       setFilterData(getFilteredData(data, searchTerm));
// //     }
// //   }, [data, searchTerm]);

// //   if (loading || !data) return <Loader />;

// //   return (
// //     <>
// //       <div className="card-list">
// //         {filterData && filterData?.length > 0 ? (
// //           filterData.map((item: Character, index: number) => (
// //             <Card key={index} item={item} />
// //           ))
// //         ) : (
// //           <p>No characters found</p>
// //         )}
// //       </div>
// //       <div className="card-list__pagination">
// //         <BaseButton
// //           onClick={() => {
// //             changePage(page - 1);
// //           }}
// //           disabled={!prevPage}
// //         >
// //           previous
// //         </BaseButton>
// //         <div className="pagination__page-number">{page}</div>
// //         <BaseButton
// //           onClick={() => {
// //             changePage(page + 1);
// //           }}
// //           disabled={!nextPage}
// //         >
// //           next
// //         </BaseButton>
// //       </div>
// //     </>
// //   );
// // };

// // export default CardList;
