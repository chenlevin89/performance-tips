const API_URL = 'http://localhost:8088/preflight';

class PreflightService {

    get(){
        return fetch(API_URL, {headers:{authorization: 'custom auth...'}})
    }
}

export default new PreflightService();