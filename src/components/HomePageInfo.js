import React, { Component } from 'react';



class HomePageInfo extends Component {
    render() {
        return (
            <div>
                <MainHeader />
            </div>
        );
    }
}

const MainHeader = () => {
    return <section className="MainHeading">
        <h1>All Inclusive Planning Made Easy</h1>
        <h3>Sign up today to perform all your planning tracking needs in one place.</h3>
    </section>
}


export default HomePageInfo;
