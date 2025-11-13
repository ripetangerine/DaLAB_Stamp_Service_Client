import react from 'react';
import { useState, useEffect } from 'react';

export default function MyPage() {

    return (
        <>
            <div className="bg-linear-180 from-white to-[#F2F7FF] w-screen min-h-screen">

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

                <div className='flex flex-col w-screen items-center'>
                    <a href='' className="w-6 h-9 bg-[url('/assets/images/back.png')] bg-cover mt-10 ml-25 self-start"></a>
                    <div className='flex w-screen justify-between items-start mb-5'>
                        <div className='flex items-center'>
                            <div className="bg-[url('/assets/images/mypageperson.png')] bg-cover w-40 h-40 mr-5 ml-50"></div>
                            <div className='flex flex-col text-black'>
                                <div className='font-bold text-2xl mb-2'>이현민</div>
                                <div className='mb-1'>s2531@e-mirim.hs.kr</div>
                                <div>만16세</div>
                            </div>
                        </div>

                        <div className='text-white bg-background p-1 rounded-md cursor-pointer mr-55 mt-5'>
                            정보 수정하기
                        </div>
                    </div>
                    <hr className='w-5xl mb-5' />
                    <div className='flex'>
                        <div className='w-50 h-10 bg-background rounded-l-md flex items-center justify-around'>
                                <div className='text-white'>생성된 여행사</div>
                                <div className='text-white font-bold text-2xs'>2 개</div>
                        </div>

                        <div className='w-180 h-60 bg-white border border-background pt-3 pb-3 pl-10 pr-20 rounded-r-md rounded-bl-md'>
                            <div className='text-center mb-5 font-semibold'>나의 여행사</div>
                            <div className='flex ml-10 mr-10 justify-between mb-1'>
                                <div className='font-semibold'>OO여행사</div>
                                <div className=''>11명</div>
                                <div className=''>25/11/01 생성됨</div>
                                <div className='bg-fail text-white p-1 rounded-md text-xs cursor-pointer'>삭제하기</div>
                            </div>
                            <hr className='mb-2' />
                            <div className='flex ml-10 mr-10 justify-between mb-1'>
                                <div className='font-semibold'>OO여행사</div>
                                <div className=''>11명</div>
                                <div className=''>25/11/01 생성됨</div>
                                <div className='bg-fail text-white p-1 rounded-md text-xs cursor-pointer'>삭제하기</div>
                            </div>
                            <hr className='mb-2' />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}