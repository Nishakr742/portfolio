import React from 'react'
import './contact.css'
function Contact() {
    return (
        <section id='contact' className='contact container section'>
            <h2 className='section_title'>Get in touch</h2>
            <span className='section_subtitle'>Contact Me</span>

            <div className='contact_main_boxes'>
                <div className="contact_box">
                    <i class="uil uil-envelopes contact_icon"></i>
                    <h2>Email</h2>
                    <h3>raviranjan8023010@gmail.com</h3>
                    <p><a target='_blank' href="mailto:raviranjan8023010@gmail.com?subject=Website%20Subject&body=Email%20Body"> Write me <i class="uil uil-arrow-right"></i></a></p>
                </div>

                <div className="contact_box">
                <i class="uil uil-whatsapp contact_icon"></i>
                    <h2>Whatsapp</h2>
                    <h3>+91 8651384873</h3>
                    <p><a href="https://api.whatsapp.com/send?phone=+918651384873&text=Hi%20Sir%20!" target='_blank'> Text me <i class="uil uil-arrow-right"></i></a></p>
                </div>

                {/* <div className="contact_box">
                    <i class="uil uil-envelopes contact_icon"></i>
                    <h2>Call</h2>
                    <h3>raviranjan8023010@gmail.com</h3>
                    <p><a href=""> Write me <i class="uil uil-arrow-right"></i></a></p>
                </div> */}
            </div>
        </section>
    )
}

export default Contact