import { Component } from 'react';
import { Character, State } from '../../services/interfaces';
import { fetchData } from '../../services/api/fetchData';
import { getFilteredData } from '../../services/filterData';

export default class ResultList extends Component<
  { searchTerm: string },
  State
> {
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

  componentDidUpdate(prevProps: Readonly<{ searchTerm: string }>): void {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({ searchTerm: this.props.searchTerm });
    }
  }

  render() {
    const { data, loading, error, searchTerm } = this.state;
    const filteredData = getFilteredData(data, searchTerm);

    if (loading)
      return (
        <div className="loader-container">
          <div className="loader"></div>
          <p>
            <span className="logo-name">STARWARS</span> is now loading...
          </p>
        </div>
      );
    if (error) return <p>{error}</p>;
    if (!data) {
      return <p>Now is Loading...</p>;
    }

    return (
      <>
        {filteredData.map((item: Character, index: number) => (
          <div className="list-item" key={index}>
            <div className="list-item__name">{item.name}</div>
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
