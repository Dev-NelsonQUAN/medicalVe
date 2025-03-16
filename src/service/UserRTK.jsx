import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7349/api',
    }),

    reducerPath: 'userApi',
    tagTypes: ['user'],
    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (body) => ({
                url: '/user/createUser',
                method: 'POST',
                body
            }),
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body
            })
        }),
        verifyUser: builder.query({
            query: (token) => ({
                url: `/user/verify?token=${token}`,
                method: 'GET',
                body
            })
        }),
        resendVerificationEmail: builder.mutation({
            query: (email) => ({
              url: '/user/resend-verification-email',
              method: 'POST',
              body: { email }
            }),
          }),
    })
})

export const { useSignUpUserMutation, useLoginUserMutation, useVerifyUserQuery, useResendVerificationEmailMutation } = userSlice