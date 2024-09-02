export const getSearchProducts = async(value) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/search?q=${value}`,
     {
       cache: "no-store",
     });
     return res.json();
   } catch (error) {
     console.error(error)
   }
};
