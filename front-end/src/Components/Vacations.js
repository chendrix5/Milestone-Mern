import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import {useState} from 'react'



import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Vacations.css'
import image from '../images/vacation-page.webp'
import axios from 'axios';


export default function Vacations(){
    const [vacations, setVacations] = useState([])
    const displayVacations = vacations.map((eachVacation)=> <li>{eachVacation}</li>)

    useEffect(()=>{
        axios.get('/vacations')
            .then(response => {
                // handle the positive response from the server
                setVacations(response.data)
            })
            .catch(err => {
                // handle any errors
                console.log(err)
            })
    }, [])
     
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
        </div>
    )
}