import { Spinner } from "react-bootstrap";

import { useQuery } from "@tanstack/react-query";
import { parkingState } from "context/Parking/ParkingState";
import Relleno from "utils/relleno";
import { filtersState } from "context/Filters/filtersState";
import { ComponenteBike } from "components/bicletas";

export default function GetBicis(props) {
  const setParking = parkingState((state) => state.setParking);
  const parking = parkingState((state) => state.parking);
  const filters = filtersState((state) => state.filters);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["productos"],
    queryFn: setParking,
  });

  if (isLoading) {
    return (
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
          style={{
            width: "200px",
            height: "200px",
            fontSize: "90px",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="d-grid gap-3 my-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit,minmax(14.8rem, 1fr))",
      }}
    >

      {Array.isArray(data)
        ? filteredData(data, filters).map((bici) => (
            <ComponenteBike
              key={bici.id}
              id={bici.id}
              name={bici.models.name}
              title={bici.title}
              price={bici.price}
              off={bici.off}
              image={bici.filesUrl[0]}
              etiqueta={bici.etiquetas?.name}

            />
          ))
        : ""}
      <Relleno />
    </div>
  );
}

function filteredData(data, filters) {
  return data.filter((datum) => {
    let passesFilter = true;

    const price = datum.off ?? datum.price;

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
        datum.propiedades.subcategories.includes(sub)
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

    return passesFilter;
  });
}
