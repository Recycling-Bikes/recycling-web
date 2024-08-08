import { ComponenteBike } from "components/bicletas";
import { use, useCallback, useEffect, useState } from "react";
import { Spinner, Pagination, Button, Stack } from "react-bootstrap";
import Relleno from "utils/relleno";

import { useBicisPaginations } from "hooks/get-bicis-paginations";
import { useRouter } from "next/router";

export default function GetBicis(props) {
  const { data, isError, isLoading } = useBicisPaginations();
  // estado para la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  // estado para la cantidad de items por página
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Obtener items por página
  const items = data?.pages?.[0]?.data ?? [];

  console.log(items);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  return (
    <>
      <div
        className="d-grid gap-3 my-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(14.8rem, 1fr))",
        }}
      >
        {(data?.pages?.[0]?.data ?? []).map((bici) => (
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
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Pagina anterior
        </Button>
        <Button
          variant="primary"
					size="lg"
          className="bg-blue"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Pagina Siguiente
        </Button>
      </div>
    </>
  );
}
