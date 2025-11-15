import react from 'react';
import { useState, useEffect } from 'react';
import NavigatorBar from '../components/NavigatorBar';
import AirplaneList from '../components/AirplaneList';
import Profile from '../components/Propile';
import Coupon from '../assets/icons/couponIcon.svg'

export default function CouponItem({ agency, date }) {
    return (
        // 기존 MyPageGiver.js에 있던 반복되는 JSX 구조를 그대로 가져옵니다.
        <div className="flex-shrink-0 flex flex-col items-center">
            
            {/* 'w-100' 클래스는 tailwind.config.js에 정의된 사용자 정의 클래스로 보입니다. */}
            {/* 그대로 사용합니다. */}
            <img src={Coupon} alt="Coupon Icon" className='w-100' />
            
            {/* 하드코딩된 텍스트 대신 props로 받은 값(agency, date)을 출력합니다. */}
            <div className='text-xs mt-2 text-gray-600 text-left'>
                {agency}<br/>{date}
            </div>
        </div>
    );
}