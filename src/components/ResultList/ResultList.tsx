import { Component } from 'react';
import { Character, State } from '../../types.ts/interfaces';
import { fetchData } from '../../services/api/fetchData';
import { getFilteredData } from '../../services/filterData';
import { localStorageItem } from '../../constants';
import '../../styles/ResultList.css';
import '../../styles/variables.css';

export default class ResultList extends Component<
  { searchTerm: string },
  State
> {
  state: State = {
    data: null,
    loading: true,
    searchTerm: localStorageItem,
  };

  async componentDidMount(): Promise<void> {
    const data = await fetchData();
    if (data) {
      this.setState({ data, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps: Readonly<{ searchTerm: string }>): void {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({ searchTerm: this.props.searchTerm });
    }
  }

  render() {
    const { data, loading, searchTerm } = this.state;
    const filteredData = getFilteredData(data, searchTerm);

    if (loading || !data)
      return (
        <div className="loader-container">
          <div className="loader"></div>
          <p>
            <span className="logo-name">STARWARS</span> is now loading...
          </p>
        </div>
      );

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
