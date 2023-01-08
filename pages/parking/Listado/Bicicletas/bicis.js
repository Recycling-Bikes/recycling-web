import { Card, Badge, Spinner } from "react-bootstrap";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { parkingState } from "context/Parking/ParkingState";

export default function Bicis({ width, clase }) {

  const setParking = parkingState((state) => state.setParking)
  const parking = parkingState((state) => state.parking)


  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["productos"],
    queryFn: setParking,
  });

  if (isLoading) {
    return <div
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
      style={{ width: "200px", height: "200px", fontSize: "90px" }}
    />
  </div>;
  }

  console.log(parking);

  return (
    <>
      {data
        ? data.map((bici) => (
            <Card style={{ width: width }} className={clase} key={bici.id}>
              <Link href={`/parking/${bici.id}`} passHref>
                <div className="m-3">
                  <Badge bg="primary" style={{ color: "white" }}>
                    Popular
                  </Badge>
                  <Card.Img variant="top" src="/imagec.png" />
                </div>
                <Card.Body>
                  <Card.Text style={{ color: "rgba(108, 117, 125, 1)" }}>
                    {bici.models.name}
                  </Card.Text>
                  <Card.Title style={{ color: "black" }}>
                    {bici.title}
                  </Card.Title>
                  <Card.Text style={{ color: "rgba(108, 117, 125, 1)" }}>
                    ${bici.price.toLocaleString("en")}
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          ))
        : ""}
    </>
  );
}
