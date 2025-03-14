import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'

const DashboardHeader = () => {
    return (
        <div className='bg-white w-335 py-6 flex justify-between px-8 shadow-2xl sticky'>
            <FaSearch  color='grey' className='absolute top-10 left-10'/>
            <input className='w-150  outline-none border-1 boreder-gray-600 rounded-[5px] py-2 pl-10' type="text" />

            <div>
                <div className='bg-blue-600 rounded-full p-3'>
                    <CgProfile color='white' size={20}/>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader