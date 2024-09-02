import Image from "next/image"

const SearchResult = ({ result }) => {
    return (
        <div className="flex justify-between items-center px-3 py-2 border-b hover:bg-zinc-100 hover:cursor-pointer">
            <div className="flex justify-center items-center">
                <Image
                    src={result?.image}
                    alt="Search product image"
                    priority
                    width={700}
                    height={700}
                    className="w-10 object-contain md:aspect-square rounded-full"
                />
                <p className="pl-3">{result?.title}</p>
            </div>
            <p>{result?.price}</p>
        </div>
    )
}

export default SearchResult