import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useSignUpUserMutation } from '../../service/UserRTK';
import { useResendVerificationEmailMutation } from '../../service/UserRTK'; 
import Input from '../../ui/Input';
import Btn from "../../ui/Btn";
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa';
import Spinner from '../../ui/Spinner';
import signupSvg from '../../assets/doctorvector.png';

const SignUp = () => {
  const Nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match ').required('Confirm Password is required')
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const [signUpUser, { isLoading: isSignUpLoading }] = useSignUpUserMutation();
  const [resendVerificationEmail] = useResendVerificationEmailMutation(); 

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signUpUser(data).unwrap();
      
      await resendVerificationEmail({ email: data.email });  
      
      Swal.fire({
        title: 'Success!',
        text: 'You have signed up successfully. A verification email has been sent.',
        icon: 'success',
        confirmButtonText: 'Okay'
      });

    //   Nav('/check-email');
      Nav('/login');
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Signup failed, Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='flex lg:h-[100vh]'>
      <div className='bg-blue-600 w-[100%] flex p-2 max-[769px]:hidden flex-col'>
        <h1 className='text-white font-bold mt-2 ml-10'>MedGet</h1>
        <div className='flex justify-center mt-25'>
          <img className='transform scale-x-[-1]' src={signupSvg} alt="Sign Up SVG" />
        </div>
      </div>

      <div className='bg-white w-[100%] h-[100vh] flex justify-center items-center max-[576px]:px-10 max-[321px]:px-5'>
        <form className='shadow-2xl lg:px-[50px] lg:py-[40px] max-[769px]:p-[40px] max-[576px]:p-[25px] rounded-[5px]' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-bold lg:text-[40px] max-[769px]:text-[35px] max-[576px]:text-[25px] flex justify-self-center leading-8 max-[321px]:text-[24px]'>Create an account</h1>

          <div className='mt-6 mb-4'>
            <Controller
              name='fullname'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Chinedu Nelson"
                  labelText='Fullname'
                  htmlFor='Fullname'
                  name='fullname'
                  type='text'
                  rounded='rounded-[5px]'
                  w='w-full'
                  p='p-2.5'
                  outline='outline-blue-600'
                  border='border-1'
                  borderCol='border-gray-600'
                />
              )}
            />
            {errors.fullname && <div className='text-sm text-red-500'> {errors.fullname.message} </div>}
          </div>

          <div className='mt-4 mb-4'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="chinelz@gmail.com"
                  labelText='Email'
                  htmlFor='Email'
                  name='email'
                  type='email'
                  rounded='rounded-[5px]'
                  w='w-full'
                  p='p-2.5'
                  outline='outline-blue-600'
                  border='border-1'
                  borderCol='border-gray-600'
                />
              )}
            />
            {errors.email && <div className='text-sm text-red-500'> {errors.email.message} </div>}
          </div>

          <div className='mt-4 mb-4'>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="********"
                  labelText='Password'
                  htmlFor='Password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  rounded='rounded-[5px]'
                  w='w-full'
                  p='p-2.5'
                  pl='20'
                  outline='outline-blue-600'
                  border='border-1'
                  borderCol='border-gray-600'
                  icon={showPassword ? (
                    <FaEye onClick={handleShowPassword} />
                  ) : (
                    <FaEyeSlash onClick={handleShowPassword} />
                  )}
                />
              )}
            />
            {errors.password && <div className='text-red-500 text-sm'> {errors.password.message} </div>}
          </div>

          <div className='mt-4 mb-4'>
            <Controller
              name='confirmPassword'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="**********"
                  labelText='Confirm Password'
                  htmlFor='Confirm Password'
                  name='confirmPassword'
                  type={showPassword ? 'text' : 'password'}
                  rounded='rounded-[5px]'
                  w='w-full'
                  p='p-2.5'
                  outline='outline-blue-600'
                  border='border-1'
                  borderCol='border-gray-600'
                  icon={showPassword ? (
                    <FaEye onClick={handleShowPassword} />
                  ) : (
                    <FaEyeSlash onClick={handleShowPassword} />
                  )}
                />
              )}
            />
            {errors.confirmPassword && <div className='text-red-500 text-sm'> {errors.confirmPassword.message} </div>}
          </div>

          <Btn
            type='submit'
            btnText={loading ? <><Spinner size='1.5em' color='white' borderWidth='0.3em'  /></> : "Create Account"}
            bg='bg-blue-600'
            color='text-white'
            px={loading ? "lg:px-49": 'lg:px-35 max-[769px]:px-35 max-[576px]:px-13.5 max-[321px]:px-12'}
            fontWeight='font-bold'
            py='py-2.5'
            // width=
            mt='mt-6'
            hoverBg='hover:bg-blue-700'
            disabled={loading}
          />

          <p className='flex justify-self-center mt-4 text-gray-600 max-[576px]:text-[10px] max-[576px]:text-center'>
            Already have an account? <span className='pl-1 flex items-center text-blue-600 font-bold cursor-pointer hover:underline' onClick={() => Nav('/login')}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import Input from '../../ui/Input';
