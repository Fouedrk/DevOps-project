import axios from 'axios';
import { getUser } from './auth_helper';


const _callApi = (token) => {
    const headers = {
        Accept: "application/json",
        Authorization: "Bearer " + token
    };

    return axios.get("http://localhost:8888/api/product", { headers });
}

export const callApi = () => {
    return getUser().then(user => {
        if (user && user.access_token) {
            return _callApi(user.access_token).catch(error => {
                console.error(error);
            });
        }
    });
}
