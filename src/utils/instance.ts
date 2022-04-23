import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
  timeout: 15000,
  params: {
    // apiKey: process.env.API_KEY,
  },
});

export {instance};
