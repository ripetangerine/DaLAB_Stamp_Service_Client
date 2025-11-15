import react from 'react';
import { useState, useEffect } from 'react';
import NavigatorBar from '../components/NavigatorBar';
import AirplaneList from '../components/AirplaneList';
import Profile from '../components/Propile';

export default function MyPageGiver() {

    const [list, setList] = useState([
        {
            name: "OO여행사",
            number: "11명",
            date: "25/11/01"
        },
        {
            name: "BB여행사",
            number: "10명",
            date: "25/11/11"
        },
        {
            name: "OO여행사",
            number: "11명",
            date: "25/11/01"
        },
        {
            name: "BB여행사",
            number: "10명",
            date: "25/11/11"
        },
        {
            name: "OO여행사",
            number: "11명",
            date: "25/11/01"
        },
    ]);

    const handledel = (index) => {
        setList(list.filter((arr, i) => i !== index));
    }

    return (
        <>
            <div className="bg-linear-180 from-white to-[#F2F7FF] w-screen min-h-screen">

                <NavigatorBar />

                <div className='flex flex-col w-screen items-center'>
                    <a href='' className="w-6 h-9 bg-[url('/assets/images/back.png')] bg-cover mt-10 ml-25 self-start"></a>
                    <div className='flex w-screen justify-between items-start mb-5'>
                        <Profile name={"이현민"} email={"s2531@e-mirim.hs.kr"} age={"만16세"} />

                        <div className='text-white bg-background pt-1 pb-1 pl-2 pr-2 rounded-md cursor-pointer mr-55 mt-5 flex justify-center items-center'>
                            <div className='mr-2'>정보 수정하기</div>
                            <div className="bg-[url('/assets/images/Vector.png')] w-4 h-4 bg-no-repeat bg-cover"></div>
                        </div>
                    </div>
                    <hr className='w-5xl mb-5' />
                    <div className='flex'>
                        <div className='w-50 h-10 bg-background rounded-l-md flex items-center justify-around'>
                            <div className='text-white'>생성된 여행사</div>
                            <div className='text-white font-bold text-2xs'>2 개</div>
                        </div>

                        <div className='w-180 h-60 bg-white border border-background pt-3 pb-3 pl-10 pr-20 rounded-r-md rounded-bl-md overflow-y-scroll'>
                            <div className='text-center mb-5 font-semibold'>나의 여행사</div>

                            <ul>
                                {list.map((arr, index) => (
                                    <li key={index}>
                                        <div className='flex ml-10 mr-10 justify-between mb-1'>
                                            <AirplaneList apname={list[index].name} pnumber={list[index].number} cdate={list[index].date} />
                                            <button className='bg-fail text-white p-1 rounded-md text-xs cursor-pointer' onClick={() => handledel(index)}>삭제하기</button>
                                        </div>
                                        <hr className='mb-2' />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}