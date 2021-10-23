import { CHANGE_SERVICE_FIELD, CLEAR_FORM } from "../actions/actionTypes";

const initialState = {
  name: "",
  price: "",
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };

    case CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
}
