import Main from "components/main";
import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export default function PoliticalComponent() {
  return (
    <Main>
      <Container className="py-5" style={{
        color: "#06433D",
      }}>
        <h1>TÉRMINOS Y CONDICIONES</h1>

        <p>
          Bienvenido al marketplace de bicicletas. Estos términos y condiciones
          {`("T&C")`} regulan el uso de nuestra plataforma y los servicios
          relacionados que ofrecemos. Al utilizar nuestro marketplace, aceptas
          cumplir y estar sujeto a estos T&C. Por favor, lee detenidamente los
          siguientes términos antes de utilizar nuestros servicios.
        </p>

        <h2>Uso de la plataforma</h2>
        <ul>
          <li>
            1.1 Registro: Para utilizar todas las funcionalidades de nuestro
            marketplace, debes registrarte y crear una cuenta. La información
            proporcionada durante el proceso de registro debe ser precisa,
            completa y actualizada. Eres responsable de mantener la
            confidencialidad de tu cuenta y contraseña, y de todas las
            actividades que ocurran bajo tu cuenta.
          </li>
          <li>
            1.2 Contenido: Al publicar listados de bicicletas en nuestro
            marketplace, garantizas que tienes los derechos legales para vender
            los productos ofrecidos. Además, aceptas que el contenido
            proporcionado es preciso, no infringe derechos de terceros ni viola
            ninguna ley.
          </li>
          <li>
            1.3 Conducta: Te comprometes a utilizar el marketplace de bicicletas
            de manera responsable y ética. No podrás realizar acciones que
            puedan dañar, sobrecargar o comprometer la seguridad de nuestro
            sistema. No podrás utilizar el marketplace para fines ilegales o no
            autorizados.
          </li>
        </ul>
        <h2>Publicación de listados</h2>
        <ul>
          <li>
            2.1 Información del producto: Al publicar un listado de bicicleta,
            garantizas que la información proporcionada es precisa y completa.
            Debes describir correctamente el estado, características y detalles
            del producto, incluyendo cualquier defecto o daño existente.
          </li>
          <li>
            2.2 Imágenes: Las imágenes proporcionadas deben ser claras, de alta
            calidad y representativas del producto ofrecido. No se permiten
            imágenes con contenido inapropiado, difamatorio, o que infrinjan
            derechos de autor u otros derechos de propiedad intelectual de
            terceros.
          </li>
          <li>
            2.3 Precios: Los precios de los productos deben ser precisos y estar
            en la moneda especificada. No se permiten prácticas engañosas, como
            precios inflados o manipulación de precios.
          </li>
        </ul>
        <h2>Transacciones y pagos</h2>
        <ul>
          <li>
            3.1 Responsabilidad de la transacción: Las transacciones realizadas
            a través de nuestro marketplace son responsabilidad exclusiva de los
            compradores y vendedores involucrados. No somos responsables de
            ninguna disputa, pérdida o daño relacionado con las transacciones
            realizadas.
          </li>
          <li>
            3.2 Pagos: Las transacciones de pago se realizarán fuera de nuestra
            plataforma utilizando los métodos acordados entre comprador y
            vendedor. No somos responsables de ninguna transacción financiera ni
            de la seguridad de los datos de pago proporcionados.
          </li>
        </ul>

        <h2>Derechos de propiedad intelectual</h2>
        <ul>
          <li>
            4.1 Propiedad de la plataforma: Reconoces y aceptas que todos los
            derechos de propiedad intelectual relacionados con el marketplace de
            bicicletas, incluyendo software, diseños, logotipos y marcas
            comerciales, son propiedad exclusiva de sus respectivos dueños.
          </li>
          <li>
            4.2 Licencia de uso: Te concedemos una licencia limitada, no
            exclusiva y no transferible para utilizar nuestra plataforma y
            acceder al contenido disponible. Esta licencia no te otorga ningún
            derecho de propiedad sobre los elementos mencionados.
          </li>
        </ul>
        <h2>Limitación de responsabilidad</h2>
        <ul>
          <li>
            5.1 Exclusión de garantías: El marketplace de bicicletas se
            proporciona {`"tal cual"`} y {`"según disponibilidad"`}. No
            ofrecemos ninguna garantía expresa o implícita con respecto a la
            calidad, precisión, confiabilidad, adecuación o disponibilidad de
            nuestros servicios. No nos hacemos responsables de cualquier
            pérdida, daño o inconveniente que puedas experimentar al utilizar
            nuestro marketplace.
          </li>
          <li>
            5.2 Limitación de responsabilidad: En la medida máxima permitida por
            la ley, no seremos responsables por ningún daño directo, indirecto,
            incidental, especial, consecuencial o punitivo, incluyendo pérdidas
            de beneficios, ingresos, datos o uso, derivados de o relacionados
            con el uso de nuestro marketplace o la imposibilidad de utilizarlo.
          </li>
        </ul>
        <h2>Modificaciones y terminación</h2>
        <ul>
          <li>
            6.1 Modificaciones: Nos reservamos el derecho de modificar o
            actualizar estos T&C en cualquier momento sin previo aviso.
            Cualquier modificación será efectiva al ser publicada en nuestro
            marketplace. Se recomienda revisar periódicamente los T&C
            actualizados.
          </li>
          <li>
            6.2 Terminación: Nos reservamos el derecho de suspender o terminar
            tu acceso a nuestro marketplace en cualquier momento y por cualquier
            motivo, incluyendo el incumplimiento de estos T&C. En caso de
            terminación, todas las disposiciones que por su naturaleza deban
            sobrevivir, continuarán en pleno vigor y efecto.
          </li>
        </ul>

        <p>
          Ley aplicable y jurisdicción Estos T&C se regirán e interpretarán de
          acuerdo con las leyes del país donde se encuentra el marketplace de
          bicicletas. Cualquier disputa que surja de estos T&C estará sujeta a
          la jurisdicción exclusiva de los tribunales competentes en esa
          jurisdicción.
        </p>
        <p>
          Si no estás de acuerdo con alguno de los términos y condiciones
          establecidos en este documento, te pedimos que no utilices nuestro
          marketplace de bicicletas. Al utilizar nuestros servicios, confirmas
          tu consentimiento y acuerdo con estos T&C.
        </p>
      </Container>
    </Main>
  );
}
