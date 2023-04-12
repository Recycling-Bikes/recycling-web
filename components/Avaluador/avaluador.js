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
  console.log(transmision, anio, material, marca, condition, typePrice);

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

  let precio
  if (typePrice == 1) {
    precio = transmision?.precio1 ?? 800;
  } else {
    precio = transmision?.precio2?? 800;
  }

  const multiplicadorMarca = multiplicadores.marca[marca];
  const multiplicadorCondition = multiplicadores.condition[condition];

  let multiplicadorEdad;

  let year = new Date().getFullYear();

  switch (true) {
    case anio == year:
      multiplicadorEdad = multiplicadores.edad["s"];
      break;
    case anio >= year - 1:
      multiplicadorEdad = multiplicadores.edad["a"];
      break;
    case anio >= year - 2:
      multiplicadorEdad = multiplicadores.edad["b"];
      break;
    case anio >= year - 3:
      multiplicadorEdad = multiplicadores.edad["c"];
      break;
    case anio >= year - 4:
      multiplicadorEdad = multiplicadores.edad["d"];
      break;
    case anio <= year - 5:
      multiplicadorEdad = multiplicadores.edad["f"];
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

  const valoracionOriginal = redondear(
    ((precio * multiplicadorTotal) / multiplicadorCondition) * 0.93
  );

  return {
    min: valoracionMinima,
    max: valoracionMaxima.toLocaleString("en"),
    directa: {
      min: DirectaMinima.toLocaleString("en"),
      max: DirectaMaxima.toLocaleString("en"),
    },
    original: (precio * materialStatus).toLocaleString("en"),
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
