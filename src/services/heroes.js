import { API_HOST } from '../constants/constants';
import Axios from 'axios';

const heroesService = {
    getHeroByname(name) {
        return Axios.get(`${API_HOST}/search/${name}`)
        .then(res => res.data)
    }
}

export default heroesService;