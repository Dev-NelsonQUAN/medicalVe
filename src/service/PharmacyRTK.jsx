import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pharmacyApi = createApi({
  reducerPath: 'pharmacyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7399/api/pharmacies', // Adjust base URL
  }),
  endpoints: (builder) => ({
    // Register Pharmacy
    registerPharmacy: builder.mutation({
      query: (pharmacyData) => ({
        url: '/register',
        method: 'POST',
        body: pharmacyData,
      }),
    }),

    verifyPharmacy: builder.query({
        query: (token) => `/verify/${token}`, // No need to specify GET explicitly
    }),
      

    // Login Pharmacy
    loginPharmacy: builder.mutation({
      query: (loginData) => ({
        url: '/login',
        method: 'POST',
        body: loginData,
      }),
    }),

    // Resend Verification Email
    resendVerificationEmail: builder.mutation({
      query: (emailData) => ({
        url: '/resend-verification-email',
        method: 'POST',
        body: emailData,
      }),
    }),
  }),
});

export const {
  useRegisterPharmacyMutation,
  useVerifyPharmacyMutation,
  useLoginPharmacyMutation,
  useResendVerificationEmailMutation,
} = pharmacyApi;
