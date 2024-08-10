import axios from 'axios';
import getEndpoint from '../url/getEndpoint.js';

/**
 * Fetches data from the given URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} The fetched data.
 * @throws {Error} If the request fails.
 */
export default async function getData(endpoint) {

  const baseApiUrl = process.env.SPACEX_BASE_API_URL || "https://api.spacexdata.com"
  const baseApiVersion = process.env.SPACEX_BASE_API_VERSION || "v4"
  const apiUrl = `${baseApiUrl}/${baseApiVersion}`

  const url = getEndpoint(apiUrl, endpoint);
  console.log('GET ', {url});

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Request failed with status code ${error.response?.status || 500}`);
  }
}
