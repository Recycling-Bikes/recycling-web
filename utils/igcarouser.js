import axios from "axios";
import {toast} from "react-hot-toast";

export async function uploadCarousel(images, access_token, ig_user_id, caption) {
  const post_url =  `https://graph.facebook.com/v18.0/${ig_user_id}/media`;
  let container_ids = [];

  // Paso 1: Crear contenedores individuales para cada imagen
  for (let image_url of images) {
    const payload = {
      image_url: image_url,
      caption: caption,
      access_token: access_token,
    };
    const response  = await axios.post(post_url, payload);
    container_ids.push(response.data.id);
  }

  // Paso 2: Crear un contenedor para el carrusel
  const carousel_payload = {
    children_media_ids: container_ids.join(','),
    access_token: access_token,
  };
  const carousel_response = await axios.post(post_url, carousel_payload);

  // Paso 3: Publicar el carrusel
  return publishPostInstagram(carousel_response.data, access_token, ig_user_id);
}

export async function publishPostInstagram(result, access_token, ig_user_id){
  if("id" in result) {
    const creation_id = result.id;
    const second_url = `https://graph.facebook.com/v18.0/${ig_user_id}/media_publish`;
    const second_payload = {
      creation_id: creation_id,
      access_token: access_token,
    };
    toast.promise(
      axios.post(second_url, second_payload),
      {
        loading: "Publicando en Instagram...",
        success: "Carrusel publicado en Instagram",
        error: "Error al publicar el carrusel en Instagram",
      },
      {
        style: {
          border: "1px solid #0fa899",
        },
      }
    );

    } else {
      toast.error("No se pudo publicar el carrusel");
    }
}



export async function uploadImages(image_urls, access_token, ig_user_id, caption) {
  const media_ids = [];
  for (const image_url of image_urls) {
    const post_url =  `https://graph.facebook.com/v18.0/${ig_user_id}/media`;
    const payload = {
      image_url: image_url,
      caption: caption,
      access_token: access_token,
    };
    const response  = await axios.post(post_url, payload);
    media_ids.push(response.data.id);
  }
  return media_ids;
}

export async function publishCarousel(media_ids, access_token, ig_user_id){
  if(media_ids.length > 0) {
    const second_url = `https://graph.facebook.com/v18.0/${ig_user_id}/media_publish`;
    const second_payload = {
      children: media_ids, // nota el cambio aquí
      access_token: access_token,
    };
    toast.promise(
      axios.post(second_url, second_payload),
      {
        loading: "Publicando en Instagram...",
        success: "Imagen publicada en Instagram",
        error: "Error al publicar la imagen en Instagram",
      },
      {
        style: {
          border: "1px solid #0fa899",
        },
      }
    );
  } else {
    toast.error("No se pudo publicar el carrusel");
  }
}
