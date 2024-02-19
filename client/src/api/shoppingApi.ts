import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

const shoppingApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).persistentAuth.token; 
            headers.set('Content-Type', 'application/json');
            if (accessToken) {
              headers.set('Authorization', `Bearer ${accessToken}`);
            }
            return headers;
          },
    }),
    endpoints: () => ({})
})

export default shoppingApi