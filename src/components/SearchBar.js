import {
    SearchBarWrapper,
    SearchBarInput
} from './SearchBar.styles';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ onSearchChange }) => {

    return (
        <SearchBarWrapper>
            <BsSearch />
            <SearchBarInput
                placeholder="Search by main skill"
                onChange={onSearchChange}/>
        </SearchBarWrapper>
    );
}

export default SearchBar;