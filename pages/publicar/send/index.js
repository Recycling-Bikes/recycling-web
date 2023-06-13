import Main from "components/main";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	FormGroup,
	InputGroup,
	Row,
} from "react-bootstrap";

import * as yup from "yup";
import Progres2 from "./progres2";

import { yupResolver } from "@hookform/resolvers/yup";
import { FPState } from "context/FormPublications/FPstate";
import { useForm } from "react-hook-form";
import shallow from "zustand/shallow";

import InputFile2 from "components/Custom/InputFile/inputFile2";
import { userState } from "context/User/UserState";
import PopCommission from "../modal/Commission";
import PopPublicationSave from "../modal/savePubication";

const schema = yup.object().shape({
	description: yup.string(),
	title: yup.string().required("El titulo es requerido"),
	price: yup.number().required("El precio es requerida"),
	files: yup
		.array()
		.required("Se deben subir archivos")
		.min(1, "Se deben subir mínimo 1 archivo"),
	terms: yup.bool().oneOf([true], "Debes aceptar los terminos y condiciones"),
});

export default function Partdos() {
	const [Commission, setCommission] = useState(false);

	const [savePublication, setSavePublication] = useState(false);

	const user = userState((state) => state.user);

	const [publication, form, name] = FPState(
		(state) => [state.publication, state.form, state.name],
		shallow,
	);

	const [button, setButton] = useState(false);

	const { setPublication, setForm, UpdateImages, clearAll, postPublication } =
		FPState();

	useEffect(() => {
		if (!form.brands || !form.models) {
			setForm();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const {
		handleSubmit,
		register,
		setError,
		control,
		formState: { isValid, errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: { ...publication },
	});

	const onSubmit = async (items) => {
		setButton(true);
		try {
			const filesUrl = await UpdateImages(items.files, user.id);

			const newItems = {
				...items,
				filesUrl,
				user_id: user.id,
			};
      
			console.log("🚀 ~ file: index.js:77 ~ onSubmit ~ items:", newItems);

			await setPublication(newItems);

			await postPublication(newItems);

			await clearAll();

			/* router.push("/parking"); */
			setSavePublication(true);
		} catch (err) {
			setError("general", err);
			console.log(err);
		}

		setButton(false);
	};

	return (
		<Main>
			<Container>
				<Row className="justify-content-md-center">
					<Col md="8" xl="6">
						<Form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
							<Progres2 />
							<div className="my-5">
								<Row className="mb-3">
									<Form.Group as={Col} controlId="title">
										<Form.Label>Titulo</Form.Label>
										<Form.Control
											{...register("title")}
											isInvalid={errors.title}
											defaultValue={name}
										/>
										<Form.Control.Feedback type="invalid">
											{errors?.title?.message}
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group as={Col} controlId="validationCustomUsername">
										<Form.Label>Precio</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text>$</InputGroup.Text>
											<Form.Control
												isInValue={errors?.price}
												{...register("price")}
											/>
											<Form.Control.Feedback type="invalid">
												{errors?.price?.message}
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>
								</Row>

								<div className="d-flex flex-row-reverse">
									<Button
										variant="outline-primary"
										onClick={() => setCommission(true)}
									>
										Ver comisiones
									</Button>
								</div>

								<Form.Group className="mb-3" controlId="formGridAddress1">
									<Form.Label>Descripción</Form.Label>
									<FloatingLabel controlId="description">
										<Form.Control
											as="textarea"
											className="p-2"
											isInValue={!errors?.description}
											style={{ height: "100px" }}
											{...register("description")}
										/>
									</FloatingLabel>
									<Form.Control.Feedback type="invalid">
										{errors?.description?.message}
									</Form.Control.Feedback>
								</Form.Group>

								<FormGroup className="mb-3">
									<InputFile2
										multiple={true}
										{...register("files")}
										isInValue={errors?.files}
									/>

									{errors?.files ? (
										<p style={{ color: "#dc3545" }}>{errors?.files?.message}</p>
									) : null}
								</FormGroup>

								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check
										type="checkbox"
										label={
											<Link href="/politica/terminos" target="_blank">
												{" "}
												Acepto los términos y condiciones
											</Link>
										}
										{...register("terms")}
										isInValue={!errors?.terms}
									/>
								</Form.Group>
								{errors?.terms ? (
									<p style={{ color: "#dc3545" }}>{errors?.terms?.message}</p>
								) : null}

								<div className="d-flex justify-content-end pt-3 align-items-center">
									<Link href="./cuatro" className="mx-3">
										Atrás
									</Link>

									<Button variant="primary" type="submit" disabled={button}>
										Guardar
									</Button>
								</div>
							</div>
						</Form>
					</Col>
				</Row>
				<PopCommission ModalShow={Commission} setModalShow={setCommission} />

				<PopPublicationSave
					ModalShow={savePublication}
					setModalShow={setSavePublication}
				/>
			</Container>
			<div className="d-none d-lg-block" style={{ height: "20rem" }} />
		</Main>
	);
}
