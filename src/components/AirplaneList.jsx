import react from "react";
import { useState, useEffect } from "react";

export default function AirplaneList({apname, pnumber, cdate}) {

    return (
        <>
            <div className='flex ml-10 mr-10 justify-between mb-1'>
                <div className='font-semibold'>{apname}</div>
                <div className=''>{pnumber}</div>
                <div className=''>{cdate} 생성됨</div>
                <div className='bg-fail text-white p-1 rounded-md text-xs cursor-pointer'>삭제하기</div>
            </div>
        </>
    )
}