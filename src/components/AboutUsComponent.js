import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function AboutUs() {
    return (
        <div>
            <Header />
            <h1 className="AboutTitle">Who We Are</h1>
            <div className="AboutPlanner">
                <Card>
                    <CardImg src="../images/AboutPagePlanner.jpg" alt="About us Photo" />
                </Card>
            </div>
            <div>
                <p className="AboutText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;