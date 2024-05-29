"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    return(
        <div className="registration-section">
            <div className="registration-heading">
            <h2>Register yourself</h2>
            </div>
            <div className="registration-wrapper">
                <form className="registration-form">
                    <div className="registration-mail">
                        <input maxLength="256" name="Email" inputMode="email" autoCapitalize="none" spellCheck="false" placeholder="" type="email" id="registration-mail" required/>
                        <label htmlFor="registration-mail" className="registration-mail-label">Email Address</label><br/>
                    </div>
                    <div className="registration-password">
                        <input maxLength="256" name="Password" inputMode="password" autoCapitalize="none" spellCheck="false" placeholder="" type="password" id="registration-password" required/>
                        <label htmlFor="registration-password" className="registration-password-label">Password</label><br/>
                    </div>
                    <div className="registration-create-btn">
                        <button className="create-account-btn">Create account</button>
                    </div>
                </form>
                <p className="other-page">
                    Already registered?
                    <Link className="other-page-link" href={'/login'}> Login</Link>
                </p>
                <div className="devider-wrapper">
                    <span className="devider">or</span>
                </div>
            </div>
        </div>
    )
}   