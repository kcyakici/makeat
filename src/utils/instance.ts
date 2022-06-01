import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
  timeout: 15000,
  params: {
    // apiKey: process.env.API_KEY,
    apiKey: 'fc8d768de3ce4e1bb4c5983ec53c1804',
  },
});

export {instance};
