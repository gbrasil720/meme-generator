import axios from 'axios'

export const imgflipAPI = axios.create({
  baseURL: 'https://api.imgflip.com',
})
