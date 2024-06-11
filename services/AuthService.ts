import axios from './Axios'

interface User {
    user: any;
    token: string;
}

// interface SIGNUP_REQUEST {
//     email: string;
//     token: string;
// }

export const authService = {
    signUp: async (data: any): Promise<User> => {
        return axios.post('/auth/signup', data)
            .then((res) => {
                console.log("frfrf",res);
                return res.data;
            })
            .catch((error) => {
                throw error; 
            });
    },
    signIn: async (data: string): Promise<User> => {
        return axios.post('/auth/login', data) .then((res) => {
            console.log("frfrf",res);
            return res.data;
        })
        .catch((error) => {
            throw error; 
        });
    },
    updateProfile: async (data: string): Promise<User> => {
        return axios.put('/auth/profile', data).then(res => res.data)
    },
};
