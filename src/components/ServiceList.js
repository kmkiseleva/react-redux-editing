import { useSelector, useDispatch } from "react-redux";
import { removeService } from "../actions/actionCreators";

function ServiceList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.serviceList);

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (id) => {
    console.log(id);
    // dispatch(editService(id));
  };

  return (
    <ul className="list-group w-50">
      {items.map((o) => (
        <li className="list-group-item" key={o.id}>
          {o.name} <span style={{ fontWeight: "bold" }}>{o.price}</span>
          <button className="btn btn-info m-2" onClick={() => handleEdit(o.id)}>
            Edit
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => handleRemove(o.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
