import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggel, settoggel] = useState(0);

    const toggelClick = (index) => {
        settoggel(index);
    };
    return (
        <section id='qua'  className='qualification section'>
            <h2 className='section_title'>Qualification</h2>
            <span className='section_subtitle'>My personel journey</span>

            <div className='qualification_container container'>
                <div className='qualification_tabs'>
                    <div className={toggel === 1
                        ? 'qualification_button button-flex qualification_content_active'
                        : 'qualification_button button-flex'} onClick={() => toggelClick(1)} >
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "}Education
                    </div>

                    <div className={toggel === 2
                        ? 'qualification_button button-flex qualification_content_active'
                        : 'qualification_button button-flex'} onClick={() => toggelClick(2)} >
                        <i className="uil uil-award qualification_icon"></i>{" "}Experience
                    </div>
                </div>

                <div className='qualification_sections'>
                    <div className={
                        toggel === 1 ?
                            'qulification_content qualification_content_active'
                            : 'qualification_content'}
                    >
                        <div className='qulification_data'>
                            <div>
                                <h3 className='qualification_title'>Matric 10<sup>th</sup></h3>
                                <span className='qualification_subtitle'>S.S + 2 high school jagdishpur</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qulification_data'>
                            <div></div>


                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>Inter 12<sup>th</sup></h3>
                                <span className='qualification_subtitle'>S.S + 2 high school jagdishpur</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>
                        </div>

                        <div className='qulification_data'>
                            <div>
                                <h3 className='qualification_title'>BCA</h3>
                                <span className='qualification_subtitle'>Maharaja College (ara)</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qulification_data'>
                            <div></div>


                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>Web Development</h3>
                                <span className='qualification_subtitle'>Youtube</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggel === 2 ? 'qulification_content qualification_content_active' : 'qualification_content'} >
                        <div className='qulification_data'>
                            <div>
                                <h3 className='qualification_title'>Product Desiner</h3>
                                <span className='qualification_subtitle'>Youtube</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qulification_data'>
                            <div></div>


                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>UI/UX Designer</h3>
                                <span className='qualification_subtitle'>Youtube</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className='qulification_data'>
                            <div>
                                <h3 className='qualification_title'>Figma</h3>
                                <span className='qualification_subtitle'>Youtube</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qulification_data'>
                            <div></div>


                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>Photoshop</h3>
                                <span className='qualification_subtitle'>Youtube</span>
                                <div className='qualification_calender'>
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
