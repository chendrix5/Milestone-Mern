import axios from 'axios'
import React, { useState } from 'react'
import image from '../images/vacation-page.webp'
import '../Create.css'

export default function VacaForm(props) {
    const [name, setName] = useState('')
    const [pic, setPic] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [season, setSeason]= useState('Spring')
    const [comment, setComment]= useState('')
    let setState = {name: setName, pic: setPic, city: setCity, country: setCountry, season: setSeason, comment: setComment}

    const handleChange = (event) => {
        // we need to update the name state variable
        setState[event.target.name](event.target.value)
        console.log(event)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // axios request goes here....
        axios.post('/add',
         {data: {name, pic, country, city, season, comment}})
         .then(result  => {return result.data}
            // put behavior here for what to do when post succeeds
        )
         .catch(err => {
            // put behavior here for what to do when post fails
            console.log(err)
         })

    }

    return (
        <form style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", height:1200, width:1202}} id="vacaform" onSubmit={handleSubmit}>
            <div className="name">
                <input type="text" id="name" value={name} name="name" onChange={handleChange} placeholder="Your Name" />
            </div>
            <div className="pic">
                <input type="url" id="pic" name="pic" value={pic} onChange={handleChange} placeholder="Enter Vacation picture" />
            </div>
            <div className="country">
                <input type="text" id="country" name="country" value={country} onChange={handleChange}  placeholder="Country" />
            </div>
            <div className="city">
                <input type="text" id="city" name="city" value={city} onChange={handleChange} placeholder="City" />
            </div>
            <div className="season">
                <label>Choose your season from the list:</label>

                <select id="season" name="season" value={season} onChange={handleChange}>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>

            <div className="comment">
                <input type="text" id="comment" className="comment" value={comment} onChange={handleChange} placeholder="Enter Comment" />
            </div>
            <input className="btn btn-warning" type="submit" value="Add Vacation" />
        </form>
    )
}