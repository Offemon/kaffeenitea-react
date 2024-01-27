import React from 'react';
import PageFooter from '../Components/footer';
import PageHeader from '../Components/header'

const AboutUsPage = () => {
    return (
        <>
            <PageHeader/>
            <div name="body" id="body">
                <div className="welcome-faqs-wrapper">
                    <div id="welcome-wrapper">
                        <h2>Welcome to <span className="shop-name">Kaffeenitea</span> !</h2>
                        <p>At Kaffeenity, we are passionate about crafting a cup of cold or hot cup of coffee and tea. Our journey began in 2025, and since then, we’ve been on a mission to create a haven for coffee and tea enthusiasts in our city.</p>
                        <p>What set us apart? It’s our commitment to quality, innovation, and the cozy atmosphere we provide for our valued customers. Our team of experienced baristas and tea sommeliers have dedicated themselves to mastering the art of brewing, ensuring that every sip you take is a delightful experience.</p>
                    </div>
                    <hr/>
                    <div id="faqs-wrapper">
                        <h2>FAQs</h2>
                        <h3>Where are your other branches?</h3>
                        <p>We currently only have one branch but we will eventually branch out within the city.</p>
                        <h3>Do you only sell Teas and Coffees?</h3>
                        <p>As of now, we only have those two categories of beverages. Rest assured that we will add more drinks on the menu.</p>
                        <h3>What are your store hours?</h3>
                        <p>Our store is open from 9AM to 7PM on Monday to Saturday.</p>
                        <h3>Do you do Deliveries?</h3>
                        <p>Yes but only within our city.</p>
                        <h3>What payment methods do you accept?</h3>
                        <p>We currently accept Credit/Debit cards and GCash</p>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </>
    )
}

export default AboutUsPage;