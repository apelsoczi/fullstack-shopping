import { createEntityAdapter } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface LoginResponse {
    token: string
}

export interface LoginCredentials {
    username: string
    password: string
}

const authApi = createApi({
    reducerPath: 'apiAuth',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL + '/auth' }),
    endpoints: (builder) => ({
        postLogin: builder.mutation<LoginResponse, LoginCredentials>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        })
    })
})

export const { usePostLoginMutation } = authApi

export default authApi