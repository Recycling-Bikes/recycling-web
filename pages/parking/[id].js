import { useEffect } from "react";
import Main from "components/main";
import Article from "../../components/Articulos/Article";
import Descriptons from "components/publicacion/vender";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Carractristicas from "components/publicacion/Caracteristicas";
import Vista from "components/publicacion/Vista";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import Custom404 from "pages/404";
import { parkingState } from "context/Parking/ParkingState";
import Buttons from "components/publicacion/vender/buttons";
import Promesas from "components/publicacion/vender/promesas";
import Head from "next/head";
import { CDN } from "utils/constantes";

const Vender = () => {
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		console.log("rendering principal");
	});

	const bici = parkingState((state) => state.bici);

	const setBici = parkingState((state) => state.setBici);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["productos", id],
		queryFn: () => setBici(id),
	});

	if (isLoading) {
		return (
			<Main>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "90hv",
						textAlign: "center",
					}}
				>
					<Spinner
						animation="border"
						variant="secondary"
						style={{ width: "200px", height: "200px", fontSize: "90px" }}
					/>
				</div>
			</Main>
		);
	}
	if (isError) {
		return <Custom404 />;
	}

	return (
		<>
			<Head>
				<meta property="og:title" content={`${data?.title}`} />
				<meta property="og:description" content={`${data?.description}`} />
				<meta property="og:url" content={`https://www.recyclingbikes.co${router.asPath}`} />
				{/* <meta property="og:image" content={`${CDN}${data?.filesUrl[0]}`} /> */}
				<meta property="product:brand" content={`${data?.propiedades?.brands?.name}`} />
				<meta property="product:availability" content={`${data?.status?.name}`} />
				<meta
					property="product:condition"
					content={`${data?.conditions}`}
				/>
				<meta
					property="product:price:amount"
					content={`${data?.price?.toLocaleString("en")}`}
				/>
				<meta property="product:price:currency" content="USA" />
				<meta property="product:retailer_item_id" content={`${data?.id}`} />
				<meta property="product:item_group_id" content="fb_bicis" />
			</Head>
			<Main>
				<Container>
					<Row className="d-flex justify-content-center">
						<Row>
							<Col className="pb-4">
								<Vista />

								<div className=" d-lg-none   ">
									<Buttons />
								</div>

								<Carractristicas />

								<div className=" d-lg-none   ">
									<Promesas />
								</div>
							</Col>
							<Col
								sm="100"
								md="auto"
								lg="5"
								xl="5"
								xxl="4"
								className="d-none d-lg-block mt-5"
							>
								<Descriptons />
							</Col>
						</Row>
					</Row>
				</Container>

				<Article Title="Explora más bicis" />
			</Main>
		</>
	);
};

export default Vender;
