import React from "react";
import { supabase } from "supabase/client";

async function BiciGet() {
  const { data, error } = await supabase.from("bicis").select("id");

  // Si hay un error en la consulta, devolverlo inmediatamente
  if (error) {
    return { error };
  }

  const ids = data.map((item) => item.id);

  const { data: subData, error: subError } = await supabase
    .from("bici_subcategory")
    .select("bici_id, subcategory_id")
    .in("bici_id", ids);

  // Si hay un error en la consulta, devolverlo inmediatamente
  if (subError) {
    return { error: subError };
  }

  const subcategoriesMap = subData.reduce((acc, cur) => {
    if (!acc[cur.bici_id]) {
      acc[cur.bici_id] = [];
    }
    acc[cur.bici_id].push(cur.subcategory_id);
    return acc;
  }, {});

  const result = data.map((item) => ({
    ...item,
    subcategories: subcategoriesMap[item.id] || [],
  }));

  return result;
}

export default function Prueba() {
  (async () => {
    console.log(await BiciGet());
  })();
  return <div></div>;
}
