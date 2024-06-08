import axios from './Axios'

interface User {
    email: string;
    token: string;
}

// interface SIGNUP_REQUEST {
//     email: string;
//     token: string;
// }

export const authService = {
    signUp: async (data: any): Promise<User> => {
        return axios.post('/auth/signup', data).then(res => res.data)
    },
    signIn: async (data: string): Promise<User> => {
        return axios.post('/auth/login', data).then(res => res.data)
    },
};
