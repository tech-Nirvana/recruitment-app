export default function Query() {
    return(
        <div className="query-section">
            <div className="query-heading">
                <h2>Have any query? Leave a message</h2>
            </div>
            <div className="query-form">
                <form>
                    <div className="query-person">
                        <label htmlFor="query-name">Name</label><br/>
                        <input id="query-name" maxLength={256} type="text" placeholder="" name="Name"/>                        
                    </div>
                    <div className="query-mail">
                        <label htmlFor="query-mail">Email Address</label><br/>
                        <input maxLength="256" name="Email" placeholder="" type="email" id="query-mail" required=""/>
                    </div>
                    <div className="query-msg">
                        <label htmlFor="query-msg">message</label><br/>
                        <textarea id="query-msg" name="Field" maxLength="5000" placeholder="Write your message here"></textarea>
                        <div className="query-side">
                            Max.
                            <span className="max-char">250 characters</span>
                        </div>
                    </div>
                    
                    <div className="query-agreement">
                        <label>
                            <input id="check" type="checkbox" name="Checkbox"/>
                        </label>                        
                        <span>I agree with Terms of Use and Privacy Policy</span>
                    </div>
                    <div className="query-submit">
                        <button className="query-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
            {/* <input onChange={() => handleChange} type="email" value=""/>
            <textarea rows={4} cols={50} value={"Write your query in less than 100 words."} onChange={() => handleQueryChange}></textarea>
            <hr/> */}
        </div>
    )
}