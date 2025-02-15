import SearchBar from '../widgets/SearchBar';
import { HeaderProps } from '../../types.ts/interfaces';

import '../../styles/search-bar.css';
import '../../styles/variables.css';
// eslint-disable-next-line react/prop-types
const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  return (
    <>
      <SearchBar onSearchChange={onSearchChange} />
    </>
  );
};

export default Header;
