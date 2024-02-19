import shoppingApi from "../../api/shoppingApi"

export interface UserProfileResponse {
    username: string
    first: string
    last: string
}

const profileEndpoints = shoppingApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<UserProfileResponse, void>({
            query: () => '/user',
            transformErrorResponse: (response) => {
                console.log(response)
                return response
            }
        })
    })
})

export const { useGetProfileQuery } = profileEndpoints

export default profileEndpoints