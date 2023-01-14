import React from 'react';
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css'
import image from "./images/eiffel-tower-in-paris.jpg"


export default function Home (){
    
    return(
        <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", height:1500, width:1202 }} className="homepage" class="homepage">
            <h1>Vacation Spots</h1>
            
            <h2> Welcome to a new website that is a pool of vacation spots that anyone can add to</h2>

            <h2>Visit the "Vacations" tab to browse new vacation spots or add your own</h2>

            <h2>Help others find a new vacation spot, and even find one for yourself</h2>
        </div>
    )
}

