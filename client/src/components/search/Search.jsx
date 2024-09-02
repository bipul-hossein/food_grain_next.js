"use client";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import SearchResultList from "./SearchResultList";
import { useRouter, useSearchParams } from "next/navigation";


const Search = () => {
    const searchParams = useSearchParams()
    const [results, setResults] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter()


    const fetchData = async (value) => {
        const data = await fetch(`http://localhost:5000/api/search?q=${value}`)
            .then((res) =>
                res.json()
            )
        setResults(data?.payload);
    };

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            console.log(searchQuery, "hjkh");
            // When you want to navigate
            router.push(`/search?q=${searchQuery}`);
            // setSearchQuery("")
            setSearchQuery(searchQuery)
            setResults([])
        } else {
            console.log("No search");
        }
    }

    const handleChange = (inputValue) => {
        setSearchQuery(inputValue);
        if (inputValue.length >= 2) {
            fetchData(inputValue)
        } else setResults([])
    }

    return (
        <div className="flex flex-col relative w-full lg:w-[450px] h-10 ">
            <form onSubmit={searchSubmitHandler} className="relative hidden lg:inline-flex w-full h-full text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md" >
                <input
                    type="text"
                    placeholder="Search in Foodgrain"
                    className="w-full h-full outline-none bg-transparent placeholder:text-gray-600"
                    onChange={(e) => handleChange(e.target.value)}
                    value={searchQuery}
                // defaultValue={searchQuery ? searchQuery : searchParams.get('q')?.toString()}
                />
                {searchQuery ? (
                    <IoCloseOutline
                        onClick={() => { setSearchQuery(""), setResults([]) }}
                        className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
                    />
                ) : (
                    <FaSearch className="w-5 h-5 hover:cursor-pointer" />
                )}
            </form>
            <div className="absolute top-10 w-full" >
                <SearchResultList results={results} setResults={setResults} setSearchQuery={setSearchQuery} />
            </div>
        </div>
    );
};

export default Search;