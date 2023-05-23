import React, { useEffect, useState } from "react";

export function useHydrate(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return loading;
}
