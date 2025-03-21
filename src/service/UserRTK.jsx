import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://medget-backend.onrender.com/api/user',
        baseUrl: 'http://localhost:7399/api/user',
    }),

    reducerPath: 'userApi',
    tagTypes: ['user'],
    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (body) => ({
                url: '/createuser',
                method: 'POST',
                body
            }),
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            })
        }),
        verifyUser: builder.query({
            query: (token) => ({
                url: `/verify?token=${token}`,
                method: 'GET'
            })
        }),
        resendVerificationEmail: builder.mutation({
            query: (email) => ({
              url: '/resend-verification-email',
              method: 'POST',
              body: { email }
            }),
          }),
    })
})

export const { useSignUpUserMutation, useLoginUserMutation, useVerifyUserQuery, useResendVerificationEmailMutation } = userSlice