import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row" sticky="bottom">
                    <div className="col-4 col-sm-2 mr-auto">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>About</Link></li>
                            <li><Link to='/aboutus'>Contact Us</Link></li>
                            <li><Link to='/contactus'>Start Planning!</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 ml-auto">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                    <div className="col-sm-4 ml-auto">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-000-000-0000</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> planner@planner.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;