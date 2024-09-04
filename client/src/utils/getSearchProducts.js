export const getSearchProducts = async(value) => {
    try {
        const res = await fetch(`https://food-grain-server.onrender.com/api/search?q=${value}`,
     {
       cache: "no-store",
     });
     return res.json();
   } catch (error) {
     console.error(error)
   }
};
