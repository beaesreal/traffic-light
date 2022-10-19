import React, { useState } from "react";

//create your first component
const Home = () => {

	const [ selectedColor, setSelectedColor ] = useState ("red");
	//let selectedColor = "yellow";

	const [ purple, setPurple ] = useState (false);

	var addPurple = () => {
		console.log('add purple clicked')
		setPurple(!purple);
	}

	var handleClick = () =>{
		console.log('alternate colors clicked');
		var listOfColors = ["red", "yellow", "green"];
		var colorIndex = Math.round (Math.random()*2);
		setSelectedColor(listOfColors[colorIndex]);
	} 

	return (
		<div className="container text-center">

			<div className="stick-container">
				<div className="stick"></div>
			</div>

			<div className="traffic-light text-center">

				<div 
				onClick={() => setSelectedColor(("red"))}
				className={"light red" + (selectedColor === "red" ? " glow-r" : "")}></div>
				<div 
				onClick={() => setSelectedColor(("yellow"))}
				className={"light yellow" + (selectedColor === "yellow" ? " glow-y" : "")}></div>
				<div 
				onClick={() => setSelectedColor(("green"))}
				className={"light green" + (selectedColor === "green" ? " glow-g" : "")}></div>

				<div 
				onClick={() => setSelectedColor(("purple"))}
				className={"light purple" + (selectedColor === "purple" ? " glow-p" : "")}></div>


			</div>

			<div>
        	<button 
			type="button" 
			className="btn btn-alternate my-5 mx-2 p-2"
			onClick={handleClick}	
			>Alternate colors</button>

			<button 
			type="button" 
			className="btn btn-extra  my-5 mx-2 p-2"
			onClick={addPurple}
			>Add extra light</button>
        	</div>

		</div>
	);
};

export default Home;



/*
<div 
onClick={() => setSelectedColor(("purple"))}
className={"light purple" + (selectedColor === "purple" ? " glow-p" : "")}></div>


				{show && <div 
				className={"light purple" + (selectedColor === "purple" ? " glow-p" : "")
				}
				onClick={addPurple}></div>}


const listOfColors = ["red", "yellow", "green"];
	const [color, setColor] = useState ("red");

	const handleClick = () => {
		const colorIndex = Math.round(Math.random()*2);
		setColor(listOfColors[colorIndex]);
} 

{item.map((purple, input) => 
	(<div>
		{purple} className={"light purple" + (selectedColor === "purple" ? " glow-p" : "")} onClick={() => setSelectedColor(("purple"))}>
	</div>))}

*/
