import React from 'react';
// import Navbar from '../Shared/Navbar/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MyProjects></MyProjects>
            <MySkills />
            <Contact></Contact>
        </div>
    );
};


export default Home;