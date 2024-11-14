import React from "react";
import Digit from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({seconds, un, dec, cen, mil, dmil, cmil} ) => {

console.log(un)
	
	return (

		<div className="text-center p-5">

			<div className="row p-5  bg-dark">

				<div className="col">
					<Digit value={<FontAwesomeIcon icon={faClock} />} />
				</div>
				<div className="col">
					<Digit value={cmil}/>
				</div>
				<div className="col">
					<Digit value={dmil}/>
				</div>

				<div className="col">
					<Digit value={mil}/>
				</div>

				<div className="col">
					<Digit value={cen}/>
				</div>

				<div className="col">
					<Digit value={dec}/>
				</div>

				<div className="col">
					<Digit value={un}/>
				</div>
			
			</div>
		</div>
	);
};

export default Home;
