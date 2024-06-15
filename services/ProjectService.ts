import axios from './Axios'


export const projectService = {
    get: async (): Promise<any> => {
        return axios.get('/project').then(res => res.data)
    },
    save: async (data: any): Promise<any> => {
        return axios.post('/project', data).then(res => res.data)
    },
};
