import {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Signup } from "../lib/auth";
import '../App.css'

export default function SignupPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [signupError, setSignupError] = useState(null);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setPasswordMismatch(false);
        setSignupError(null);
        if (password !== rePassword) {
          setPasswordMismatch(true);
          return;
        }
        if (!role) {
          setSignupError("역할(giver/receiver)을 선택해주세요.");
          return;
        }
        const { user, error } = await signUpWithEmail(
          email,
          password,
          name,
          isUser
        );
        if (error) {
          setSignupError(error.message);
          return;
        }
        alert("회원가입 성공!");
        navigate("/login");
    };

    const onClick = () => {
        if (clicked) {
            setClicked(!clicked);
            setIsUser(false)
        } else {
            setClicked(!clicked);
            setClicked2(clicked);
        }
    }
    const onClick2 = () => {
        if (clicked2) {
            setClicked2(!clicked2);
            setIsUser(true)
        }
        else {
            setClicked2(!clicked2);
            setClicked(clicked2);
        }
    }

    return (
        <div>
            <div className="w-screen min-h-screen flex items-center justify-center bg-background">
                <div className="w-full h-[calc(100vh-6rem)] bg-white rounded-4xl ml-12 mr-12 flex flex-col items-center justify-start box-border">
                    <div className='w-full flex justify-start'>
                        <a href='/login' className="w-6 h-9 bg-[url('/assets/images/back.png')] bg-cover ml-40 mt-12"></a>
                    </div>
                    <div className="h-15 w-35 bg-[url('/assets/images/airplane.png')] bg-cover bg-top mb-6 flex"></div>
                    <div className='flex text-2xl text-center mb-8'>
                        <div className='font-light text-background'>회원가입</div>
                    </div>
                    <form onSubmit={handleSignupSubmit} className='flex flex-col items-center mb-8'>
                        <input type="email" 
                        placeholder='email' 
                        className="border w-80 h-10 p-5 rounded-full box-border bg-[url('/assets/images/majesticons_mail-line.png')]
                        bg-no-repeat bg-size-[1.2rem_1.2rem] bg-position-[right_1rem_center] pr-10 mb-4" />

                        <input 
                        type="text" 
                        placeholder='name' 
                        className="border w-80 h-10 p-5 mb-4 rounded-full box-border bg-[url('/assets/images/hugeicons_user-03.png')]
                        bg-no-repeat bg-size-[1.2rem_1.2rem] bg-position-[right_1rem_center] pr-10" />

                        <input type="password" 
                        placeholder='password' 
                        className="border w-80 h-10 p-5 rounded-full box-border bg-[url('/assets/images/prime_lock.png')] bg-no-repeat bg-size-[1.2rem_1.2rem] 
                        bg-position-[right_1rem_center] pr-10 mb-4" />

                        <input type="password" 
                        placeholder='re-enter-password' 
                        className="border border-background w-80 h-10 p-5 mb-4 rounded-full box-border bg-[url('/assets/images/prime_lock.png')] bg-no-repeat bg-size-[1.2rem_1.2rem] 
                        bg-position-[right_1rem_center] pr-10" />
                        {passwordMismatch && (
                            <div className="w-80 text-right text-fail text-xs mb-3">
                            * 비밀번호가 같지 않습니다.
                            </div>
                        )}

                        <div className='flex mb-4'>
                            <div className={`w-38 h-12 items-center flex justify-center rounded-full border mr-3 font-semibold cursor-pointer
                            ${clicked ? 'bg-background text-white' : 'bg-white text-background'}`} onClick={onClick}>giver</div>
                            <div className={`w-38 h-12 items-center flex justify-center rounded-full border font-semibold cursor-pointer
                            ${clicked2 ? 'bg-background text-white' : 'bg-white text-background'}`} onClick={onClick2}>receiver</div>
                        </div>
                        <button type='submit' className='w-80 h-10 p-5 text-1.5xl rounded-full bg-background text-white flex items-center justify-center shadow-blue-500 shadow-xl/15 font'>create an account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
