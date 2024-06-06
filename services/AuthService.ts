import axios from './Axios'

interface User {
    email: string;
    token: string;
}

interface SIGNUP_REQUEST {
    email: string;
    token: string;
}

export const authService = {
    signUp: async (data: SIGNUP_REQUEST): Promise<User> => {
        return axios.post('/', data).then(res => res.data)
    },
    signIn: async (email: string, password: string): Promise<User> => {
        // Make API call to sign in user
        // Return user data upon successful signin
        return { email, token: 'fakeToken123' }; // Example response, replace with actual API call
    },
};
