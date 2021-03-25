import React from 'react'
import Photo from "../../../static/images/seba.jpg"

const Contact = ()=>{
    return(
        <div className="contact">
            <div className="contactTitle">
                <i class="fas fa-phone"></i>
                <h3>Kontakt</h3>
                <i class="fas fa-phone rotate"></i>
            </div>
            <div className="contactContent">
                <div className="contactMapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3500.250310045675!2d20.989130453001703!3d52.30572303179925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1616607082125!5m2!1spl!2spl" style={{width:"600px", height:"450px", border:"1px solid grey", allowfullscreen:"", loading:"lazy"}}></iframe>
                </div>
                <div className="contactData">
                    <div id="contactImage">
                        <img src={Photo}></img>
                    </div>
                    <div id="contactData">
                        <h3>Zapraszam do kontaktu!</h3>
                        <p>Sebastian Jadczak</p>
                        <p>sebastian-jadczak@wp.pl</p>
                        <p>518-521-272</p>
                        <p>Warszawa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;