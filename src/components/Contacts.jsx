import React, {Component} from 'react';
import {BASE_URL} from "../utils/constants.js";

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            planets:[],
            title: '',
            destination: '',
            textArea: ''
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.textArea) {
            alert("Title and Text Area are required fields.");
            return;
        }
        const letter = {
            title: this.state.title,
            destination: this.state.destination,
            textArea: this.state.textArea
        };
        sessionStorage.message = JSON.stringify(letter);
        this.setState({
            title: '',
            destination: '',
            textArea: ''
        });
    }

    componentDidMount() {
        if (!sessionStorage.planets) {
        fetch(`${BASE_URL}/v1/planets`)
            .then(response => response.json())
            .then (data => {
                const planets = data.map(item => item.name);
                this.setState({
                    isLoading: false,
                    planets: planets
                });
                sessionStorage.planets = JSON.stringify(planets);


                });
        } else {
            this.setState({
                isLoading: false,
                planets: JSON.parse(sessionStorage.planets)
            })
        }

    }




    render()
        {
            if(this.state.isLoading){
                return(
                    <div className="spinner-border text-success"></div>
                )
            } else {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" name="title"
                           value={this.state.title} onChange={this.handleInputChange}
                           placeholder="The subject of your letter"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Choose the destination</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="destination"
                            value={this.state.destination}
                            onChange={this.handleInputChange}>
                        {this.state.planets.map((name, index) => (
                            <option key={index} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="textArea"
                              value={this.state.textArea}
                              onChange={this.handleInputChange} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2 mb-2q">Submit</button>
            </form>
        );
            }
        }
}

export default Contacts;