import { Card, Badge } from "react-bootstrap";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function Bicis({ width, clase }) {


  const { isLoading, isErrorn, error, data } = useQuery({
    queryKey: ["productos"],
    queryFn: getBicis,
  });

  if (isLoading) {
    return <>{"hola"}</>;
  }

  console.log(data);

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
