import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../../app/store"

export interface UserProfileResponse {
    username: string
    first: string
    last: string
}

const profileApi = createApi({
    reducerPath: 'apiProfile',
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.REACT_APP_API_URL + '/user',
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).persistentAuth.token; 
            headers.set('Content-Type', 'application/json');
            if (accessToken) {
              headers.set('Authorization', `Bearer ${accessToken}`);
            }
            return headers;
          },
    }),
    endpoints: (builder) => ({
        getProfile: builder.query<UserProfileResponse, void>({
            query: () => '/',
            transformErrorResponse: (response) => {
                console.log(response)
                return response
            }
        })
    })
})

export const { useGetProfileQuery } = profileApi 

export default profileApi