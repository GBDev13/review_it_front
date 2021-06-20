import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

export const api = axios.create({
  baseURL: 'https://review-it.gigalixirapp.com/api',
  headers: {
    Authorization: `Bearer ${cookies['reviewit.token']}`
  }
});
