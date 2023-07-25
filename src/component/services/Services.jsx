import React, { useState } from 'react';
import "./services.css";

const Services = () => {
const[modalPro,showmodal]=useState(false);
const[modalUi,showmodal2]=useState(false);
const[modalWeb,showmodal3]=useState(false);

    return (
        <section className='section services' id='services'>
            <h2 className='section_title'>Services</h2>
            <span className='section_subtitle'>What i offer</span>

            <div className='services_container grid container'>
                <div className='services_content'>
                    <div>
                        <i className="uil uil-desktop"></i>
                        <h3 className='services_title'>Product Designer</h3>
                    </div>

                    <span className='services_button' onClick={()=>showmodal(true)}>View more<i className="uil uil-arrow-right services_view_more_icon"></i></span>
                    
                    <div className={(modalPro==true)? 'services_model services_active_modal':'services_model'}>
                        <div className='services_modal_content'>
                            <i className="uil uil-times services_modal_close" onClick={()=>showmodal(false)}></i>
                            <h3 className='services_modal_title'>
                            Product Designer
                            </h3>
                            <h3 className='services_modal_description'>
                                We are providing best service with more than 1/2 years of experience.
                            </h3>

                            <ul className='services_modal_service grid'>
                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>I develop the user interface</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Single web page website</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Multi page website</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Full dynamic website</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className='services_content'>
                    <div>
                    <i className="uil uil-laptop-connection"></i>
                        <h3 className='services_title'>UI/UX Designer</h3>
                    </div>

                    <span className='services_button' onClick={()=>showmodal2(true)}>View more<i className="uil uil-arrow-right services_view_more_icon"></i></span>

                    <div className={(modalUi==true)? 'services_model services_active_modal':'services_model'}>
                        <div className='services_modal_content'>
                            <i onClick={()=>showmodal2(false)} className="uil uil-times services_modal_close"></i>

                            <h3 className='services_modal_title'>
                            UI/UX Designer
                            </h3>
                            <h3 className='services_modal_description'>
                                We are providing best service with more than 1/2 years of experience.
                            </h3>

                            <ul className='services_modal_service grid'>
                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>I design the user interface ui/ux</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Single web page website design</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Multi page website figma design</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Photoshop</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services_content'>
                    <div>
                    <i className="uil uil-arrow"></i>
                        <h3 className='services_title'>Website Designer</h3>
                    </div>

                    <span className='services_button' onClick={()=>showmodal3(true)}>View more<i className="uil uil-arrow-right services_view_more_icon"></i></span>

                    <div className={(modalWeb==true)? 'services_model services_active_modal':'services_model'}>
                        <div className='services_modal_content'>
                            <i onClick={()=>showmodal3(false)} className="uil uil-times services_modal_close"></i>

                            <h3 className='services_modal_title'>
                            Website Designer
                            </h3>
                            <h3 className='services_modal_description'>
                                We are providing best service with more than 1/2 years of experience.
                            </h3>

                            <ul className='services_modal_service grid'>
                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>I develop the user interface</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Single web page website</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Multi page website</p>
                                </li>

                                <li>
                                    <i className="uil uil-check-circle"></i>
                                    <p>Full dynamic website</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
