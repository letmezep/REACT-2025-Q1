import SearchBar from '../widgets/SearchBar';
import { HeaderProps } from '../../types/interfaces';

import '../../styles/search-bar.css';
import '../../styles/variables.css';

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <SearchBar />
    </>
  );
};

export default Header;
