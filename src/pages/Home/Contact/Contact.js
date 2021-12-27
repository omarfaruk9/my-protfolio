// import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    // const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t4ezold', 'template_xi3u5gn', e.target, 'user_LYCZeT078nbnTcYpMiIfO')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        e.target.reset();
    };
    return (
        <div className="container my-5">
            <h1 className="my-5 text-center name">Contact with me</h1>
            <form onSubmit={sendEmail} className="">
                <div className="row mt-5 mx-auto">
                    <div className="col-7  form-group mx-auto">
                        <input className="form-control my-2 bg-dark bg-dark" type="text" name="name" placeholder="Your name" />
                    </div>
                    <div className="col-7 form-group mx-auto">
                        <input className="form-control my-2 bg-dark" type="email" name="email" placeholder="Your gamil" />
                    </div>
                    <div className="col-7 form-group mx-auto">
                        <textarea className="form-control my-2 text-light bg-dark" cols="10" rows="6" name="message" placeholder="Your message" />
                    </div>
                    <div className="col-7 form-group mx-auto">
                        <input className="form-control my-2 bg-dark text-light btn-outline-info" type="submit" value="Submit message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;