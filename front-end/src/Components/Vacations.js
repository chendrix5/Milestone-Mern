import React from 'react';
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Vacations(props){
    const displayVacations = props.vacations.map((eachVacation)=> <li>{eachVacation}</li>)

    return(
        <div>
            <div className="vactaions">
                <div className="vacationsHeader">
                    <h1> Vacation Spots</h1>
                </div>
                <ul>
                    {displayVacations}
                </ul>
            </div>
        </div>
    )
}