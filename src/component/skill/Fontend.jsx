import React from 'react';

const Fontend = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Frontend Developer</h3>

            <div className='skills_box'>
                <div className="skills_group">
                    <div className='skills_data'>
                        <i className="uil uil-shield-check"></i>

                        <div>
                            <h3 className='skills_name'>HTML</h3>
                        </div>
                    </div>

                    <div className='skills_data'>
                        <i className="uil uil-shield-check"></i>

                        <div>
                            <h3 className='skills_name'>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className='skills_data'>
                        <i className="uil uil-shield-check"></i>

                        <div>
                            <h3 className='skills_name'>Bootstrap</h3>
                        </div>
                    </div>

                    <div className='skills_data'>
                        <i className="uil uil-shield-check"></i>

                        <div>
                            <h3 className='skills_name'>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className="skills_group" style={{ display:"flex",columnGap:"1rem",marginTop:"1rem" }}>
                    <div className='skills_data'>
                        <i className="uil uil-shield-check"></i>

                        <div>
                            <h3 className='skills_name'>JavaScript</h3>
                        </div>
                    </div>

                    <div className='skills_data'>
                        <i className="uil uil-shield-check"></i>

                        <div>
                            <h3 className='skills_name'>React</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Fontend;
