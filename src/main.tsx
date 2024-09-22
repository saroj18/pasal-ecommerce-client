import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Context from "./context/Context.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Context>
      <App />
    </Context>
  </AuthProvider>,
);
