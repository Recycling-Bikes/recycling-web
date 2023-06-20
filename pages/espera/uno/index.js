import React, { useEffect, useState } from "react";
import Main from "components/main";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import * as yup from "yup";

import { shallow } from "zustand/shallow";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FPState } from "context/FormPublications/FPstate";
import { useHydrate } from "hooks/hydrate/hydrate";
import EsperaComponent from "../component";

const schema = yup.object().shape({
	material: yup.string().required("El año es requerido"),
	size: yup.string().required("El modelo es requerido"),
	category: yup.string().required("La categoría es requerida"),
});

export default function ParteDos() {
	const hydrate = useHydrate();

	const router = useRouter();

	const [publication, form] = FPState(
		(state) => [state.publication, state.form],
		shallow,
	);

	const [setPublication, setForm, clearTransmision] = FPState(
		(state) => [state.setPublication, state.setForm, state.clearTransmision],
		shallow,
	);

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

	const [forceUpdate, setForceUpdate] = useState(false);

	useEffect(() => {
		let count = 0;
		let category = parseInt(publication?.category);
		if (category == 3 || category == 6 || category == 4) {
			category = 1;
		}

		if (category == 8) {
			category = 2;
		}

		const updateFormState = async (
			property,
			parameter,
			equal = null,
			column = null,
		) => {
			try {
				if (
					!form[property] ||
					(form[property]?.length < 1 && count < 12) ||
					form[property] === null ||
					!Array.isArray(form[property]) ||
					forceUpdate
				) {
					console.log(`Updating form state for ${property}`);
					await setForm(property, parameter, equal, column);
					count++;
				} else {
					if (equal === null && column === null && count < 12) {
						await setForm(property, parameter, equal, column);
						count++;
					}
				}
			} catch (error) {}
		};

		const updateForm = async () => {
			await Promise.all([
				updateFormState("sizes"),
				updateFormState("category"),
				updateFormState("materials"),
			]);
			setForceUpdate(false);
		};
		console.log("publication?.category", publication?.category);

		updateForm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [forceUpdate, publication]);

	const onSubmit = (items) => {

    items["subcategory"] = null;

		const subcategories = [];

		if (items?.ebike === true) {
			subcategories.push(10);
		}

		if (items?.kids === true) {
			subcategories.push(15);
		}

		items["subcategories"] = subcategories;

		setPublication(items);
		router.push("./dos");
	};

	const selectList = (list) => {
		return (
			Array.isArray(list) &&
			list?.map((item) => {
				return (
					<option key={item.id} value={item.id}>
						{item.name}
					</option>
				);
			})
		);
	};

	return (
		hydrate && (
			<>
				<EsperaComponent>
					<Row className="justify-content-md-center">
						<Col md="8" xl="6">
							<Form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
								<div className="my-5">
									<Form.Group className="mb-3 mx-auto" controlId="category">
										<Form.Label>
											Categoría <span className="text-danger">*</span>
										</Form.Label>
										<Form.Select
											{...(hydrate && register("category"))}
											isInvalid={errors?.category}
											/* value={values.category} */
										>
											<option value="">Selecciona una categoría</option>
											{hydrate &&
												selectList(
													form?.category?.filter(
														(item) => item.id !== 7 && item.id !== 6,
													),
												)}
										</Form.Select>
										<Form.Control.Feedback type="invalid">
											{errors.category?.message}
										</Form.Control.Feedback>
									</Form.Group>

									{/* Talla */}
									<Form.Group className="mb-3" controlId="size">
										<Form.Label>
											Talla <span className="text-danger">*</span>
										</Form.Label>

										<Form.Select
											isInvalid={!!errors.size}
											{...(hydrate && register("size"))}
										>
											<option value="">Selecciona una talla</option>
											{hydrate && selectList(form?.sizes)}
										</Form.Select>

										<Form.Control.Feedback type="invalid">
											{errors?.size?.message}
										</Form.Control.Feedback>
									</Form.Group>

									{/* Material */}
									<Form.Group className="mb-3" controlId="materials">
										<Form.Label>
											Material <span className="text-danger">*</span>
										</Form.Label>

										<Form.Select
											isInvalid={!!errors.material}
											{...(hydrate && register("material"))}
										>
											<option value="">Selecciona un material</option>

											{hydrate && selectList(form?.materials)}
										</Form.Select>

										<Form.Control.Feedback type="invalid">
											{errors?.material?.message}
										</Form.Control.Feedback>
									</Form.Group>
{/* 									<Row className="mx-2">
										<Col
											style={{
												width: "15% !important",
											}}
											className="d-flex"
										>
											<Form.Group className="mb-3" controlId="ebike">
												<Form.Check
													className="mt-3"
													type="checkbox"
													label="E-Bike"
													{...(hydrate && register("ebike"))}
												/>
											</Form.Group>
										</Col>

										<Col
											style={{
												width: "15% !important",
											}}
											className="d-flex"
										>
											<Form.Group className="mb-3" controlId="kids">
											
												<Form.Check
													className="mt-3"
													type="checkbox"
													label="Niños"
													{...(hydrate && register("kids"))}
												/>
											</Form.Group>
										</Col>
									</Row> */}

									{/* Botones */}
									<div className="d-flex justify-content-end pt-3 align-items-center">
										<Link href="./" className="mx-3">
											<BsChevronLeft
												size={18}
												className="me-2 align-items-center"
											/>
											Atrás
										</Link>

										<Button variant="primary" type="submit">
											Valor de tu bici
											<BsChevronRight
												size={18}
												className="ms-2 align-items-center"
											/>
										</Button>
									</div>
								</div>
							</Form>
						</Col>
					</Row>
				</EsperaComponent>
			</>
		)
	);
}
