import { ComponenteBike } from "components/bicletas";
import { filtersState } from "context/Filters/filtersState";
import { parkingState } from "context/Parking/ParkingState";
import { useHydrate } from "hooks/hydrate/hydrate";
import { use, useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Relleno from "utils/relleno";

import { useP } from "@tanstack/react-query";

import { useBicisPaginations } from "hooks/get-bicis-paginations";
import { useRouter } from "next/router";

export default function GetBicis(props) {
	const { data, isError, isLoading } = useBicisPaginations();

	return (
		<div
			className="d-grid gap-3 my-4"
			style={{
				gridTemplateColumns: "repeat(auto-fit,minmax(14.8rem, 1fr))",
			}}
		>
			{(data?.pages?.[0]?.data ?? []).map((bici) => (
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

			{/* <Pagination>
     <Pagination.First  />
     <Pagination.Prev />
     
       <Pagination.Item
         

         
       >
         1
       </Pagination.Item>
     <Pagination.Next  />
     <Pagination.Last />
   </Pagination> */}
		</div>
	);
}
