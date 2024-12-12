"use client"


import { AccountCircleOutlined, Cancel, CloseRounded, PersonRounded } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react"
import React from 'react';
import AuthImage from '../assets/auth_image.png'
import Link from "next/link";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, IconDefinition } from "@fortawesome/free-brands-svg-icons";

export function Auth() {
    const [showSignInModal, changeShowSignInModal] = useState(false)

    return <><button className="flex items-center gap-2 font-semibold text-sm text-black hover:text-blue-500" onClick={() => {
        changeShowSignInModal(true)
        console.log("woring auth")
    }}>
        <AccountCircleOutlined />
        Sign In / Join

    </button>
        {showSignInModal && <AuthPage onCancel={() => {
            changeShowSignInModal(false)
            console.log("clicking 2")
        }} />}</>
}


function AuthPage({ onCancel }: { onCancel: Function }) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="grid grid-cols-2 bg-white rounded rounded-lg shadow-md text-center">
                    <AuthTextPart onCancel={()=>onCancel()} />
                    <AuthSocialMediaPart />
                </div>
            </div>
        </>
    );
};

function AuthTextPart({onCancel}:{onCancel: Function}) {
    return  <div>
        <div className="flex flex-row p-3"> <Cancel  onClick={()=>onCancel()} /></div>
    <div className="pt-4 pb-12 px-12">
        <div className="font-bold text-3xl pt-8 pb-1">Login</div>
        <div className="flex flex-row justify-center text-gray-700">New here? <Link className="font-normal text-blue-500 pl-1" href='/auth'> Sign Up</Link></div>
        <SignInDetailsForm />
        <div className="p-1"></div>
        <Divider />
        <SocialMediaLogin title="Google" icon={faGoogle} />

        <SocialMediaLogin title="Facebook" icon={faFacebook} />
    </div>
    </div>
}

function SignInDetailsForm() {
    return <form>
        <div style={{ marginBottom: '1rem' }}>

            <input className="mt-3 bg-orange-100 border rounded rounded-xl text-sm px-4 py-2" placeholder="Username" type="email" name="email" required />

        </div>
        <div style={{ marginBottom: '1rem' }}>


            <input className="mt-1 bg-orange-100 border rounded rounded-xl text-sm px-4 py-2" placeholder="Password" type="Password" name="email" required />

        </div>
        <button className="border bg-orange-400 rounded rounded-lg px-8 py-2 text-white font-bold" type="submit">Login</button>
    </form>
}

export function SocialMediaLogin({ icon, title, isLogin }: { icon: IconDefinition, title: string , isLogin?:Boolean}) {
    return <button className="w-full flex flex-row justify-center items-center rounded rounded-lg p-2 mt-2 border gap-1 text-sm hover:bg-slate-100"><FontAwesomeIcon icon={icon} /> {isLogin??true? "Login":"Sign Up"} with  <div className="font-bold">{title}</div></button>
}

export function AuthSocialMediaPart() {
    return <div className="bg-orange-500 p-12 rounded rounded-r-lg"><div className="fixed bg-slate-50"> <Image className="absolute" width={130} src={AuthImage} alt=""></Image></div></div>
}

