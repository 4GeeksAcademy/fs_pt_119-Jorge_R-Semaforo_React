import React, { useState, } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState(null);

	const lightOn = (color) => {
		setColor(color);
		console.log(color);
	};
	return (
		<div className="semaforo">
			<div className={`rojo ${color === "rojo" ? "encendido" : ""}`}
			onClick={() => lightOn("rojo")}
			 ></div>
			<div  className={`amarillo ${color === "amarillo" ? "encendido" : ""}`}
        onClick={() => lightOn("amarillo")}>
				
			</div>
			<div className={`verde ${color === "verde" ? "encendido" : ""}`}
        onClick={() => lightOn("verde")}>
				
			</div>


		</div>
		
		
	);
};

export default Home;