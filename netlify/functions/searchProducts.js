import axios from 'axios';

const apiKey = process.env.VITE_FDA_API_KEY;

exports.handler = async function (event, context) {
    try {
        const { query } = event.queryStringParameters;
        const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&dataType=Branded&pageSize=10&sortBy=dataType.keyword&sortOrder=asc&api_key=${apiKey}`);
        
        const data = response.data;
        
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' }),
        };
    }
};
