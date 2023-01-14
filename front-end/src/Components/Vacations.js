import React from 'react'

import { Link } from 'react-router-dom'


import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Vacations(props){
    const displayVacations = props.vacations.map((eachVacation)=> <li>{eachVacation}</li>)
    
    return(
        <div>
            <div className="vactaions">
                <div className="vacationsHeader">
                    <h1> Vacation Spots</h1>
                    <Link to="/addVacation" >Create Vacation</Link>
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