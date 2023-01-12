import React from 'react'

import { Link } from 'react-router-dom'


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
        </div>
    )
}