import "./App.css";
import { useRoutes } from "react-router-dom";
import "animate.css";
import WOW from "wowjs";
import { useEffect } from "react";
import routes from "./routes";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  let router = useRoutes(routes);
  return router;
}

export default App;
