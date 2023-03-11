import DashboardContainer from "components/dashboard";
import React, { useMemo } from "react";
import { Form } from "react-bootstrap";


import { useTable, useSortBy } from "react-table";
export default function Publicaciones() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <DashboardContainer puntero="publicaciones">
      <div>
        <h3>Ventas directas</h3>
        <Form.Control
          type="search"
          style={{ maxWidth: "400px" }}
          placeholder="Buscar por título o SKU"
        />
      </div>

      <table {...getTableProps()}>
        <thead>
          {
            // Recorremos las columnas que previamente definimos
            headerGroups.map((headerGroup) => (
              // Añadimos las propiedades al conjunto de columnas
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Recorremos cada columna del conjunto para acceder a su información
                  headerGroup.headers.map((column) => (
                    // Añadimos las propiedades a cada celda de la cabecera
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? "desc"
                            : "asc"
                          : ""
                      }
                    >
                      {column.render("Header")}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Añadimos las propiedades al cuerpo de la tabla */}
        <tbody {...getTableBodyProps()}>
          {
            // Recorremos las filas
            rows.map((row) => {
              // Llamamos a la función que prepara la fila previo renderizado
              prepareRow(row);
              return (
                // Añadimos las propiedades a la fila
                <tr key={row.id} {...row.getRowProps()}>
                  {
                    // Recorremos cada celda de la fila
                    row.cells.map((cell) => {
                      // Añadimos las propiedades a cada celda de la fila
                      return (
                        <td key={cell.value} {...cell.getCellProps()}>
                          {
                            // Pintamos el contenido de la celda
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </DashboardContainer>
  );
}

function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Marca",
        accessor: "marca",
      },
      {
        Header: "Modelo",
        accessor: "modelo",
      },
      {
        Header: "Segmento",
        accessor: "segmento",
      },
      {
        Header: "Año",
        accessor: "anio",
      },
    ],
    []
  );

  return columns;
}

function useRows() {
  const rows = useMemo(
    () => [
      {
        marca: "Audi",
        modelo: "A3",
        segmento: "Sedan, Convertible",
        anio: "2015",
      },
      {
        marca: "Audi",
        modelo: "A3",
        segmento: "Wagon",
        anio: "2013",
      },
      {
        marca: "Audi",
        modelo: "A3 Sportback e-tron",
        segmento: "Wagon",
        anio: "2016",
      },
      {
        marca: "Audi",
        modelo: "A4",
        segmento: "Sedan, Convertible",
        anio: "2006",
      },
      {
        marca: "Audi",
        modelo: "A4",
        segmento: "Sedan, Wagon",
        anio: "2001",
      },
      {
        marca: "Audi",
        modelo: "A4 allroad",
        segmento: "Wagon",
        anio: "2019",
      },
      {
        marca: "Audi",
        modelo: "A5",
        segmento: "Coupe",
        anio: "2008",
      },
      {
        marca: "Audi",
        modelo: "A5 Sport",
        segmento: "Convertible, Coupe",
        anio: "2017",
      },
      {
        marca: "Audi",
        modelo: "Q3",
        segmento: "SUV",
        anio: "2020",
      },
      {
        marca: "Audi",
        modelo: "R8",
        segmento: "Coupe",
        anio: "2008",
      },
      {
        marca: "Audi",
        modelo: "TT",
        segmento: "Coupe",
        anio: "2019",
      },
      {
        marca: "Audi",
        modelo: "Q7",
        segmento: "SUV",
        anio: "2015",
      },
      {
        marca: "Audi",
        modelo: "Q8",
        segmento: "SUV",
        anio: "2019",
      },
      {
        marca: "Audi",
        modelo: "Cabriolet",
        segmento: "Convertible, Coupe",
        anio: "1996",
      },
    ],
    []
  );

  return rows;
}
