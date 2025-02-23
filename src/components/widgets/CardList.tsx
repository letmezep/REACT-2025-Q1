import { useSearchParams } from 'react-router';
import { useGetCharactersQuery } from '../../services/api/starWarsApi';
import { Character } from '../../types/interfaces';
import BaseButton from '../ui/BaseButton';
import Loader from '../ui/Loader';
import Card from './Card';
import Flyout from './Flyout';

const CardList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const pageParam = searchParams.get('page');
  const page = Number(pageParam) || 1;
  const itemsPerPage = 10;

  const { data, isLoading } = useGetCharactersQuery({
    search: searchTerm || undefined,
    page: String(page),
  });

  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  const changePage = (newPage: number) => {
    setSearchParams({ search: searchTerm, page: String(newPage) });
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <div className='card-list'>
        {data?.results && data?.results.length > 0 ? (
          data?.results.map((item: Character) => (
            <Card key={item.url} item={item} />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>

      <div className='card-list__pagination'>
        <BaseButton onClick={() => changePage(page - 1)} disabled={page <= 1}>
          Previous
        </BaseButton>
        <div className='pagination__page-number'>
          Page {page} of {totalPages}
        </div>
        <BaseButton
          onClick={() => changePage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </BaseButton>
      </div>

      <Flyout />
    </>
  );
};

export default CardList;
