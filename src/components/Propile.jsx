import react from "react";
import { useState, useEffect } from "react";

export default function Profile({name, email, age}) {
    return (
        <div className='flex items-center'>
            <div className="bg-[url('/assets/images/mypageperson.png')] bg-cover w-40 h-40 mr-5"></div>
            <div className='flex flex-col text-black'>
                <div className='font-bold text-2xl mb-2'>{name}</div>
                <div className='mb-1'>{email}</div>
                <div>{age}</div>
            </div>
        </div>
    )
}