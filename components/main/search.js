import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { filtersState } from "context/Filters/filtersState";

const scheme = yup.object().shape({
	search: yup.string().trim(),
});

export default function Search({ className, ...props }) {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(scheme),
	});

	const setFilters = filtersState((state) => state.setFilters);
	const filters = filtersState((state) => state.filters);

	const searchRef = useRef(null);

	const router = useRouter();

	const onSubmit = (e) => {
		if (filters?.search !== e.search) {
			setFilters((prev) => ({
				...prev,
				search: e.search,
			}));
		}
		router.push("/parking");
	};

	const onSearch = () => {
		searchRef.current.click();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`d-flex col align-items-baseline mx-2 ${className}`}
			{...props}
		>
			<InputGroup className="d-flex flex-grow-1">
				<Form.Control
					type="search"
					className=""
					placeholder="Buscar..."
					style={{ borderRadius: "0.375rem" }}
					{...register("search")}
				/>
				<InputGroup.Text onClick={() => onSearch()} id="basic-addon1">
					<BiSearchAlt size={24} />
				</InputGroup.Text>
			</InputGroup>

			{/* Cart */}
			{/*           <Link href="#deets" className="nav-link ms-2">
    <FiShoppingCart size={24} />
  </Link> */}
			<button type="submit" ref={searchRef} className="d-none" />
		</form>
	);
}
