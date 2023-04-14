import { multiplicadores } from "./multiplicadores";

function redondear(numero) {
  return Math.round(numero.toFixed(0) / 5) * 5;
}

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
    case anio >= year - 5:
      return edad["f"];
    default:
      return edad["f"] - edad["resto"] * (year - anio - 5);
  }
}

function priceEdad(precio, anio) {
  switch (true) {
    case precio <= 500:
      return EdadFn(anio, multiplicadores.edad[0]);
    case precio <= 1000:
      return EdadFn(anio, multiplicadores.edad[500]);
    case precio <= 1500:
      return EdadFn(anio, multiplicadores.edad[1000]);
    case precio <= 2000:
      return EdadFn(anio, multiplicadores.edad[1500]);
    case precio <= 2500:
      return EdadFn(anio, multiplicadores.edad[2000]);
    case precio <= 3000:
      return EdadFn(anio, multiplicadores.edad[2500]);
    case precio <= 3500:
      return EdadFn(anio, multiplicadores.edad[3000]);
    case precio <= 5500:
      return EdadFn(anio, multiplicadores.edad[3500]);
    case precio > 5500:
      return EdadFn(anio, multiplicadores.edad[5500]);
  }
}

function ventaDirecta(precio) {
  switch (true) {
    case precio <= 500:
      return multiplicadores.directa[0];
    case precio <= 1000:
      return multiplicadores.directa[500];
    case precio <= 1500:
      return multiplicadores.directa[1000];
    case precio <= 2000:
      return multiplicadores.directa[1500];
    case precio <= 2500:
      return multiplicadores.directa[2000];
    case precio <= 3000:
      return multiplicadores.directa[2500];
    case precio <= 3500:
      return multiplicadores.directa[3000];
    case precio <= 5500:
      return multiplicadores.directa[3500];
    case precio > 5500:
      return multiplicadores.directa[5500];
  }
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

  let multiplicadorEdad = priceEdad(precio, anio);

  const multiplicadorTotal =
    materialStatus *
    multiplicadorMarca *
    multiplicadorEdad *
    multiplicadorCondition;

  const precioMin = 0.93;

  const valoracionMaxima = redondear(multiplicadorTotal * precio);

  const valoracionMinima = redondear(valoracionMaxima * precioMin);

  const DirectaMaxima = redondear(
    valoracionMaxima * ventaDirecta(valoracionMaxima)
  );

  const DirectaMinima = redondear(DirectaMaxima * precioMin);

  const ValorOriginal = redondear(precio * materialStatus * multiplicadorMarca);

  return {
    min: valoracionMinima,
    max: valoracionMaxima.toLocaleString("en"),
    directa: {
      min: DirectaMinima.toLocaleString("en"),
      max: DirectaMaxima.toLocaleString("en"),
    },
    original: ValorOriginal.toLocaleString("en"),
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
