/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Breadcrumb, Carousel, Col, Row } from "react-bootstrap";

import { parkingState } from "context/Parking/ParkingState";
import Image from "next/image";
import { CDN } from "utils/constantes";

export default function Vista() {
	const [bici] = parkingState((state) => [state.bici]);

	const [primaryVista, setPrimaryVista] = useState(
		bici?.filesUrl?.[0]
			? bici.filesUrl[0]
			: "https://via.placeholder.com/500x500",
	);

	return (
		<>
			<Row className="mt-4">
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item href="/parking">Parking</Breadcrumb.Item>
					<Breadcrumb.Item active>SKU: {bici.id}</Breadcrumb.Item>
				</Breadcrumb>
			</Row>
			<Row>
				<Col md="2" className="d-none d-lg-block">
					{bici?.filesUrl?.map((link) => (
						// <Image
						// 	src={CDN + link}
						// 	alt="imagen bicicleta"
						// 	key={link}
						// 	width={50}
						// 	height={50}
						// 	className="m-2 cover"
						// 	onClick={() => setPrimaryVista(link)}
						// />
						<img src={CDN + link}
							alt="imagen bicicleta"
							key={link}
							width={50}
							height={50}
							className="m-2 cover"
							onClick={() => setPrimaryVista(link)} loading="lazy" />
					))}
				</Col>
				<Col className="d-none d-lg-block" style={{ height: "620px" }}>
					{/* <Image
						src={CDN + primaryVista}
						height={500}
						width={500}
						alt="imagen bicicleta"
						style={{
							maxHeight: "600px",
						}}
						className="img-fluid p-0"
					/> */}
					<img 
						src={CDN + primaryVista}
						height={500}
						width={500}
						alt="imagen bicicleta"
						style={{
							maxHeight: "600px",
						}}
						className="img-fluid p-0" loading="lazy"  />
						
				</Col>

				<Col className="d-lg-none">
					<Carousel style={{ height: "70vw" }}>
						{bici?.filesUrl?.map((link) => (
							<Carousel.Item key={link} style={{ maxHeight: "70vw" }}>
								<img
									style={{ maxHeight: "70vw" }}
									src={CDN + link}
									className="d-block w-100 img-fluid"
									alt="First slide"
									loading="lazy" 
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</>
	);
}
