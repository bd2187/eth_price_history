import axios from 'axios';

const endpoint = 'https://etherchain.org/api/statistics/price';

async function fetchData() {
  try {
    const data = await axios.get(endpoint);
    return data;
  } catch (err) {
    return err;
  }
}

export default fetchData;
