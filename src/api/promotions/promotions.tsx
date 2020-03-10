import axios from 'axios';
import config from '../../config';

export default axios.create({
    baseURL: 'https://localhost:3000/hotel/home/promotions'
});