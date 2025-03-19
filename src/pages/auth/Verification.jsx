import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useVerifyUserQuery } from '../../service/UserRTK';
import Swal from 'sweetalert2';

const Verification = () => {
    const location = useLocation();
    const Nav = useNavigate();

    // const query = new URLSearchParams(location.search);
    // const token = query.get('token');
    const { token } = useParams()

    console.log(token)
    const { data, error, isLoading, isSuccess } = useVerifyUserQuery(token);

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (data) {
    //             console.log('User verified successfully', data);
    //             Swal.fire({
    //                 title: 'Verified!',
    //                 text: 'Your email has been verified successfully. You can now log in.',
    //                 icon: 'success',
    //                 confirmButtonText: 'Okay',
    //             }).then(() => {
    //                 Nav('/login');
    //             });
    //         }

    //         if (error) {
    //             console.log(error)
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'Verification failed. Please check your link or try again later.',
    //                 icon: 'error',
    //                 confirmButtonText: 'Try Again',
    //             });
    //         }
    //     }, 1000); 
    // }, []);
    console.log(data)
    console.log(error)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isSuccess) {
        Nav("/login")
    }

    return (
        <div className='flex justify-center item-center'>
            {isLoading ? (
                <h1>Verifying...</h1>
            ) : (
                <h1>Verification In Progress...</h1>
            )}
        </div>
    );
};

export default Verification;



// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useVerifyUserQuery } from '../../service/UserRTK';
// import Swal from 'sweetalert2';

// const Verification = () => {
//     const location = useLocation();
//     const Nav = useNavigate();

//     const query = new URLSearchParams(location.search);
//     const token = query.get('token');

//     const { data, error, isLoading } = useVerifyUserQuery(token, {
//         skip: !token,
//     });

//     useEffect(() => {
//         setTimeout(() => {
//             if (data) {
//                 console.log('User verified successfully', data);
//                 Swal.fire({
//                     title: 'Verified!',
//                     text: 'Your email has been verified successfully. You can now log in.',
//                     icon: 'success',
//                     confirmButtonText: 'Okay',
//                 }).then(() => {
//                     Nav('/login');
//                 });
//             }

//             if (error) {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Verification failed. Please check your link or try again later.',
//                     icon: 'error',
//                     confirmButtonText: 'Try Again',
//                 });
//             }
//         }, 1000);
//     }, [data, error, Nav]);


//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             {isLoading ? (
//                 <h1>Verifying...</h1>
//             ) : (
//                 <h1>Verification In Progress...</h1>
//             )}
//         </div>
//     );
// };

// export default Verification;








// // import React, { useEffect } from 'react'
// // import { useLocation, useNavigate } from 'react-router-dom'
// // import { useVerifyUserQuery } from '../../service/UserRTK'

// // const Verification = () => {
// //     // const dispatch = useDispatch()
// //     const location = useLocation()
// //     const Nav = useNavigate()

// //     const query = new URLSearchParams(location.search)
// //     const token = query.get('token')

// //     const {data, error, isLoading} = useVerifyUserQuery(token, {
// //         skip: !token
// //     })

// //     useEffect(() => {

// //         if (data) {
// //             console.log("User verified successfully", data)
// //             Nav("/login")
// //         }
// //     }, [data, Nav])

// //     if (isLoading) {
// //         return <div>loading... </div>
// //     }

// //     if (error) {
// //         return <div>Error: {error.message}</div>
// //     }
// //     return (
// //         <div>
// //             {data ? (
// //                 <h1> Verification Successsful!!! </h1>

// //             ) : (
// //                 <h1>Verifying...</h1>
// //             )}

// //         </div>
// //     )
// // }

// // export default Verification