import react from "react";
import { useState, useEffect } from "react";

export default function AirplaneList({ apname, pnumber, cdate }) {


    return (
        <>
            <div className='font-semibold'>{apname}</div>
            <div className=''>{pnumber}</div>
            <div className=''>{cdate} 생성됨</div>
        </>
    )
}