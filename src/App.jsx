import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const routerBase = __BASE_PATH__.endsWith("/")
  ? __BASE_PATH__.slice(0, -1) || "/"
  : __BASE_PATH__;

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={routerBase}>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
