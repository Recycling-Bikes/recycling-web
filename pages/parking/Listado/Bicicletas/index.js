import { Button, Card, Col, Row } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import FiltersMobile from "../FiltersMobile";
import GetBicis from "./bicis";

import { Suspense } from "react";

export default function Bicicletas({ page, initialPage }) {
	return (
		<div>
			<Card className="my-3 lg w-100" style={{ width: "auto" }}>
				<Card.Body>
					<Row className=" align-items-center">
						{" "}
						<Col>
							<Card.Title>Guarda tu búsqueda</Card.Title>
							<Card.Text>
								Filtra tus resultados, y recibe una notificación cuando lleguen
								nuevos productos coincidentes.
							</Card.Text>
						</Col>
						<Col lg="auto" className="d-grid gap-2 py-3">
							<Button style={{ width: "auto" }} variant="outline-primary">
								{/* //Add bell */}
								<BsBell className="me-2" />
								Notificarme
							</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>

			{/* FiltersMobile */}
			<div className="justify-content-center">
				<FiltersMobile className="d-block d-xl-none" />
			</div>
			<Suspense>
				<GetBicis page={page} initialPage={initialPage} />
			</Suspense>
		</div>
	);
}
