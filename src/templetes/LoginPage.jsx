import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css'

export default function LoginPage() {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center">
            <div className="w-full h-[calc(100vh-6rem)] bg-white rounded-4xl ml-12 mr-12 flex flex-col items-center justify-top box-border">
                <div className="h-15 w-35 bg-[url('/assets/images/airplane.png')] bg-cover bg-top mb-8 mt-12 flex"></div>
                <div className='flex text-2xl text-center mb-30'>
                    <div className='font-bold'>Stamp Marble</div>
                    <div>에 오신 것을 환영합니다!</div>
                </div>
                <form action="" className='flex flex-col items-center mb-8'>
                    <input type="text" placeholder='email' className='border-1 w-80 h-12 p-4 rounded-full box-border mb-5' />
                    <input type="password" placeholder='password' className='border-1 w-80 h-12 p-4 rounded-full box-border mb-15' />
                    <button type='submit' className='w-80 h-12 p-4 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-blue-500 shadow-xl/15'>log in</button>
                </form>
                <a href="" className='text-xs underline'>create an account</a>
            </div>
        </div>
    );
}
