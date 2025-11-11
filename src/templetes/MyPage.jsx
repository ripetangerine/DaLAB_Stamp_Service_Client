import react from 'react';
import { useState, useEffect } from 'react';

export default function MyPage() {

    return (
        <>
            <div className="bg-linear-180 from-white to-[#F2F7FF] w-screen min-h-screen">
                <div className='w-full min-h-15 shadow-md shadow-gray-100 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className="bg-[url('/assets/images/mainlogo.png')] w-12 h-8 bg-cover mr-3 ml-3 "></div>
                        <div className='font-semibold text-1.5xl'>Stamp Marble</div>
                    </div>
                    <div className='flex items-center'>
                        <div className="bg-[url('/assets/images/alarm.png')] w-6.5 h-7 bg-cover bg-no-repeat mr-8"></div>
                        <div className="bg-[url('/assets/images/user.png')] w-7 h-7 bg-cover bg-no-repeat mr-10"></div>
                    </div>


                </div>
            </div>
        </>
    )
}