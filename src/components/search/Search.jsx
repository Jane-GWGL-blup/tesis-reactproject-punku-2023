import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

const Search= () => {
    return (
        <div className="search">
            <SearchIcon className='icon'/>
            <input type="text" placeholder='Buscar ...' />
        </div>
    )
}

export default Search;