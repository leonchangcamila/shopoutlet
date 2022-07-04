import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<br />
			<h2>ERROR 404</h2>
			<br />
			<img src="" alt="siga buscando" />
			<br /> <br />
			<Link style={{ textDecoration: "none" }} to={`/`}>
				<strong>Inicio</strong>
			</Link>
		</div>
	);
};

export default NotFound;