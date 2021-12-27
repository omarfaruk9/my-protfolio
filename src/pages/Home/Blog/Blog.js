import React from 'react';
import './Blog.css';
import { Container } from 'react-bootstrap';
import './Blog.css'
import img from '../../../Images/projects/Screenshot 2021-11-29 at 21-58-16 Online Shop.png'

const Blog = () => {
    return (
        <Container>
            <div className="text-center my-5">
                <h1>Recent Blogs</h1>
            </div>
            <div className="row row-cols-lg-3 g-4 py-5">
                <div className="div shadow-lg p-3">
                    <img src="https://i.postimg.cc/C58tPDFL/Screenshot-2021-12-01-182136.png" alt="" className="img-fluid blog-img" />
                    <div className="div">
                        <h3 className="my-3">Case studies</h3>
                        <p>
                            Several months of work to improve Core Web Vitals on the home page of Mail.ru resulted in a 60% increase in the 75th percentile in Cumulative Layout Shift (CLS), boosting average session time by 2.7% and conversion rates of core sections by more than 10%.
                        </p>
                    </div>
                </div>
                <div className="div shadow-lg p-3">
                    <img src="https://i.postimg.cc/MKgzHKQw/Screenshot-2021-12-01-180328.png" alt="" className="img-fluid blog-img" />
                    <div className="div">
                        <h3 className="my-3">Case studies</h3>
                        <p>
                            Several months of work to improve Core Web Vitals on the home page of Mail.ru resulted in a 60% increase in the 75th percentile in Cumulative Layout Shift (CLS), boosting average session time by 2.7% and conversion rates of core sections by more than 10%.
                        </p>
                    </div>
                </div>
                <div className="div shadow-lg p-3">
                    <img src="https://i.postimg.cc/LX1zY5JK/Screenshot-2021-12-01-194843.png" alt="" className="img-fluid blog-img" />
                    <div className="div">
                        <h3 className="my-3">Case studies</h3>
                        <p>
                            Several months of work to improve Core Web Vitals on the home page of Mail.ru resulted in a 60% increase in the 75th percentile in Cumulative Layout Shift (CLS), boosting average session time by 2.7% and conversion rates of core sections by more than 10%.
                        </p>
                    </div>
                </div>
                <div className="div shadow-lg p-3">
                    <img src="https://i.postimg.cc/LX1zY5JK/Screenshot-2021-12-01-194843.png" alt="" className="img-fluid" />
                    <div className="div">
                        <h3 className="my-3">Case studies</h3>
                        <p>
                            Several months of work to improve Core Web Vitals on the home page of Mail.ru resulted in a 60% increase in the 75th percentile in Cumulative Layout Shift (CLS), boosting average session time by 2.7% and conversion rates of core sections by more than 10%.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blog;