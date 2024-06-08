import axios from './Axios'

interface Community {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export const communityService = {
    get: async (): Promise<Community[]> => {
        return axios.get('/communities').then(res => res.data)
    },
};
