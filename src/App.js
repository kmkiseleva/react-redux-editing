import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
// import ServiceAddClassBased from "./components/ServiceAddClassBased";
// import ServiceListClassBased from "./components/ServiceListClassBased";

export default function App() {
  return (
    <div className="container w-60 mt-5">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}
