import React from "react";

// imports
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import FooterPage from "../components/StaticComponents/FooterPage";

function Home() {
	return (
		<div>
			<main className="listaProductos">
				{/* le entrego un texto por prop a ItemListContainer */}
				<ItemListContainer saludo="Bienvenidos a Shop Outlet"></ItemListContainer>
			</main>
			<FooterPage />
		</div>
	);
}

export default Home;