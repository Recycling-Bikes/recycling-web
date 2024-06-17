import { Spinner } from "react-bootstrap";
import { parkingState } from "context/Parking/ParkingState";
import Relleno from "utils/relleno";
import { filtersState } from "context/Filters/filtersState";
import { ComponenteBike } from "components/bicletas";
import { use, useCallback, useEffect, useState } from "react";
import { useHydrate } from "hooks/hydrate/hydrate";

export default function GetBicis(props) {
  const hydrate = useHydrate();

  const setParking = parkingState((state) => state.setParking);
  const parking = parkingState((state) => state.parking);
  const didMemoryParking = parkingState((state) => state.didMemoryParking);
  const filters = filtersState((state) => state.filters);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  // useState hydrates the state with the initial value

  const [filteredData, setFilteredData] = useState([]);

  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    if (hydrate) {
      didMemoryParking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrate]);

  const [pageNumber, setPageNumber] = parkingState((state) => [
    state.pageNumber,
    state.setPageNumber,
  ]);

  const fetchParking = useCallback(async () => {
    if (!isLoading) {
      setIsLoading(true);
      setPageNumber((old) => old + 1);

      try {
        await setParking();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrolledPercentage =
        (document.documentElement.scrollTop + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (scrolledPercentage < 0.8 || isLoading) return;

      if (scrollTop > lastScrollTop) {
        fetchParking();
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parking, lastScrollTop, pageNumber, hydrate, isLoading, fetchParking]);

  useEffect(() => {
    const filtered = filteredBicis(parking ?? [], filters);
    setFilteredData(filtered);
  }, [parking, filters]);

  useEffect(() => {
    if (filteredData.length === 0 && fetchCount < 3) {
      fetchParking();
      setFetchCount((fetchCount) => fetchCount + 1);
    }
  }, [filteredData, fetchParking]);

  console.table("filteredData", filteredData);


  return (
    <div
      className="d-grid gap-3 my-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit,minmax(14.8rem, 1fr))",
      }}
    >
      {filteredData.map((bici) => (

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
    </div>
  //    <Pagination>
  //    <Pagination.First onClick={() => handlePageChange(1)} disabled={pageNumber === 1} />
  //    <Pagination.Prev onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1} />
  //    {[...Array(totalPages).keys()].map((page) => (
  //      <Pagination.Item
  //        key={page + 1}
  //        active={pageNumber === page + 1}
  //        onClick={() => handlePageChange(page + 1)}
  //      >
  //        {page + 1}
  //      </Pagination.Item>
  //    ))}
  //    <Pagination.Next onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === totalPages} />
  //    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={pageNumber === totalPages} />
  //  </Pagination>
  );
}

function filteredBicis(data, filters) {
  return data?.filter((datum) => {
    let passesFilter = true;

    const price = datum.off ?? datum.price;

    // verificar si la bicicleta tiene la etiqueta "Vendida"
    if(datum.etiquetas?.name.includes("Vendida")) {
      passesFilter = false;
    }

    if (
      filters.country?.length > 0 &&
      !filters.country.includes(datum.country)
    ) {
      passesFilter = false;
    }

    if (
      filters.category?.length > 0 &&
      !filters.category.includes(datum.propiedades.category)
    ) {
      passesFilter = false;
    }

    if (
      filters.subcategory?.length > 0 &&
      !filters.subcategory.some((sub) =>
        datum.propiedades.subcategories.includes(sub),
      )
    ) {
      passesFilter = false;
    }

    if (filters.size?.length > 0 && !filters.size.includes(datum.size)) {
      passesFilter = false;
    }

    if (
      filters.brands?.length > 0 &&
      !filters.brands.includes(datum.propiedades.brand)
    ) {
      passesFilter = false;
    }

    if (
      filters.materials?.length > 0 &&
      !filters.materials.includes(datum.propiedades.material)
    ) {
      passesFilter = false;
    }

    if (
      filters.suspension?.length > 0 &&
      !filters.suspension.includes(datum.propiedades.suspension)
    ) {
      passesFilter = false;
    }

    if (
      filters.frenos?.length > 0 &&
      !filters.frenos.includes(datum.propiedades.freno)
    ) {
      passesFilter = false;
    }

    if (
      filters?.rines?.length > 0 &&
      !filters.rines.includes(datum.propiedades.rine)
    ) {
      passesFilter = false;
    }

    if (filters?.years?.length > 0 && !filters.years.includes(datum.year)) {
      passesFilter = false;
    }

    if (filters?.minPrice !== null && price < filters.minPrice) {
      passesFilter = false;
    }

    if (filters?.maxPrice !== null && price > filters.maxPrice) {
      passesFilter = false;
    }

    if (!datum.title?.toLowerCase().includes(filters?.search?.toLowerCase())) {
      passesFilter = false;
    }

    return passesFilter;
  });
}
