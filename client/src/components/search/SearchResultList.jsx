
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";



const SearchResultList = ({ results, setResults, setSearchQuery }) => {
    const router = useRouter()
    const handleSubmit = (value) => {
        setSearchQuery("")
        router.push(`/product/${value}`);
        setResults([])

    }

    return (
        <div className="flex flex-col shadow-[0px 0px 8px] shadow-[#0d0909] rounded-[10px] bg-white w-full overflow-y-auto  max-h-60">
            {results?.map((result, id) => {
                return <div onClick={(e) => handleSubmit(result?.url_title)}>
                    <SearchResult result={result} />
                </div>
            })}
        </div>
    );
};

export default SearchResultList;