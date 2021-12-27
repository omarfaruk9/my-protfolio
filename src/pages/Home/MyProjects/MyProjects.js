import React, { useState } from 'react';
import './MyProjects.css';
import fakeData from '../../../fakedata/projects.json';
import MyProject from '../MyProject/MyProject';

const MyProjects = () => {
    const [myProjects, setMyprojects] = useState(fakeData);
    // console.log(my);
    return (
        <div className="container my-5">
            <div className="projects">
                <div className="text-center py-5">
                    <h2 className="name">My Projects</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet non magni sunt.
                    </p>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        myProjects.map(myPorject => <MyProject
                            key={myPorject.id}
                            myPorject={myPorject}
                        ></MyProject>)
                    }

                    {/* <div className="col">
                        <div className="project-card">
                            <img src={img1} className="card-img-top img-fluid mypro" alt="..." />
                        </div>
                        <div>
                            <button className="btn btn-outline-dark text-light btn-success mt-3">See More</button>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default MyProjects;