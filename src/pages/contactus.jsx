import PageFooter from "../Components/footer";
import PageHeader from "../Components/header";
import fbIcon from "/icons/facebook-svgrepo-com.svg"
import instaIcon from "/icons/instagram-167-svgrepo-com.svg"

const ContactUsPage = () => {
    return (
        <>
            <PageHeader/>
            <div name="body" id="body">
                <div id="contact-chunk">
                    <h2>Contact Us</h2>
                    <div id="contact-input-details-container">
                        <div id="inputs-container">
                            <label htmlFor="name" className="input-label">Your name</label>
                            <input type="text" name="name" id="name" placeholder="Your name"/>
                            <label htmlFor="email" className="input-label">Your email</label>
                            <input type="email" name="email" id="email" placeholder="Your email"/>
                            <label htmlFor="message" className="input-label">Your name</label>
                            <textarea name="message" id="message" cols="30" rows="5" placeholder="Your message"></textarea>
                        </div>
                        <div id="details-container">
                            <div>
                                <p>Email</p>
                                <p>Kaffeeniteaofficial@some.com</p>
                            </div>
                            <div>
                                <p>Phone</p>
                                <p>09123456789 | 0998654321</p>
                            </div>
                            <div>
                                <p>Address</p>
                                <p>152 BF Resort Drive, Las Pinas City</p>
                            </div>
                            <div>
                                <p>Socials</p>
                                <img src={fbIcon} alt=""/><img src={instaIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <button id="send-message-btn">Send Message</button>
                </div>
            </div>
            <PageFooter/>
        </>

    )
}

export default ContactUsPage;