// import Btn from "../../ui/Btn";
// import * as Yup from 'yup';
// import { Controller, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import signupSvg from '../../assets/doctorvector.png'
// import { FaEye } from 'react-icons/fa6';
// import { FaEyeSlash } from 'react-icons/fa';
// import Spinner from '../../ui/Spinner';
// import Swal from 'sweetalert2';
// import { useSignUpUserMutation } from '../../service/UserRTK';

// const SignUp = () => {
//     const Nav = useNavigate();
//     const [loading, setLoading] = useState(false)
//     const [showPassword, setShowPassword] = useState(false)

//     const validationSchema = Yup.object().shape({
//         fullname: Yup.string().required('Fullname is required'),
//         email: Yup.string().email('Invalid email address').required('Email is required'),
//         password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
//             .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//             .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//             .matches(/\d/, 'Password must contain at least one number')
//             .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
//         confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match ').required('Confirm Password is reuired')
//     })

//     const { control, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(validationSchema)
//     })

//     const [signUpUser, {isLoading: isSignUpLoading, isError, error}] = useSignUpUserMutation

//     const onSubmit = async (data) => {
//         setLoading(true)
//         console.log('Form submitted with data:', data)
//         try {
//             await signUpUser(data).unwrap()
//             // toast.success("Successfully Signed up")
//             Swal.fire({
//                 title: 'Success!',
//                 text: 'You have signed up successfully.',
//                 icon: 'success',
//                 confirmButtonText: 'Okay'
//             });
//             console.log(data)
//             Nav('/login')
//         }
//         catch (err) {
//             // toast.error('Signup failed, Please try again')
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Signup failed, Please try again.',
//                 icon: 'error',
//                 confirmButtonText: 'Okay'
//             });
//         }
//         finally {
//             setLoading(false)
//         }
//     }

//     const handleShowPassword = () => {
//         setShowPassword((prev) => !prev)
//     }

//     return (
//         <div className='flex lg:h-[100vh]'>
//             <div className='bg-blue-600 w-[100%] 
//             flex p-2
//             max-[769px]:hidden flex-col'>
//                 <h1 className='text-white font-bold mt-2 ml-10'>MedGet</h1>
//                 <div className='flex justify-center mt-25'>
//                     <img
//                         className='transform scale-x-[-1]'
//                         src={signupSvg} alt="Sign Up SVG" />
//                 </div>
//             </div>

//             <div className='bg-white w-[100%] h-[100vh] flex justify-center items-center max-[576px]:px-10 max-[321px]:px-5'>
//                 <form className='shadow-2xl lg:px-[50px] lg:py-[40px] max-[769px]:p-[40px] max-[576px]:p-[25px] rounded-[5px]' onSubmit={handleSubmit(onSubmit)}>
//                     <h1 className='font-bold lg:text-[40px] max-[769px]:text-[35px] max-[576px]:text-[25px] flex justify-self-center leading-8 max-[321px]:text-[24px]'> Create an account </h1>

//                     <div className='mt-6 mb-4'>
//                         <Controller
//                             name='fullname'
//                             control={control}
//                             render={({ field }) => (
//                                 <Input
//                                     {...field}
//                                     placeholder="Chinedu Nelson"
//                                     labelText='Fullname'
//                                     htmlFor='Fullname'
//                                     name='fullname'
//                                     type='text'
//                                     rounded='rounded-[5px]'
//                                     w='w-full'
//                                     p='p-2.5'
//                                     outline='outline-blue-600'
//                                     border='border-1'
//                                     borderCol='border-gray-600'
//                                 />
//                             )}
//                         />
//                         {errors.fullname && <div className='text-sm text-red-500'> {errors.fullname.message} </div>}
//                     </div>

