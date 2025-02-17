import SearchBar from '../widgets/SearchBar';
import { HeaderProps } from '../../types/interfaces';

import '../../styles/search-bar.css';
import '../../styles/variables.css';

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  return (
    <>
      <SearchBar onSearchChange={onSearchChange} />
    </>
  );
};

export default Header;
