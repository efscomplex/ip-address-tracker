import axios from 'axios'
exports.handler = async function(event, context, callback) {
   
   const API_URL = `https://geo.ipify.org/api/v1`
   const { domain } = event.queryStringParameters
   const response = await axios.get(
      `${API_URL}?apiKey=${process.env.API_KEY}&domain=${domain}`,
   )
   callback(null, {
      statusCode: 200,
      body: response.data
   });

}