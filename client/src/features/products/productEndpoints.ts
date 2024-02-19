import shoppingApi from '../../api/shoppingApi'

export interface ProductResponse {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number
}

const productEndpoints = shoppingApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse[], void>({
            query: () => '/product',
            transformErrorResponse: (response) => {
                console.log(response)
                return response
            },
        })
    })
})


export const { useGetProductsQuery } = productEndpoints

export default productEndpoints