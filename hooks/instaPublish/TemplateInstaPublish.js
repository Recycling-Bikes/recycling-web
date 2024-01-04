// CustomHook.js
import { useState, useEffect } from 'react';

const useCustomHook = () => {
  const [tags, setTags] = useState("#bici #bicicleta #bike #bicycle #ciclismo #ciclista #cycling #mtb #bicicletas #bikes #ciclistas #bikelife #ciclismodecarretera #ciclismomtb #ciclis");
  const [pass, setPass] = useState(`Forma de pago: \n * De contado. \n * Abonos: Reserva con el 30%, 4 meses de plazo para terminarla de pagar. \n Envios a todo el pais: \n * Gratis en ciudad de Panamá. \n * $20.90 a cualquier otra provincia`);
  const [legal, setLegal] = useState(`Cabe recordar que Recycling Inc es una empresa intermediaria para la venta de productos de ciclismo. Una vez que se completa la venta, solo entregamos el dinero al propietario anterior después de recibir el producto satisfactoriamente en nuestro showroom, por lo que garantizamos la seguridad para su comprador. Si deseas realizar la compra de este producto puedes contactarnos al +507 69240795. ♻🚲♻🚲♻🚲♻🚲♻🚲♻`);
  const [selectTitle, setSelectTitle] = useState('');
  const [publishing, setPublishing] = useState(false);
  const [selectOne, setSelectOne] = useState('');

  const handleSelectOption = (event) => {
    const options = event.target.value;
    setSelectOne(options);
    handleTitle();
  };

  const handleContentPass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  const handleContentTags = (e) => {
    e.preventDefault();
    setTags(e.target.value);
  };

  const handleLegal = (e) => {
    e.preventDefault();
    setLegal(e.target.value);
  };

  const handleTitle = () => {
    const options = selectOne;
    const titleOptions = {
      opcion1: `🟣🟣🟣🟣 DESCUENTO 🟣🟣🟣🟣`,
      opcion2: `🟣🟣🟣🟣 BICI USADA 🟣🟣🟣🟣`,
    };

    if (options == 1) {
      setSelectTitle(titleOptions.opcion1);
    } else if (options == 2) {
      setSelectTitle(titleOptions.opcion2);
    }
  };

  useEffect(() => {
    handleTitle();
  }, [selectOne]);

  return {
    tags,
    setTags,
    pass,
    setPass,
    legal,
    setLegal,
    selectTitle,
    setSelectTitle,
    publishing,
    setPublishing,
    selectOne,
    setSelectOne,
    handleSelectOption,
    handleContentPass,
    handleContentTags,
    handleLegal,
    handleTitle
  };
};

export default useCustomHook;
