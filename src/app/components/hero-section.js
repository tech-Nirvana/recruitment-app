import Link from "next/link"

export default function HeroSection() {
    return(
        <div className="hero-section"> 
            <main>
                <div className="hero-wrapper">
                    <h2 className="hero-title"><span>Recruitment portal </span>of<br/>
                        Samagra Siksha Abhiyan<br/>
                        West Singhbhum
                    </h2>
                    <Link className="register-btn" href={'/register'}>Register to apply</Link>
                </div>                
                <p className="hero-para">
                    Here, we are not just offering jobs; 
                    we are inviting you to be a part of a transformative journey in education. 
                    As the backbone of our nation's progress, Join us in shaping the future of 
                    education and empowering the leaders of tomorrow.
                </p>
            </main>
        </div>
        
    )
}

