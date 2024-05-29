export default function Notice() {
    return (
        <div className="notice-section"> 
            <div className="notice-heading">
                <h2>Notices/Notifications</h2>
            </div>
            <div className="notice-wrapper">
                <div className="notice-item">
                    <div className="KGBV/01/2023">
                        <div className="notice-no">
                            <h3>Letter No.: KGBV/01/2023</h3>
                        </div>
                        <div className="notice-description">
                            <p>Cancelation letter of letter no JBAV/01/24</p>
                        </div>
                        <div className="notice-footer">
                            <div className="posted-date">
                                <p>1 day ago</p>
                            </div>
                            <div className="notice-detail-btn">
                                < a href="/documents/chaibasa.pdf" download="chaibasa.pdf" target="_blank">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notice-item">
                    <div className="KGBV/02/2023">
                        <div className="notice-no">
                            <h3>Letter No.: KGBV/02/2023</h3>
                        </div>
                        <div className="notice-description">
                            <p>Correction of letter no. JEP/23/24</p>
                        </div>
                        <div className="notice-footer">
                            <div className="posted-date">
                                <p>1 day ago</p>
                            </div>
                            <div className="notice-detail-btn">
                                < a href="/documents/chaibasa.pdf" download="chaibasa.pdf" target="_blank">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}