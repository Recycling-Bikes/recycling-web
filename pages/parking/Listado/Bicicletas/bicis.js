import { ComponenteBike } from "components/bicletas";
import { useEffect, useState } from "react";
import { Button, Pagination, Spinner } from "react-bootstrap";
import Relleno from "utils/relleno";

import { useBicisPaginations } from "hooks/get-bicis-paginations";
import { useRouter } from "next/router";

export default function GetBicis(props) {
	const [currentPage, setCurrentPage] = useState(props.page);
	const { data, isLoading } = useBicisPaginations({
		page: currentPage,
		initialPage: props.initialPage,
	});
	// estado para la pagina actual
	const router = useRouter();
	// Obtener items por página
	const nextPage = () => {
		if (data?.next) {
			router.push(`?page=${data.next}`);
			setCurrentPage(data.next);
		}
	};

	const prevPage = () => {
		if (data?.prev) {
			router.push(`?page=${data.prev}`);
			setCurrentPage(data.prev);
		}
	};

	return (
		<>
			<div
				className="d-grid gap-3 my-4"
				style={{
					gridTemplateColumns: "repeat(auto-fit,minmax(14.8rem, 1fr))",
				}}
			>
				{data?.data?.map((bici) => (
					<ComponenteBike
						key={bici.id}
						id={bici.id}
						name={bici.models?.name}
						title={bici.title}
						price={bici.price}
						status={bici.status}
						sold={bici.sold}
						off={bici.off}
						image={bici.filesUrl[0]}
						etiqueta={bici.etiquetas?.name}
						verified={bici.verified}
					/>
				))}
				{isLoading && (
					<Spinner
						animation="border"
						variant="secondary"
						style={{
							width: "200px",
							height: "200px",
							fontSize: "90px",
						}}
					/>
				)}
				<Relleno />

				{/* <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
				{[...Array(Math.ceil(items.length / itemsPerPage))].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
        <Pagination.Last onClick={() => handlePageChange(Math.ceil(items.length / itemsPerPage))} />
      </Pagination> */}
			</div>
			<div className="d-flex justify-content-center gap-3">
				<Button
					variant="primary"
					size="lg"
					onClick={() => prevPage()}
					disabled={
						data?.prev === null ||
						data?.prev === undefined ||
						data?.prev <= 1 ||
						currentPage <= 1
					}
				>
					Pagina anterior
				</Button>
				<Button
					variant="primary"
					size="lg"
					className="bg-blue"
					disabled={
						data?.next === null ||
						data?.next === undefined ||
						data?.next >= data?.paginationCount ||
						currentPage >= (data?.paginationCount ?? 100)
					}
					onClick={() => nextPage()}
				>
					Pagina Siguiente
				</Button>
			</div>
		</>
	);
}
