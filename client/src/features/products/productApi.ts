import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ProductResponse {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number
}

const productApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL + '/product' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse[], void>({
            query: () => '/',
            transformErrorResponse: (response) => {
                console.log(response)
                return response
            },
        })
    })
})


export const { useGetProductsQuery } = productApi

export default productApi