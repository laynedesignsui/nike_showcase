//! CONSTANT IMPORT
import { services } from "../../constants";
//! COMPONENT IMPORT
import ServiceCard from "../components/ServiceCard";

const Services = () => (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );


export default Services;
