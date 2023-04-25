import Link from "next/link";
import { Container, Button, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import { parkingState } from "context/Parking/ParkingState";
import { BsChatSquareDots, BsShieldCheck } from "react-icons/bs";
import Promesas from "./promesas";
import Buttons from "./buttons";

export default function Descriptons() {
  return (
    <Container className="py-3 d-flex flex-column">
      <Buttons />
      <Promesas />
    </Container>
  );
}
