import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyShopProvider, MyStore } from "./context/MyECommerce.jsx";

createRoot(document.getElementById("root")).render(
  <MyShopProvider>
    <App />
  </MyShopProvider>,
);
