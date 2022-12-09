import { GET_BICI, DELETE_USER} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_BICI:
      return {
        bici: payload[0],
      };

    default:
      return state;
  }
};
