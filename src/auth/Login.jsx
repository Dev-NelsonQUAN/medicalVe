import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Btn from '../../ui/Btn'
import Input from '../../ui/Input'
import { yupResolver } from '@hookform/resolvers/yup'

const Login = () => {
    const Nav = useNavigate()

    const handlelogin = (e) => {
        e.preventDefault()

        toast.success("Login Successful")
    }



    return (
        <div className='flex lg:h-[100vh]'>
            <div className='bg-blue-600 w-[100%] max-[769px]:hidden'>

            </div>

            <div className='bg-white w-[100%] h-[100vh] 
            flex justify-center items-center max-[576px]:px-10
            '>
                <form className='shadow-2xl lg:p-[60px] max-[769px]:p-[40px] max-[576px]:p-[25px] rounded-[5px]' onSubmit={handlelogin}>
                    <label className='font-bold lg:text-[40px] max-[769px]:text-[35px] max-[576px]:text-[25px] flex justify-self-center
                    '> Login account </label>
                    <div className='mt-4 mb-4'>
                        <p className='text-[18px] font-medium mb-1'>Email</p>
                        <Input
                            placeholder="chinelz@gmail.com"
                            type='email'
                            rounded='rounded-[5px]'
                            w='w-full'
                            p='p-2.5'
                            outline='outline-blue-600'
                            border='border-1'
                            borderCol='border-gray-600'
                        />
                    </div>

                    <div className='mt-4 mb-4'>
                        <p className='font-medium text-[18px] mb-1'>Password</p>
                        <Input
                            placeholder="***********"
                            type='password'
                            rounded='rounded-[5px]'
                            w='w-full'
                            p='p-2.5'
                            outline='outline-blue-600'
                            border='border-1'
                            borderCol='border-gray-600'
                        />
                    </div>

                    <p className='flex justify-self-end text-gray-600'> Dont' have an account? <span className='pl-1 
                    text-blue-600 font-bold cursor-pointer underline'
                        onClick={() => Nav("/")}> Sign Up </span> </p>

                    <Btn
                        btnText="Login"
                        bg='bg-blue-600'
                        color='text-white'
                        px='lg:px-35 max-[576px]:px-30'
                        py='py-2.5'
                        mt='mt-10'
                    // bg='bg-primary'
                    />
                </form>
            </div>
        </div>
    )
}

export default Login