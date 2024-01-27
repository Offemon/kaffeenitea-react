import "./footer.css"

const PageFooter = () => {
    return (
    <div name="footer" id="footer">
        <a href="#header" id="back-to-top">Back to top ⇧</a>
        <div id="footer-chunk">
            <h2>Kaffeenitea</h2>
                <div id="footer-links-container">
                    <div className="link">
                        <a href="#" className="footer-link">About Us</a>
                        <a href="#" className="footer-link">Covid-19 Policy</a>
                        <a href="#" className="footer-link">Private Policy</a>
                    </div>
                    <div className="link">
                        <a href="#" className="footer-link">Contact Us</a>
                        <a href="#" className="footer-link">Branch Locator</a>
                        <a href="#" className="footer-link">FAQs</a>
                    </div>
                    <div className="link">
                        <a href="#" className="footer-link">Search</a>
                    </div>
                </div>
        </div>
        <p className="footer-copy-right">Copyright © 2023 Kaffeenitea</p>
    </div>
    )
}

export default PageFooter;