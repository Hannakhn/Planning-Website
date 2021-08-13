import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HomeNavbarComponent from './HomeNavbarComponent';
import HomeFooter from './HomeFooter';
import TodoList from './ToDoListComponents/TodoList';
import StickyNotes from './StickyNotesComponent/StickyNotes';
import { Link } from 'react-router-dom';



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
                <Link to="/calendar" className="btn" id='StartButton'>Start Planning</Link>
            </div>
        </section>
    );
}


export default HomePageInfo;
