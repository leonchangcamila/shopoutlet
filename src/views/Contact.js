import React, { useState } from "react";

// firebase
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

// import compo
import LoadingSpinner from "../components/StaticComponents/LoadingSpinner";
import FooterPage from "../components/StaticComponents/FooterPage";
import MessageSuccess from "../components/StaticComponents/MessageSuccess";

const Contact = () => {
	const [messageId, setMessageId] = useState("");
	const [creatingMes, setCreatingMes] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		messageText: ""
	});

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const submitMessage = e => {
		e.preventDefault();
		setCreatingMes(true);

		//objeto con info del comprador y su orden
		const newMessage = {
			message: formData,
			date: Timestamp.fromDate(new Date())
		};

		const orderCollection = collection(db, "Contact");
		addDoc(orderCollection, newMessage)
			.then(resp => setMessageId(resp.id))
			.catch(err => console.log(err))
			.finally(() => {
				setCreatingMes(false);
				setFormData({ name: "", surname: "", email: "", messageText: "" });
			});
	};

	return (
		<div className="mainContact" id="contacto">
			<div className="textoContacto container">
				<br />
				<h2>Contáctanos</h2>
				<p>
					Cualquier consulta, contactese con nosotros, responderemos a la
					brevedad.
				</p>
				{creatingMes ? (
					<div className="isLoading">
						<LoadingSpinner />
					</div>
				) : messageId ? (
					<div className="exito">
						{messageId && (
							<MessageSuccess
								purchaseID={messageId}
								text="Hemos recibido su mensaje y fue asignado con el número: "
							/>
						)}
					</div>
				) : (
					<div
						className="formita container"
						style={{ justifyContent: "center" }}
					>
						<div className="row">
							<form
								name="formis"
								className="formContact container col-lg-5 col-md-12"
								onSubmit={submitMessage}
								onChange={handleChange}
							>
								<label htmlFor="name" className="col-lg-form-label">
									Nombre:
								</label>
								<br />
								<input
									className="form-control"
									type="text"
									id="name"
									name="name"
									rows="1"
									cols="45"
								/>
								<label htmlFor="sname" className="form-label">
									Apellido:
								</label>
								<br />
								<input
									className="form-control"
									type="text"
									id="surname"
									name="surname"
								/>
								<label htmlFor="mail" className="form-label">
									Correo electrónico:
								</label>
								<input
									className="form-control"
									type="email"
									id="email"
									name="email"
								/>
								<label htmlFor="mensaje" className="form-label">
									Escriba un mensaje:
								</label>
								<textarea
									className="form-control"
									id="messageText"
									name="messageText"
									rows="12"
									cols="45"
								></textarea>
								<br />
								<button
									className="btn btn-info"
									disabled={
										!formData.name ||
										!formData.surname ||
										!formData.email ||
										!formData.messageText
									}
								>
									Enviar
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
			<FooterPage />
		</div>
	);
};

export default Contact;