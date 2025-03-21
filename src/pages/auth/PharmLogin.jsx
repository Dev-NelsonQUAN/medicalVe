import React, { useState } from 'react'
import Btn from '../../ui/Btn'
import Input from '../../ui/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import loginSvg from '../../assets/doctorvector.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import Spinner from '../../ui/Spinner'
import Swal from 'sweetalert2';
import { useLoginPharmacyMutation } from '../../service/PharmacyRTK'



const PharmLogin = () => {
    const Nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [loginPharmacy, { isLoading }] = useLoginPharmacyMutation();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = async (data) => {
        try {
            const res = await loginPharmacy(data).unwrap();
            
            Swal.fire({
                title: 'Login Successful!',
                text: 'Welcome back!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            console.log(res)
            Nav('/pharmacydashboard')
        }
        catch (err) {
            Swal.fire({
                title: 'Login Failed!',
                text:   err?.data?.message ||'Invalid username or password.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <div className='flex lg:h-[100vh]'>
            <div className='bg-blue-600 w-[100%] max-[769px]:hidden'>
                <p></p>
                <div className='flex justify-center mt-40'>
                    <img
                        className='transform scale-x-[-1]'
                        src={loginSvg} alt="Login svg" />
                </div>
            </div>

            <div className='bg-white w-[100%] h-[100vh] 
    flex justify-center items-center max-[576px]:px-10
    '>
                <form className='shadow-2xl lg:p-[60px] max-[769px]:p-[40px] max-[576px]:p-[25px] max-[321px]:p-[20px] rounded-[5px] ' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='font-bold lg:text-[40px] max-[769px]:text-[35px] max-[576px]:text-[25px] flex justify-self-center
            '> Login account </h1>
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
                                    type='email'
                                    rounded='rounded-[5px]'
                                    w='w-full'
                                    p='p-2.5'
                                    outline='outline-blue-600'
                                    border='border-1'
                                    borderCol='border-gray-600'
                                    aria-label="Email"
                                />
                            )}
                        />
                        {errors.email && <div className='text-red-500 text-sm'> {errors.email.message} </div>}
                    </div>

                    <div className='mt-4 mb-4'>
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="***********"
                                    labelText='Password'
                                    htmlFor='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    rounded='rounded-[5px]'
                                    w='w-full'
                                    p='p-2.5'
                                    outline='outline-blue-600'
                                    border='border-1'
                                    borderCol='border-gray-600'
                                    aria-label='Password'
                                    icon={
                                        showPassword ? (
                                            <FaEye
                                                onClick={handleShowPassword} />
                                        ) : (
                                            <FaEyeSlash
                                                onClick={handleShowPassword}
                                            />
                                        )
                                    }
                                />
                            )}
                        />
                        {errors.password && <div className='text-red-500 text-sm'> {errors.password.message} </div>}
                    </div>
                    <p className='text-blue-600 hover:underline font-bold
            cursor-pointer justify-self-end max-[576px]:text-[12px]
            '>Forgot password?</p>


                    <Btn
                        type='submit'
                        btnText={isLoading ? <><Spinner size='1.5em' color='white' borderWidth='0.3em' /></> : "Login"}
                        bg='bg-blue-600'
                        color='text-white'
                        px='lg:px-45 max-[576px]:px-30 max-[321px]:px-25'
                        fontWeight='font-bold'
                        py='py-2.5'
                        mt='mt-8'
                        hoverBg='hover:bg-blue-700'
                        disabled={isLoading}
                    // bg='bg-primary'
                    />

                    <p className='flex justify-self-center mt-4 text-gray-600 max-[576px]:text-[12px]'> Dont' have an account? <span className='pl-1 
            text-blue-600 font-bold cursor-pointer hover:underline'
                        onClick={() => Nav("/sign-up")}> Sign Up </span> </p>
                </form>
            </div>
        </div>
    )
}

export default PharmLogin