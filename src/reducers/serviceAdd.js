import {
  CHANGE_SERVICE_FIELD,
  CLEAR_FORM,
  EDIT_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  price: "",
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };

    case EDIT_SERVICE:
      const editedItemId = action.payload.id;
      const editedItemName = action.payload.name;
      const editedItemPrice = action.payload.price;

      return { id: editedItemId, name: editedItemName, price: editedItemPrice };

    case CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
}
