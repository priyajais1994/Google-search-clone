import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function SearchBar({searchValue, onSearchFieldChange, onSearchSubmit}){

    return  <form onSubmit={onSearchSubmit} style={{minWidth:"800px"}} className='d-flex justify-content-center m-2'>

          <SearchIcon className='m-2'/>
          <input value={searchValue} onChange={onSearchFieldChange} type = "text" style={{ borderRadius: "15px", width:"100%"}}/>
          <MicIcon className='m-2'/>

          </form>

}
export default SearchBar;

