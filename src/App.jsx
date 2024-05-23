import React, {Component} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";
import {navigationItems} from "./utils/constants.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: navigationItems[0]
        }
    }

    changePage = currentPage=>{
        this.setState({currentPage})
    }

    render() {
        return (
            <div>
                <Header changePage={this.changePage}/>
                <Switcher currentPage={this.state.currentPage}/>
                <Footer/>
            </div>
        );
    }
}

export default App;