import { GET_BICI, CREATE_BICI, GET_MARCAS, DELETE_BICI} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_BICI:
      return {
        ...state,
        bici: payload[0],
      };
      case DELETE_BICI:
      return {
        ...state,
        bici: {},
      };
      case CREATE_BICI:

      return {
        ...state,
        publicacion: payload
        
      };
      case GET_MARCAS:
      return {
        ...state,
        marcas: payload,
      };
      


    default:
      return state;
  }
};
