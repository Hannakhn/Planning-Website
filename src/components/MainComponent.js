import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './ContactUsComponent';
import HomePageInfo from './HomePageInfo';
import AboutUs from './AboutUsComponent';


class Main extends Component {
    constructor(props) {
        super(props);

    };


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomePageInfo} />
                    <Route exact path='/contactus' component={ContactUs} />
                    <Route exact path='/aboutus' component={AboutUs} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}
export default Main;

