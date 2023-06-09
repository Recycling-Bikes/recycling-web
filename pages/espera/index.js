import { useRouter } from "next/router";
import React from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import EsperaComponent from "./component";

export default function Espera() {
	const router = useRouter();
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
				<form>
					<Row className="d-flex flex-row">
						<InputGroup className="mb-3">
							<Button
								variant="primary"
								className=" "
								onClick={() => {
									router.push(`${router.pathname}/uno`);
								}}
							>
								Comenzar
								<MdKeyboardArrowRight />
							</Button>
						</InputGroup>
					</Row>
				</form>
			</EsperaComponent>
		</>
	);
}
