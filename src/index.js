import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";

const messages = {
  en: {
    myMessage: "Today is {ts, date, ::yyyyMMdd}",
    hello: "Hello!",
  },
  es: {
    myMessage: "Hoy es {ts, date, ::yyyyMMdd}",
    hello: "Hola!",
  },
};

function IntlWrapper({ children }) {
  const [locale, setLocale] = React.useState("pt-BR");

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="pt-BR"
    >
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="pt-BR">pt-BR</option>
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
      {children}
    </IntlProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <IntlWrapper>
      <App />
    </IntlWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
