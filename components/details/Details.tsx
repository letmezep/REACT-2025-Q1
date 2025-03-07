import { useRouter } from 'next/router';
// import { useGetCharacterByIdQuery } from '@/api/starWarsApi';
// import BaseButton from '@/components/ui/BaseButton';
import BaseButton from '../ui/BaseButton';
import { useGetCharacterByIdQuery } from '../api/starWarsApi';

// import '@/styles/details.css';

interface DetailsProps {
  characterId: string;
}

const Details: React.FC<DetailsProps> = ({ characterId }) => {
  const router = useRouter();
  const { data, error, isLoading } = useGetCharacterByIdQuery(characterId, {
    skip: !characterId,
  });

  const handleClick = () => {
    router.push('/');
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching character data.</p>;

  return (
    <div className="details-panel">
      <BaseButton className="details__close-button" onClick={handleClick}>
        Close X
      </BaseButton>

      <h2 className="details__name">{data?.name}</h2>
      <div className="details__height">Height: {data?.height}</div>
      <div className="details__mass">Mass: {data?.mass}</div>
      <div className="details__skin_color">Skin Color: {data?.skin_color}</div>
      <div className="details__birth_year">Birth Year: {data?.birth_year}</div>
    </div>
  );
};

export default Details;


// import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
// import BaseButton from '../ui/BaseButton';
// import { useGetCharacterByIdQuery } from '../api/starWarsApi';

// // import '@/styles/details.css';

// interface DetailsProps {
//   id: string;
// }

// const Details: React.FC<DetailsProps> = ({ id }) => {
//   const router = useRouter();
//   const { data, error, isLoading } = useGetCharacterByIdQuery(id, { skip: !id });

//   const handleClose = () => {
//     router.push('/');
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching character data.</p>;

//   return (
//     <div className="details-panel">
//       <BaseButton className="details__close-button" onClick={handleClose}>
//         Close X
//       </BaseButton>

//       <h2 className="details__name">{data?.name}</h2>
//       <div className="details__height">Height: {data?.height}</div>
//       <div className="details__mass">Mass: {data?.mass}</div>
//       <div className="details__skin_color">Skin Color: {data?.skin_color}</div>
//       <div className="details__birth_year">Birth Year: {data?.birth_year}</div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params as { id: string };
//   return { props: { id } };
// };

// export default Details;


// // import { useParams, useNavigate, useSearchParams } from 'react-router';
// // import { useGetCharacterByIdQuery } from '../api/starWarsApi';
// // import BaseButton from '../ui/BaseButton';
// // import { useRouter } from 'next/router';

// // // import '../../styles/details.css';

// // const Details = () => {
// //   const { id } = useParams<{ id?: string }>();
// //   const { data, error, isLoading } = useGetCharacterByIdQuery(id ?? '', {
// //     skip: !id,
// //   });
// //   // const [searchParams] = useSearchParams();
// //   const router = useRouter();
// //   const page = Number(searchParams.get('page')) || 1;
// //   // const page = Number(router.get('page'));
// //   const navigate = useNavigate();

// //   const handleClick = () => {
// //     navigate(`/?page=${page}`);
// //   };

// //   if (isLoading) return <p>Loading...</p>;
// //   if (error) return <p>Error fetching character data.</p>;

// //   return (
// //     <div className="details-panel">
// //       <BaseButton className="details__close-button" onClick={handleClick}>
// //         Close X
// //       </BaseButton>

// //       <h2 className="details__name">{data?.name}</h2>

// //       <div className="details__height">Height: {data?.height}</div>
// //       <div className="details__mass">Mass: {data?.mass}</div>
// //       <div className="details__skin_color">Skin Color: {data?.skin_color}</div>
// //       <div className="details__birth_year">Birth Year: {data?.birth_year}</div>
// //     </div>
// //   );
// // };

// // export default Details;


// // // import React from 'react';
// // // import { useParams, useNavigate, useSearchParams } from 'react-router';
// // // import { useGetCharacterByIdQuery } from '../api/starWarsApi';
// // // import BaseButton from '../ui/BaseButton';

// // // import '../../styles/details.css';

// // // const Details: React.FC = () => {
// // //   const { id } = useParams<{ id?: string }>();
// // //   const { data, error, isLoading } = useGetCharacterByIdQuery(id ?? '', {
// // //     skip: !id,
// // //   });
// // //   const [searchParams] = useSearchParams();
// // //   const page = Number(searchParams.get('page')) || 1;
// // //   const navigate = useNavigate();

// // //   const handleClick = () => {
// // //     navigate(`/?page=${page}`);
// // //   };

// // //   if (isLoading) return <p>Loading...</p>;
// // //   if (error) return <p>Error fetching character data.</p>;

// // //   return (
// // //     <div className="details-panel">
// // //       <BaseButton className="details__close-button" onClick={handleClick}>
// // //         Close X
// // //       </BaseButton>

// // //       <h2 className="details__name">{data?.name}</h2>

// // //       <div className="details__height">Height: {data?.height}</div>
// // //       <div className="details__mass">Mass: {data?.mass}</div>
// // //       <div className="details__skin_color">Skin Color: {data?.skin_color}</div>
// // //       <div className="details__birth_year">Birth Year: {data?.birth_year}</div>
// // //     </div>
// // //   );
// // // };

// // // export default Details;
