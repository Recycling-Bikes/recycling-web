export function filteredBicis(data, filters) {
  return data?.filter((datum) => {
    let passesFilter = true;

    const price = datum.off ?? datum.price;

    // verificar si la bicicleta tiene la etiqueta "Vendida"
    if (datum.etiquetas?.name.includes("Vendida")) {
      passesFilter = false;
    }

    if (datum?.status?.name.includes("Vendida")) {
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


