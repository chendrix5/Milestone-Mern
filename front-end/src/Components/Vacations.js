export default function Vacations(props){
    const displayVacations = props.vacations.map((eachVacation)=> <li>{eachVaction}</li>)

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