import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

export default function App() {
  return (
    <div className="container w-60 mt-5">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}
