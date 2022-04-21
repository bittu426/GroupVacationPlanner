
import { Component } from "react";



class Kayak extends Component {
   /* componentDidMount() {
      const script = document.createElement("script");
      script.setAttribute("src", "https://www.kayak.com/affiliate/widget-v2.js");
  
      script.addEventListener("load", () => {
        KAYAK.embed({
          container: document.getElementById("kayakSearchWidgetContainer"),
          hostname: "www.kayak.com",
          autoPosition: true,
          defaultProduct: "flights",
          enabledProducts: ["flights", "hotels"],
          startDate: "=",
          endDate: "=",
          origin: "=",
          destination: "=",
          ssl: true,
          affiliateId: "acme_corp",
          isInternalLoad: false,
          lc: "en",
          cc: "us",
          mc: "EUR",
        });
      });
      document.body.appendChild(script);
    }
    */
    render() {
      return (
        <div className="kayak">
          <div id="kayakSearchWidgetContainer"></div>
        </div>
      );
    }
  }
  export default Kayak;