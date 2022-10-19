import React, { useState } from "react";

//create reset button
const Alternate = () => {

    const [ alternateColor, setSelectedColor ] = useState ("red");

    return (
        <div>
        <button type="button" className="btn btn-primary mt-3">Alternate color</button>
        </div>
        
    )
}

export default Alternate;