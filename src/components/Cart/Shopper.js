// --imports de firebase--
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { total } from "../../views/Cart";
import LoadingSpinner from "../StaticComponents/LoadingSpinner";
import MessageSuccess from "../StaticComponents/MessageSuccess";

const Shopper = () => {
	const { carrito } = useContext(CartContext);
	const [orderId, setOrderId] = useState("");
	const [creatingOrder, setCreatingOrder] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		emailConfirm: "",
		contacto: ""
	});

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const sendOrder = e => {
		e.preventDefault();
		setCreatingOrder(true);

		delete formData.emailConfirm;

		//objeto con info del comprador y su orden
		const newOrder = {
			user: formData,
			date: Timestamp.fromDate(new Date()),
			items: carrito,
			total: total
		};

		const orderCollection = collection(db, "Orders");
		addDoc(orderCollection, newOrder)
			.then(resp => setOrderId(resp.id))
			.catch(err => console.log(err))
			.finally(() => {
				setCreatingOrder(false);

				setFormData({ name: "", email: "", emailConfirm: "", contacto: "" });
			});
	};

	const clear = () => {
		carrito.clear();
	};

	return (
		<div>
			<div
				className="globalContainer"
				data-aos="fade-up"
				data-aos-duration="500"
			>
				{creatingOrder ? (
					<div className="isLoading">
						<LoadingSpinner />
					</div>
				) : orderId ? (
					<div className="container finContainer">
						<div
							className="py-5 text-center txt mt-2"
							data-aos="fade-up"
							data-aos-duration="500"
						>
							<h2 className="mt-3">
								{orderId && (
									<MessageSuccess
										purchaseID={orderId}
										text="¡Gracias por su compra! Su id de transacción es: "
									/>
								)}
							</h2>

							<br />
							<Link style={{ textDecoration: "none" }} to={`/`} onClick={clear}>
								<strong> Volver al inicio</strong>
							</Link>
							<p>
								(Guarda tu comprobante, al clickear volver al inicio, se vaciará
								su carrito.)
							</p>
						</div>
					</div>
				) : (
					<div className="formContainer">
						<div className="container mt-2 form__container d-flex">
							<div className="container align-self-center position-relative">
								<div className="row">
									<div className="col-12">
										<form
											className="d-flex flex-column"
											onSubmit={sendOrder}
											onChange={handleChange}
										>
											<div className="mb-3 d-flex flex-column align-items-center">
												<label className="form-label">Nombre y Apellido</label>
												<input
													type="name"
													className="form-control form-control--color"
													name="name"
													defaultValue={formData.name}
													required
												/>
											</div>
											<div className="mb-3 d-flex flex-column align-items-center">
												<label className="form-label">Teléfono</label>
												<input
													type="number"
													className="form-control form-control--color"
													name="phone"
													defaultValue={formData.phone}
													required
												/>
											</div>
											<div className="mb-3 d-flex flex-column align-items-center">
												<label className="form-label">E-mail</label>
												<input
													type="email"
													className="form-control form-control--color"
													name="email"
													defaultValue={formData.email}
													required
												/>
											</div>
											<div className="mb-3 d-flex flex-column align-items-center">
												<label className="form-label">Confirmar Email</label>
												<input
													type="email"
													className="form-control form-control--color"
													name="emailConfirm"
													defaultValue={formData.emailConfirm}
													required
												/>
											</div>
											<button
												className="btscs d-flex justify-content-center w-50 align-self-center btn btn-info"
												disabled={
													!formData.name ||
													!formData.phone ||
													!formData.email ||
													formData.email !== formData.emailConfirm ||
													carrito.length === 0
												}
											>
												Confirmar pedido
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						<br />
					</div>
				)}
			</div>
		</div>
	);
};

export default Shopper;