import Navbar from '../components/navbar'
import HeroSection from '../components/hero-section'
import Query from '../components/query-section'
import ContactInfo from '../components/contact-info'
import Footer from '../components/footer'
import CurrentOpenings from '../components/current-openings'
import Notice from '../components/notice'

export default function LandingPage() {
    /*const bg = window.innerWidth < 576 ? '/images/bg.svg' : '/images/bg1.svg';
    const landingPageStyle = {
        backgroundImage: `url(${bg})`,        
        backgroundRepeat: 'no-repeat',
    };*/

    return(
        <div className='landing-page'>
            <Navbar />
            <HeroSection />
            <CurrentOpenings />
            <Notice />
            <Query />
            <ContactInfo />
            <Footer />
        </div>
    )
}