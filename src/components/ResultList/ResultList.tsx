import { Component } from 'react';
import { Character, Data } from '../../services/interfaces';
import { fetchData } from '../../services/api/fetchData';

export default class ResultList extends Component {
  state: { data: Data | null; loading: boolean; error: null } = {
    data: null,
    loading: true,
    error: null,
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
    const { data, loading, error } = this.state;

    if (loading) return <p>Now is Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) {
      return <p>Now is Loading...</p>;
    }

    return (
      <>
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
