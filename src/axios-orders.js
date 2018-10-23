import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-project-8b2b5.firebaseio.com/'
});

export default instance;