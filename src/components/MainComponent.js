import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePageInfo from './HomePageInfo';
import FooterComponent from './FooterComponent';
import ContactUs from './ContactUsComponent';

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
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}
export default Main;

