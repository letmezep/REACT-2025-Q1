import { Component } from 'react';
import { Character, State } from '../../services/interfaces';
import { fetchData } from '../../services/api/fetchData';
import { getFilteredData } from '../../services/filterData';

export default class ResultList extends Component {
  state: State = {
    data: null,
    loading: true,
    error: null,
    searchTerm: localStorage.getItem('searchTerm') || '',
  };

  async componentDidMount(): Promise<void> {
    const data = await fetchData();
    if (data) {
      this.setState({ data, loading: false });
    } else {
      this.setState({ error: 'failed to load FETCHDATA', loading: false });
    }
  }

  render() {
    const { data, loading, error, searchTerm } = this.state;
    const filteredData = getFilteredData(data, searchTerm);
    // const filteredData = this.getFilteredData();

    if (loading) return <p>Now is Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) {
      return <p>Now is Loading...</p>;
    }

    return (
      <>
        {filteredData.map((item: Character, index: number) => (
          <div className="list-item" key={index}>
            <h4>{item.name}</h4>
            <p>
              Height: {item.height} Mass: {item.mass} Hair Color:{' '}
              {item.hair_color}
            </p>
          </div>
        ))}
        {/* {data.results.map((item: Character, index: number) => (
          <div className="list-item" key={index}>
            <h4>{item.name}</h4>
            <p>
              Height: {item.height} Mass: {item.mass} Hair Color:{' '}
              {item.hair_color}
            </p>
          </div>
        ))} */}
      </>
    );
  }
}
