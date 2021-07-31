import React from 'react';
import { Link } from 'react-router-dom';

function HomeFooter(props) {
    return (
        <footer className="home-site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-5 text fixed-bottom">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default HomeFooter;