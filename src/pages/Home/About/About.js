import React from 'react';
import './About.css';
import aboutImg from "../../../Images/about.png"

const About = () => {
    return (
        <div className="container my-5">
            <div className="div d-flex flex-wrap align-items-center">

                <div className="about-image align-items-center col-lg-6 col-sm-12 g-4">
                    <img src={aboutImg} className="about-img" alt="" />
                </div>
                {/* <div className="col-lg-1 col-sm-12"></div> */}

                <div className="about-me mt-5 p-3 align-items-center col-lg-6 col-sm-12">
                    <div className="w-100">
                        <h2 className="name">About Me</h2>
                        <p>
                            I'm a Junior Web Developer. I am 16 years old. I was born on 26 July,2005.I live at Bangladesh. I am yearning for experience and I love to work. I am confident enough to say I am dedicated towards my job.
                        </p>

                        <button className="btn btn-outline-dark btn-success"><a className="text-decoration-none text-light" target="blank" href="https://drive.google.com/file/d/1qGOcla8f01UW1QmbTtYqEsMWVLIwnvxb/view?usp=sharing"> My Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;