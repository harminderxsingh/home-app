import axios from './Axios'


export const loanService = {
    getLoan: async (): Promise<any> => {
        return axios.get('/loan').then(res => res.data)
    },
    updateLoan: async (data: any): Promise<any> => {
        return axios.post('/loan', data).then(res => res.data)
    },
};
