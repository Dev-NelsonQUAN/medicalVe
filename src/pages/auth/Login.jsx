import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Btn from '../../ui/Btn'
import Input from '../../ui/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import loginSvg from '../../assets/doctorvector.png'


const Login = () => {
    const Nav = useNavigate()
    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            toast.success("Login Successful")
            console.log(data)
            Nav('/adminDash')
        }
        catch (err) {
            toast.error('Login failed, Please try again')
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex lg:h-[100vh]'>
            <div className='bg-blue-600 w-[100%] max-[769px]:hidden'>
                <p></p>
                <div className='flex justify-center'>
                    <img 
                    className='transform scale-x-[-1]'
                    src={loginSvg} alt="Login svg" />
                </div>
            </div>

            <div className='bg-white w-[100%] h-[100vh] 
            flex justify-center items-center max-[576px]:px-10
            '>
                <form className='shadow-2xl lg:p-[60px] max-[769px]:p-[40px] max-[576px]:p-[25px] rounded-[5px]' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='font-bold lg:text-[40px] max-[769px]:text-[35px] max-[576px]:text-[25px] flex justify-self-center
                    '> Login account </h1>
                    <div className='mt-4 mb-4'>
                        {/* <label className='text-[18px] font-medium mb-1' htmlFor='email'>Email</label> */}
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
                                    type='password'
                                    rounded='rounded-[5px]'
                                    w='w-full'
                                    p='p-2.5'
                                    outline='outline-blue-600'
                                    border='border-1'
                                    borderCol='border-gray-600'
                                    aria-label='Password'
                                />
                            )}
                        />
                        {errors.password && <div className='text-red-500 text-sm'> {errors.password.message} </div>}
                    </div>
                    <p className='text-blue-600 underline font-bold
                    cursor-pointer justify-self-end
                    '>Forgot password?</p>


                    <Btn
                        type='submit'
                        btnText={loading ? "Logging in..." : "Login"}
                        bg='bg-blue-600'
                        color='text-white'
                        px='lg:px-45 max-[576px]:px-30'
                        py='py-2.5'
                        mt='mt-8'
                        disabled={loading}
                    // bg='bg-primary'
                    />

                    <p className='flex justify-self-center mt-4 text-gray-600'> Dont' have an account? <span className='pl-1 
                    text-blue-600 font-bold cursor-pointer underline'
                        onClick={() => Nav("/")}> Login </span> </p>
                </form>
            </div>
        </div>
    )
}

export default Login