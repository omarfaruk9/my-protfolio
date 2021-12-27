import React from 'react';
import './ProjectsDetails.css'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import projectsDetails from '../../fakedata/projects.json';
import { Link } from 'react-router-dom';


const ProjectsDetails = () => {
    const { projectId } = useParams();
    const details = projectsDetails.find(project => project.id == projectId);
    const { project_name, img1, img2, img3, img4, desc1, desc2, desc3, tec } = details;
    console.log(details);
    return (
        <Container className="">
            <div className="div details">
                <div className="text-center">
                    <h1>Projects Details</h1>
                </div>
                <div className="row row-cols-lg-2">
                    <div className="projct-img">
                        <img src={img2} className="w-50 p-3 d-img" alt="" />
                        <img src={img3} className="w-50 p-3 d-img" alt="" />
                        <img src={img4} className="w-50 p-3 d-img" alt="" />
                    </div>
                    <div className="projct-info">
                        <div className="info mb-2">
                            <h3>{project_name}</h3>
                            <li>{desc1}</li>
                            <li>{desc2}</li>
                            <li>{desc3}</li>
                        </div>
                        <h3 className="my-3">Tecnolgy Used:</h3>
                        <div className="row row-cols-lg-5 g-3">
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.html}</h6>
                            </div>
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.css}</h6>
                            </div>
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.react}</h6>
                            </div>
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.react_boot}</h6>
                            </div>
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.firebase}</h6>
                            </div>
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.TypeW}</h6>
                            </div>
                            <div className="skill">
                                <h6 className="bg-info px-3 py-2 rounded-circle d-flex justify-content-center align-items-center">{tec.font_aw}</h6>
                            </div>
                        </div>

                        <button className="btn d-block btn-success mt-3">
                            <a href="https://fitness-bd-a2b9f.web.app/" target="blank" className="text-light text-decoration-none">See More</a>
                        </button>
                        <Link to="/" className="d-block">
                            <button className="btn btn-success mt-3">Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectsDetails;