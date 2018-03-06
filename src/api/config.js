import axios from 'axios'

const api = axios.create();
api.defaults.baseURL = '/api';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

export default api;