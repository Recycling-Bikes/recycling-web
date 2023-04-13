import { multiplicadores } from "./multiplicadores";

function redondear(numero) {
  return Math.round(numero.toFixed(0) / 5) * 5;
}

export function valorarBicicleta(
  transmision,
  anio,
  material,
  marca,
  condition,
  typePrice
) {
  let materialStatus;
  if (material != 1 && material != 2) {
    materialStatus =
      multiplicadores?.material[
        parseInt(transmision?.material) ? parseInt(transmision?.material) : 2
      ][2];
  } else {
    materialStatus =
      multiplicadores.material[
        parseInt(transmision?.material) ? parseInt(transmision?.material) : 2
      ][parseInt(material) ? parseInt(material) : 2];
  }

  let precio;
  if (typePrice == 1) {
    precio = transmision?.precio1 ?? 800;
  } else {
    precio = transmision?.precio2 ?? 800;
  }

  const multiplicadorMarca = multiplicadores.marca[marca];
  const multiplicadorCondition = multiplicadores.condition[condition];

  let multiplicadorEdad;

  function EdadFn(anio, edad) {
    let year = new Date().getFullYear();
    switch (true) {
      case anio == year:
        return edad["s"];
      case anio >= year - 1:
        return edad["a"];
      case anio >= year - 2:
        return edad["b"];
      case anio >= year - 3:
        return edad["c"];
      case anio >= year - 4:
        return edad["d"];
      case anio <= year - 5:
        return edad["f"];
    }
  }

  switch (true) {
    case precio <= 500:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[0]);
      break;
    case precio <= 1000:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[500]);
      break;
    case precio <= 1500:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[1000]);
      break;
    case precio <= 2500:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[1500]);
      break;
    case precio <= 3500:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[2500]);
      break;
    case precio <= 5500:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[3500]);
      break;
    case precio > 5500:
      multiplicadorEdad = EdadFn(anio, multiplicadores.edad[5500]);
      break;
  }

  const multiplicadorTotal =
    materialStatus *
    multiplicadorMarca *
    multiplicadorEdad *
    multiplicadorCondition;

  const valoracionMaxima = redondear(multiplicadorTotal * precio);

  const valoracionMinima = redondear(valoracionMaxima * 0.93);

  const DirectaMinima = redondear(valoracionMinima - valoracionMinima * 0.15);

  const DirectaMaxima = redondear(valoracionMaxima - valoracionMaxima * 0.15);

  return {
    min: valoracionMinima,
    max: valoracionMaxima.toLocaleString("en"),
    directa: {
      min: DirectaMinima.toLocaleString("en"),
      max: DirectaMaxima.toLocaleString("en"),
    },
    original: (precio * materialStatus * multiplicadorMarca).toLocaleString("en"),
  };
}

/* 
const precio = 500; // Precio base de la bicicleta en dólares
const anio = 2018; // Año de la bicicleta
const material = "acero"; // Material de la bicicleta
const transmision = "shimano"; // Transmisión de la bicicleta
const marca = "giant"; // Marca de la bicicleta

const valoracion = valorarBicicleta(precio, anio, material, transmision, marca);

console.log(`Valoración: ${valoracion.min} - ${valoracion.max}`);
console.log(
  `Valoración Directa: ${valoracion.directa.min} - ${valoracion.directa.max}`
);
 */
