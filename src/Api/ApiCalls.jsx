import axios from 'axios'

export const signup = (body) => {
    return axios.post('/users',body);
};
