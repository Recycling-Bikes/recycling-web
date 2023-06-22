import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import EsperaComponent from "./component";
import { PopLogin } from "context/modal/userIsLogin";
import { userState } from "context/User/UserState";

export default function Espera() {
	const router = useRouter();

	const [ModalShow, setModalShow] = useState(false);

	const confirmUser = userState((state) => state.confirmUser);

	const userStatus = async () => {
		const { user } = await confirmUser();

		console.log("🚀 ~ file: Presentation.js:16 ~ userStatus ~ user:", user);

		user ? router.push("/espera/uno") : setModalShow(true);
	};

	return (
		<>
			<EsperaComponent>
				<h1 style={{ color: "#06433D", fontStyle: "medium" }}>
					¿Aún no encuentras la bici de tus sueños? ¡Te ayudamos a rodar!
				</h1>
				<p className="mb-5 text-secondary">
					Cuéntanos más sobre lo que estás buscando, moveremos cielo y tierra
					por conseguirlo para ti :){" "}
				</p>

				<Row className="d-flex flex-row">
					<InputGroup className="mb-3">
						<Button
							variant="primary"
							className=" "
							onClick={() => {
								/* router.push(`${router.pathname}/uno`); */
								userStatus();
							}}
						>
							Comenzar
							<MdKeyboardArrowRight />
						</Button>
					</InputGroup>
				</Row>

				<PopLogin
					ModalShow={ModalShow}
					setModalShow={setModalShow}
					router={"/espera/uno"}
				/>
			</EsperaComponent>
		</>
	);
}
