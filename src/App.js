import React from "react";
import { IntlProvider } from "react-intl";
import { compileFromTransifexToIntl } from "./compile-transifex-intl";
import { Example } from "./Example";
import { LangSelect } from "./LangSelect";
import { LocaleContext } from "./locale-context";
import en from "./locales/en.json";
import es from "./locales/en.json";

const messages = {
  en: compileFromTransifexToIntl(en),
  es: compileFromTransifexToIntl(es),
};

function App() {
  const [locale, setLocale] = React.useState("pt-BR");

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="pt-BR"
    >
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Example />
        <LangSelect />
      </LocaleContext.Provider>
    </IntlProvider>
  );
}

export default App;
