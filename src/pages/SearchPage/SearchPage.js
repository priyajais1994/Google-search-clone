import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getResults } from "../../api/googleSearch";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Spinner } from "react-bootstrap";
import SearchResults from "../../components/SearchResults/SearchResults";


function SearchPage()

{
    const location = useLocation();
    console.log(location);

    const searchValue = new URLSearchParams(location.search).get("query");
    console.log(searchValue);

    const [results, setResults] = useState(null);

    const fetchResults = async()=>{

        const results = await getResults(searchValue);
        setResults(results);
        console.log(results.items);
    }

    useEffect(()=>{
        fetchResults();
    }, [])

    return <div className="d-flex flex-column justify-content-center align-items-center mx-2 my-3">

        <div>
            <img src= "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height={"50px"}/>
        </div>
        <SearchBar searchValue={searchValue}/>

        <div className="my-5">
            {
                !results && <Spinner/>
            }
            
            {
                results && <SearchResults results={results}/>
            }


        </div>
    </div>
}
export default SearchPage;