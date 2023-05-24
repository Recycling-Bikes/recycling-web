import React, { useEffect, useState } from "react";

export function useHydrate(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  
  return () => {
    console.log("Componente desmontado");
    // Realizar cualquier otra acción de limpieza necesaria aquí
  };

  return loading;
}
