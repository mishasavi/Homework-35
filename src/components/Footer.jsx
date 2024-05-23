import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="row align-items-center">
                <div className="btn btn-danger col-2 offset-2 h-50">
                    <p className="text-center m-0" onClick={() => alert("savinov@example.com")}>Send me an <span className="email"
                    >email</span></p>
                </div>
            </footer>
        );
    }
}

export default Footer;