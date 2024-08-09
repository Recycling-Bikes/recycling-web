import Main from "components/main";
import { Col, Container, Row } from "react-bootstrap";
import Bicicletas from "./Listado/Bicicletas";
import Filtro from "./Listado/Filtro";

import wretch from "wretch";

export const getServerSideProps = async (a, b) => {
	const page = Number.isNaN(Number(a.query.page)) ? 1 : Number(a.query.page);

	const isDev = process.env.NODE_ENV !== "production";

	const protocol = isDev ? "http" : "https";

	const initialPage = await wretch(
		`${protocol}://${a.req.headers.host}/api/allbicis`,
	)
		.post({
			currentPage: page,
			pageSize: 24,
		})
		.json()
		.catch((err) => undefined);
	return { props: { page, initialPage } };
};

export default function Todasbicis(props) {
	return (
		<Main>
			<Container className="my-5">
				<Row>
					<h2 className="px-4">Estas bicis son para ti</h2>
				</Row>
				<Row>
					<Col className="px-4 d-none d-xl-grid" xl="3">
						<Filtro />
					</Col>
					<Col className="separador">
						<Bicicletas page={props.page} initialPage={props.initialPage} />
					</Col>
				</Row>
			</Container>
		</Main>
	);
}
