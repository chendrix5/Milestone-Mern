import React from 'react';

import { Link } from 'react-router-dom';


import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Vacations.css'
import image from './images/vacation-page.webp'


export default function Vacations(props){
    const displayVacations = props.vacations.map((eachVacation)=> <li>{eachVacation}</li>)
    
    return(
        <div style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", height:1200, width:1202}}>
            <div className="vactaions" class="vacations">
                <div className="vacationsHeader" class="vacationsHeader">
                    <h1> Vacation Spots</h1>
                    <Link to="/addVacation" class="addVacation">Create Vacation</Link>
                </div>
                <ul>
                    {displayVacations}
                </ul>
            </div>
            <div>
            <img src="./images/vacation-page.webp" alt="Vacation" />
        </div>
        </div>
    )
}