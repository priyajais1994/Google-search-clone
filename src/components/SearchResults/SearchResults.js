import SearchResult from "../SearchResult/SearchResult";


const SearchResults = ({results})=>{

    console.log(results.items);

    return <div>
        {
            results.items.map((item)=>{

                return <SearchResult item={item}/>
            })
        }
    </div>

}
export default SearchResults;