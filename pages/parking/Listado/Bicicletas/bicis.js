import { Spinner } from "react-bootstrap";
import { parkingState } from "context/Parking/ParkingState";
import Relleno from "utils/relleno";
import { filtersState } from "context/Filters/filtersState";
import { ComponenteBike } from "components/bicletas";
import { use, useCallback, useEffect, useState } from "react";
import { useHydrate } from "hooks/hydrate/hydrate";
import { filteredBicis } from "utils/filterUtils";

export default function GetBicis(props) {
  const hydrate = useHydrate();

  const setParking = parkingState((state) => state.setParking);
  const parking = parkingState((state) => state.parking);
  const didMemoryParking = parkingState((state) => state.didMemoryParking);
  const filters = filtersState((state) => state.filters);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [fetchCount, setFetchCount] = useState(0);
  const [pageNumber, setPageNumber] = parkingState((state) => [
    state.pageNumber,
    state.setPageNumber,
  ]);

  useEffect(() => {
    if (hydrate) {
      didMemoryParking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrate]);

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
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const scrolledPercentage = (scrollTop + clientHeight) / scrollHeight;

      if (
        scrolledPercentage >= 0.8 &&
        !isLoading &&
        scrollTop > lastScrollTop
      ) {
        fetchParking();
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isLoading, fetchParking]);

  useEffect(() => {
    if (parking) {
      const filtered = filteredBicis(parking, filters);
      setFilteredData(filtered);
    }
  }, [parking, filters]);

  useEffect(() => {
    if (filteredData.length === 0 && fetchCount < 3) {
      fetchParking();
      setFetchCount((fetchCount) => fetchCount + 1);
    }
  }, [filteredData, fetchParking]);

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
  );
}
