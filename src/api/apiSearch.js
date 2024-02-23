export async function searchProducts(query) {
    console.log(query);
    try {
        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&dataType=Branded&pageSize=10&sortBy=dataType.keyword&sortOrder=asc&api_key=${import.meta.env.VITE_FDA_API_KEY}`, {
            method: "GET",
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
