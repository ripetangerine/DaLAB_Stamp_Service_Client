import react from "react";
import { useEffect, useState } from "react";

export default function NavigatorBar() {

    return (
        <>
            <div className='w-full min-h-15 shadow-md shadow-gray-100 flex items-center justify-between px-6 py-3'>
                <div className='flex items-center'>
                    <div className="bg-[url('/assets/images/mainlogo.png')] w-12 h-8 bg-cover mr-3"></div>
                    <div className='font-semibold text-1.5xl'>Stamp Marble</div>
                </div>
                <div className='flex items-center'>
                    <div className="bg-[url('/assets/images/alarm.png')] w-6.5 h-7 bg-cover bg-no-repeat mr-8"></div>
                    <div className="bg-[url('/assets/images/user.png')] w-7 h-7 bg-cover bg-no-repeat"></div>
                </div>
            </div>
        </>
    )

}