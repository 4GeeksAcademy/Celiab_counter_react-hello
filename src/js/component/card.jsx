import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Digit = (props) => {
	
	return (
		<div className="card text-white bg-dark p-5 ">
            <div className="card-header"><h1>{props.value}</h1></div>
        </div>
	);
};
Digit.propTypes = {
	value: PropType.number
	
};


export default Digit;