import { HeaderProps } from '../types/interfaces';
import SearchBar from './widgets/SearchBar';

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  return (
    <>
      <div>
        {/* <FilterMenu /> */}
        <SearchBar onSearchChange={onSearchChange} />
      </div>
    </>
  );
};

export default Header;
