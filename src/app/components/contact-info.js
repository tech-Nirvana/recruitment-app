export default function ContactInfo() {
    return(
        <div className="contact-section">
            <div className="contact-heading">
                <h2>Connect with us</h2>
            </div>
            <div className="contact-wrapper">
                <div className="contact-item">
                    <div className="contact-address">
                        <div className="contact-image">
                            <img src="/images/office-address-icon.svg" alt="Address"/>
                        </div>
                        <div className="contact-sub-heading">
                            <h3>Office address</h3>
                        </div>
                        <div className="address">
                            <p>
                                3rd floor, District Collectoriate building,
                                Tambo chowk, opposite of Tata college,
                                Chaibasa-833219
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-address">
                        <div className="contact-image">
                            <img src="/images/telephone-icon.svg" alt="Contact number"/>
                        </div>
                        <div className="contact-sub-heading">
                            <h3>Contact Number</h3>
                        </div>
                        <div className="contact-number">
                            <p>
                                +91-0123456789<br/>
                                +91-987654321<br/>
                                +91-0123456789
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-email">
                        <div className="contact-image">
                            <img src="/images/email-address-icon.svg" alt="Email address"/>
                        </div>
                        <div className="contact-sub-heading">
                            <h3>Email address</h3>
                        </div>
                        <div className="contact-number">
                            <p>jepwsm@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div>
                <p>Jharkhand Education Project</p>
                <address>
                    3rd floor, District Collectoriate building<br/>
                    Tambo chowk, opposite of Tata college,<br/>
                    Chaibasa-833219<br/>
                    Mail: jepwsm@gmail.com
                </address>
            </div>
            <div>
                <img src="/images/rte_emblem.png" alt="Siksha ka adhikar" />
            </div>
            <div>
                <p>Stay connected with us</p>
                <div className="social-links">
                    <a href="https://www.youtube.com" target="_blank">
                        <img src="/images/youtube_icon.svg" alt="Youtube" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="/images/facebook_icon.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="images/x_icon.svg" alt="X" />
                    </a>
                </div>
            </div>
        <hr/> */}
        </div>
    )
}