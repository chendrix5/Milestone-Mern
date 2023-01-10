function Create(){
    return(
        <form method="POST" action="/Vactions">
            <div>
                <input type="text" name="name" placeholder="Your Name"/>
            </div>
            <div>
                <input type="url" id="pic" name="pic" placeholder="Enter Vacation picture"/>
            </div>
            <div>
                <input type="text" id="country" name="country" placeholder="Country"/>
            </div>
            <div>
                <input type="text" id="city" name="city" placeholder="City"/>
            </div>
               <div>
                    <label for="browser">Choose your season from the list:</label>
                    <input list="browsers" name="browser" id="browser"/>

                        <datalist id="browsers">
                            <option value="Spring"></option>
                            <option value="Summer"></option>
                            <option value="Fall"></option>
                            <option value="Winter"></option>
                        </datalist>
                </div>

            <div>
                <input type="text" id="comment" name="comment" placeholder="Enter Comment"/>
            </div>
        <input type="submit" value="Add Vacation>"/>
        </form>
    )
}