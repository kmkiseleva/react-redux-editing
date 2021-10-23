import { useSelector, useDispatch } from "react-redux";
import {
  changeServiceField,
  clearForm,
  addService,
} from "../actions/actionCreators";

function ServiceAdd() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.serviceAdd);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(item.name, item.price));
    dispatch(clearForm());
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(clearForm());
  };

  return (
    <form className="mb-5 w-50" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control p-2"
          name="name"
          id="name"
          placeholder="Диагностика..."
          onChange={handleChange}
          value={item.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          className="form-control p-2"
          name="price"
          id="price"
          placeholder="5000..."
          onChange={handleChange}
          value={item.price}
        />
      </div>
      <button className="btn btn-success" type="submit">
        Save
      </button>
      <button
        className="btn btn-danger"
        style={{ marginLeft: "10px" }}
        onClick={handleCancel}
      >
        Cancel
      </button>
    </form>
  );
}

export default ServiceAdd;
