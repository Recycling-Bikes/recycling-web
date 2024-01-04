import axios from "axios";
import {toast} from "react-hot-toast";

export async function uploadCarouselItems(image_url, access_token, ig_user_id) {

    const post_url =  `https://graph.facebook.com/v18.0/${ig_user_id}/media`;

    // create item container
    const payload = {
      is_carousel_item: true,
      image_url: image_url,
      access_token: access_token,
    };
    const response  = await axios.post(post_url, payload);
    
    return response.data.id;
}

export async function createCarouselContainer(children_ids, access_token, ig_user_id, caption) {
 const post_url = `https://graph.facebook.com/v18.0/${ig_user_id}/media`
  // create carousel container
  const payload = {
    media_type: 'CAROUSEL',
    children: children_ids.join(','),
    caption: caption,
    access_token: access_token,
  }

  const response = await axios.post(post_url, payload);

  return response.data.id;
}

export async function publishCarousel(creation_id, access_token, ig_user_id){
    const post_url = `https://graph.facebook.com/v18.0/${ig_user_id}/media_publish`;

      const second_payload = {
        creation_id: creation_id,
        access_token: access_token,
      };


      return toast.promise(
        axios.post(post_url, second_payload),
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
}



