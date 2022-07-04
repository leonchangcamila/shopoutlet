import React from "react";
import FooterPage from "../components/StaticComponents/FooterPage";

const About = () => {
	return (
		<div class="mainAcerca" id="acercaDe">
			<br />
			<h2>Nosotros</h2>
			<div class="article container" style={{ textAlign: "left" }}>
				<br />
				<p>
					Nuestro objetivo es ofrecer la mejor calidad en tecnología, también tomamos pedidos
					para el interior del país.
					Contamos con 5 sucursales;  a continuacion les dejamos las ubicaciones con el contacto
				</p>
				<br />
				<p>
					Av. Sarmiento 456 Whatsaap:1198745632 // 
					Av. Cordoba 235 Whatsaap:1178945612 //
					Av. Juan Manuel de Rosas 125 Whatsaap:1123456789   //  
					Av. Pueyrredon 369 Whatsaap: 1125436098 //
					Av. Corrientes 758 Whatsaap:1147256839

				</p>
			</div>

			<FooterPage />
		</div>
	);
};

export default About;