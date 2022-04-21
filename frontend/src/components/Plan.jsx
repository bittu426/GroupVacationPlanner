import Kayak from "./Kayak";
import Header from "./Header";
import "../styles/Plan.css";

const Plan = () => (
  <div>
    <Header />
    <div className="plan-container">
      <Kayak />
    </div>
  </div>
);

export default Plan;
