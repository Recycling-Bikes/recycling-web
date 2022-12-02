import { GET_BICIS, DELETE_USER} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_BICIS:
      return {
        ...state,
        bicis: payload,
      };

    default:
      return state;
  }
};
