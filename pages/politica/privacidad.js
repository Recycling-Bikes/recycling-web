import Main from "components/main";
import React from "react";
import { Container } from "react-bootstrap";

export default function privacidad() {
  return (
    <Main>
      <Container className="py-5" style={{color: "#06433D"}}>
        <h1>Política de Privacidad</h1>
        <p>
          En Recycling Inc, valoramos la privacidad de nuestros usuarios y nos
          comprometemos a proteger sus datos personales. Esta política de
          privacidad describe cómo recopilamos, utilizamos y protegemos la
          información personal que se nos proporciona a través de nuestra página
          web.
        </p>

        <h2>Información que recopilamos</h2>
        <p>
          Recopilamos información personal que los usuarios nos proporcionan
          voluntariamente cuando se registran en nuestra página web o realizan
          una compra. Esta información puede incluir:
        </p>
        <ul>
          <li>
            Nombre, dirección de correo electrónico, número de teléfono y
            dirección de envío.
          </li>
          <li>
            Información de pago, incluyendo el número de tarjeta de crédito o
            débito.
          </li>
          <li>
            Información sobre el historial de compras y navegación en nuestro
            sitio web.
          </li>
        </ul>
        <p>
          Además, podemos recopilar información no personal, como la dirección
          IP del usuario y el tipo de navegador que está utilizando, para
          mejorar la funcionalidad y seguridad de nuestro sitio web.
        </p>

        <h2>Cómo utilizamos la información</h2>
        <p>
          La información personal que recopilamos se utiliza para proporcionar y
          mejorar nuestros servicios, procesar pagos, enviar notificaciones y
          comunicarnos con los usuarios sobre su cuenta y compras. También
          podemos utilizar la información para personalizar la experiencia del
          usuario en nuestro sitio web y para realizar análisis y estudios de
          mercado.
        </p>

        <h2>Cómo protegemos la información</h2>
        <p>
          Nos comprometemos a proteger la información personal de nuestros
          usuarios y hemos implementado medidas de seguridad técnicas y
          organizativas apropiadas para evitar la pérdida, el uso indebido, la
          alteración y la divulgación no autorizada de la información. Toda la
          información personal que se nos proporciona se almacena en servidores
          seguros.
        </p>

        <h2>Compartición de información</h2>
        <p>
          No compartimos información personal de nuestros usuarios con terceros,
          excepto cuando sea necesario para procesar pagos, realizar entregas o
          cumplir con obligaciones legales. En estos casos, se compartirá
          únicamente la información necesaria para llevar a cabo estas tareas y
          se tomarán medidas para garantizar que la información sea tratada de
          forma segura y confidencial.
        </p>

        <h2>Cookies</h2>
        <p>
          Utilizamos cookies para mejorar la experiencia del usuario en nuestro
          sitio web y para recopilar información no personal, como la dirección
          IP y el tipo de navegador que está utilizando. Las cookies pueden ser
          desactivadas en la configuración del navegador del usuario.
        </p>

        <h2>Enlaces a sitios web de terceros</h2>
        <p>
          Nuestra página web puede contener enlaces a otros sitios web que no
          son propiedad ni están controlados por Recycling Inc. No somos
          responsables de las prácticas de privacidad de estos sitios web y
          recomendamos que los usuarios revisen las políticas de privacidad de
          estos sitios antes de proporcionar cualquier información personal.
        </p>

        <h2>Cambios a esta política de privacidad</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en
          cualquier momento. Los cambios y aclaraciones tendrán efecto
          inmediatamente después de su publicación en el sitio web. Si
          realizamos cambios sustanciales a esta política, se lo notificaremos
          aquí para que usted sepa qué información recopilamos, cómo la
          utilizamos y bajo qué circunstancias, si las hubiera, la utilizamos
          y/o divulgamos.
        </p>

        <p>
          Gracias por confiar en Recycling Inc y por leer nuestra política de
          privacidad. Si tienes alguna pregunta o inquietud sobre cómo manejamos
          tu información personal, no dudes en contactarnos.
        </p>
      </Container>
    </Main>
  );
}
