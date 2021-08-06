import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HomeNavbarComponent from './HomeNavbarComponent';
import HomeFooter from './HomeFooter';
import TodoList from './ToDoListComponents/TodoList'



class HomePageInfo extends Component {
    render() {
        return (
            <div className="homeImage">
                <MainHeader />
                <HomeNavbarComponent />
                <HomeFooter />
            </div>
        );
    }
}

const MainHeader = () => {
    return (
        <section className="MainHeading">
            <div>
                <h1>All Inclusive Planning Made Easy</h1>
                <h3>Sign up today to perform all your planning tracking needs in one place.</h3>
            </div>
            <div>
                <Button className="StartButton" type="submit">Start Planning!</Button>
            </div>
        </section>
    );
}


export default HomePageInfo;
