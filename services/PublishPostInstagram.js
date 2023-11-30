import axios from "axios";
import {toast} from "react-hot-toast";


  async function uploadImage(image_url, access_token, ig_user_id, caption) {
    const post_url =  `https://graph.facebook.com/v18.0/${ig_user_id}/media`;
    const payload = {
      image_url: image_url,
      caption: caption,
      access_token: access_token,
    };
    const response  = await axios.post(post_url, payload);
    return response.data;
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
        toast.error("No se pudo publicar la imagen");
      }
    }
