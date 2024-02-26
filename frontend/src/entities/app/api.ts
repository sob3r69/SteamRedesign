import axios from 'axios';

export async function getAppData(gameID: string) {
  const { data } = await axios.get(`http://localhost:3000/app/${gameID}`);
  return data;
}
