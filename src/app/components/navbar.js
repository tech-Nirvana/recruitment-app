import { useState } from "react"

export default function Navbar() {
    const [isOpen, SetISOpen] = useState(false)

    function toggleMenu() {
        SetISOpen(!isOpen)
    }

    return(
        <nav className="navigation">
            <div className="hamburger-menu" onClick={toggleMenu}>
                ☰
            </div>

            {/* Navigation links */}
                <ul className={`nav-list ${isOpen?'open':'close'}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">Login</a></li>
                    <li className="apply-help"><a href="/apply-help">How to apply</a></li>
                </ul>            
        </nav>
    )
}