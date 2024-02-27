import axios from 'axios';
import { AppData } from './types';

export async function getAppData(gameID: string) {
  const { data } = await axios.get<AppData>(`http://localhost:3000/app/${gameID}`);
  return data;
}
