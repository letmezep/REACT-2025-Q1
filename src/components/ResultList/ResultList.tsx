import { Component } from 'react';
import getListFromApi from '../../services/api/getApiList';
import { Character, Data } from '../../services/interfaces';

export default class ResultList extends Component {
  state: { data: Data | null } = {
    // data: localStorage.getItem('searchTerm') || 'STATE fallback term',
    data: null,
  };

  async componentDidMount(): Promise<void> {
    try {
      const response: Data = await getListFromApi();
      this.setState({ data: response });
    } catch (error) {
      console.error('Error fetch', error);
    }
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <p>Now is Loading...</p>;
    }
    return (
      <>
        {/* <p>{data.results?.[3].name || 'No results'}</p> */}

        {data.results.map((item: Character, index: number) => (
          <div className="list-item" key={index}>
            <h4>{item.name}</h4>
            <p>
              Height: {item.height} Mass: {item.mass} Hair Color:{' '}
              {item.hair_color}
            </p>
          </div>
        ))}
      </>
    );
  }
}

// import React, { useState, useEffect } from 'react';
// import getListFromApi from '../../services/api/getApiList';
// import { Character, Data } from '../../services/interfaces';

// function ResultList() {
//   const [data, setData] = useState<Data>({ results: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getListFromApi();
//       setData(result);
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="main-field__container">
//         {data.results && (
//           <div className="list-item__container">
//             {data.results.map((item: Character, index: number) => (
//               <div className="list-item" key={index}>
//                 <h4>{item.name}</h4>
//                 <p>
//                   Height: {item.height} Mass: {item.mass} Hair Color:{' '}
//                   {item.hair_color}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ResultList;
