import { useRouter } from 'next/router';
import Details from '../../components/widgets/Details';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') return <p>Loading...</p>;

  return <Details characterId={id} />;
};

export default DetailsPage;
