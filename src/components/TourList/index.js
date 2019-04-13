import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';

class TourList extends Component {

    state ={
        tours:[]
    }
    render() {
        return (
            <div>
                <section className = "tourList">
                    <Tour />
                </section>
            </div>
        );
    }
}

export default TourList;