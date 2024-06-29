import axios from './Axios'


export const fileService = {
    folders: async (): Promise<any> => {
        return axios.get('/folder').then(res => res.data)
    },
    filesByFolders: async (id: string): Promise<any> => {
        return axios.get(`/folder/${id}`).then(res => res.data)
    },
};
