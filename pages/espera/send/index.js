import { useRouter } from "next/router";
import React from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import EsperaComponent from "../component";

export default function Espera() {
	const router = useRouter();
	return (
		<>
			<EsperaComponent>
				<center>
					<p className=" text-secondary">
						Recibimos la información de tu bici soñada!
					</p>
					<p className="mb-5 text-secondary">
						Te avisaremos por correo electrónico apenas la tengamos en nuestras
						manos. También podrás ver tu lista de espera en el dashboard
						personal.
					</p>

					<Button
						variant="primary"
						className=" "
						onClick={() => {
							router.push("/parking");
						}}
					>
						Explorar otras bicis
						<MdKeyboardArrowRight />
					</Button>
				</center>
			</EsperaComponent>
		</>
	);
}
