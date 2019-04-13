import React, { Component } from 'react';
import "./Tour.scss"

class Tour extends Component {
    render() {
        return (
            <article className="tour">
              <div className="img-container">
                    <img
                        width="200"
                        src="https://images.pexels.com/photos/2089799/pexels-photo-2089799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <span className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>City</h3>
                    <h4>name</h4>
                    <h5>info <span><i className="fas fa-caret-square-down"></i></span></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae</p>
                </div>
            </article>
        );
    }
}
export default Tour;