import shoppingApi from '../../api/shoppingApi'

export interface LoginResponse {
    token: string
}

export interface LoginCredentials {
    username: string
    password: string
}

const authEndpoints = shoppingApi.injectEndpoints({
    endpoints: (builder) => ({
        postLogin: builder.mutation<LoginResponse, LoginCredentials>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        })
    })
})

export const { usePostLoginMutation } = authEndpoints

export default authEndpoints