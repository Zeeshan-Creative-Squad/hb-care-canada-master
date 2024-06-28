import axios from 'axios';
import { showAlertMessage } from '../MasterComponents/CommonFunctionalities';

const SystemApiCallSettings = async (method = 'GET', endpoint = '', userDetails = {}, userType = true, data = {}, contentType = 'application/json') => {
    try {
        if (!endpoint) {
            throw new Error('API endpoint missing!');
        }

        const config = {
            headers: {
                'Content-Type': contentType,
            }
        };
        
        if (userDetails.token) {
            config.headers.Authorization = `Bearer ${userDetails.token}`;
        }

        if (userType && userDetails.user_type_id) {
            endpoint += endpoint.includes('?') ? `&user_type=${userDetails.user_type_id}` : `?user_type=${userDetails.user_type_id}`;
        }

        let response;
        switch (method.toUpperCase()) {
            case 'GET':
                response = await axios.get(`${endpoint}`, config);
                break;
            case 'POST':
                response = await axios.post(`${endpoint}`, data, config);
                break;
            case 'PUT':
                response = await axios.put(`${endpoint}`, data, config);
                break;
            case 'DELETE':
                response = await axios.delete(`${endpoint}`, config);
                break;
            default:
                throw new Error('Unsupported HTTP method!');
        }

        return response.data;
    } catch (error) { 
        if(error?.response?.data){
            showAlertMessage(error?.response?.data?.message, 'fail');
        }
    }
};

export default SystemApiCallSettings; 