//                     <div className='mt-4 mb-4'>
//                         <Controller
//                             name='email'
//                             control={control}
//                             render={({ field }) => (
//                                 <Input
//                                     {...field}
//                                     placeholder="chinelz@gmail.com"
//                                     labelText='Email'
//                                     htmlFor='Email'
//                                     name='email'
//                                     type='email'
//                                     rounded='rounded-[5px]'
//                                     w='w-full'
//                                     p='p-2.5'
//                                     outline='outline-blue-600'
//                                     border='border-1'
//                                     borderCol='border-gray-600'
//                                 />
//                             )}
//                         />
//                         {errors.email && <div className='text-sm text-red-500'> {errors.email.message} </div>}
//                     </div>

//                     <div className='mt-4 mb-4 '>
//                         <Controller
//                             name='password'
//                             control={control}
//                             render={({ field }) => (
//                                 <Input
//                                     {...field}
//                                     placeholder="********"
//                                     labelText='Password'
//                                     htmlFor='Password'
//                                     name='password'
//                                     type={showPassword ? 'text' : 'password'}
//                                     rounded='rounded-[5px]'
//                                     w='w-full'
//                                     p='p-2.5'
//                                     pl='20'
//                                     outline='outline-blue-600'
//                                     border='border-1'
//                                     borderCol='border-gray-600'
//                                     icon={
//                                         showPassword ? (
//                                             <FaEye
//                                                 onClick={handleShowPassword}
//                                             />
//                                         ) : (
//                                             <FaEyeSlash onClick={handleShowPassword} />
//                                         )
//                                     }
//                                 />

//                             )}
//                         />

//                         {errors.password && <div className='text-red-500 text-sm'> {errors.password.message} </div>}
//                     </div>

//                     <div className='mt-4 mb-4'>
//                         <Controller
//                             name='confirmPassword'
//                             control={control}
//                             render={({ field }) => (
//                                 <Input
//                                     {...field}
//                                     placeholder="**********"
//                                     labelText='Confirm Password'
//                                     htmlFor='Confirm Password'
//                                     name='confirmPassword'
//                                     type={showPassword ? 'text' : 'password'}
//                                     rounded='rounded-[5px]'
//                                     w='w-full'
//                                     p='p-2.5'
//                                     outline='outline-blue-600'
//                                     border='border-1'
//                                     borderCol='border-gray-600'
//                                     icon={
//                                         showPassword ? (
//                                             <FaEye
//                                                 onClick={handleShowPassword} />
//                                         ) : (
//                                             <FaEyeSlash
//                                                 onClick={handleShowPassword}
//                                             />
//                                         )
//                                     }
//                                 />
//                             )}
//                         />
//                         {errors.confirmPassword && <div className='text-red-500 text-sm'> {errors.confirmPassword.message} </div>}
//                     </div>


//                     <Btn
//                         type='submit'
//                         btnText={loading ? <><Spinner size='1.5em' color='white' borderWidth='0.3em' /></> : "Create Account"}
//                         bg='bg-blue-600'
//                         color='text-white'
//                         px='lg:px-35 max-[769px]:px-35 max-[576px]:px-20.5 max-[321px]:px-13'
//                         fontWeight='font-bold'
//                         py='py-2.5'
//                         mt='mt-6'
//                         disabled={loading}
//                     // bg='bg-primary'
//                     />
//                     <p className='flex justify-self-center mt-4 text-gray-600 max-[576px]:text-[10px] max-[576px]:text-center'> Already have an account? <span className='pl-1 flex items-center text-blue-600 font-bold cursor-pointer hover:underline' onClick={() => Nav('/login')}>Login</span> </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUp;



















// // ### Explanation of the Code

// // - **Validation Schema**: The `Yup.object().shape()` method is used to define the validation rules for each field in the form. Each field has specific requirements, such as being required or having a minimum length.

// // - **Controller Component**: The `Controller` component from React Hook Form is used to wrap the input fields. This allows you to integrate controlled components with the form state management.

// // - **Error Handling**: Each input field checks for errors and displays an error message if validation fails. This enhances user experience by providing immediate feedback.

// // - **Form Submission**: The `onSubmit` function handles the form submission. It logs the form data and can be modified to include API calls or other actions as needed.

// // ### Conclusion

// // This setup provides a robust way to handle forms in React using React Hook Form and Yup for validation. It minimizes boilerplate code while ensuring that your forms are easy to manage and validate.