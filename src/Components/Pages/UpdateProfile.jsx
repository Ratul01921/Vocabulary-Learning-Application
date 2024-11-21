import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';

const UpdateProfile = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className='my-9  bg-base-200 '>
            <div className='flex flex-col gap-4 my-8 justify-center items-center'>
                <p className='text-4xl font-semibold'>Welcome, {user.displayName}!</p>
                <img className="w-32 h-32  object-cover rounded-full"  src={user?.photoURL} alt="" />
            </div>
            <div className='my-8 w-1/4 mx-auto'>
                <h1 className='text-2x text-center font-medium underline'>Profile Information:</h1>
                <div className='flex gap-20 mt-8 '>
                    <p className='text-xl text-start font-medium'>Name:</p>
                    <p className='text-xl text-end font-medium'>{user?.displayName}</p>
                </div>
                <div className=' flex gap-20 my-4 '>
                    <p className='text-xl  font-medium'>Email:</p>
                    <p className='text-xl font-medium'>{user?.email}</p>
                </div>
                <div className=' flex gap-20 '>
                    <p className='text-xl  font-medium'>Email:</p>
                    {
                        user.emailVerified ? (<p className='text-xl font-medium text-green-600'>Verified</p>): (<p className='text-xl font-medium text-red-600'>Not Verified</p>)
                    }
                    
                </div>
                <div className='my-6'>
                    <button className='btn mb-10 btn-error'>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;