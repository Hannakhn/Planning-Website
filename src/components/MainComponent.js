import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './ContactUsComponent';
import HomePageInfo from './HomePageInfo';
import AboutUs from './AboutUsComponent';
import StickyNotes from './StickyNotesComponent/StickyNotes';
import TodoList from './ToDoListComponents/TodoList';
import Calendar from './CalendarComponent';

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
                    <Route exact path='/calendar' component={Calendar} />
                    <Route exact path='/stickynotes' component={StickyNotes} />
                    <Route exact path='/todolist' component={TodoList} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;

