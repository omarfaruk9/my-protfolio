import React from 'react';
import { Link } from 'react-router-dom';
import './Myproject.css'

const MyProject = (props) => {
    const { id, img1 } = props.myPorject;
    // console.log(img1);
    return (
        <div >
            <div className="col project-card">
                <div className="project-card1">
                    <img src={img1} className="mypro card-img" alt="" />
                </div>
            </div>
            <div>
                <Link className="" to={`/projectDetals/${id}`}>
                    <div className="btn btn-danger mt-3">Details
                        <i class="fas mx-2 fa-info-circle"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MyProject;