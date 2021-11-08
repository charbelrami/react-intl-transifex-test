import React from "react";
import { LocaleContext } from "./locale-context";

export function LangSelect() {
  const { locale, setLocale } = React.useContext(LocaleContext);

  return (
    <select value={locale} onChange={(e) => setLocale(e.target.value)}>
      <option value="pt-BR">pt-BR</option>
      <option value="en">en</option>
      <option value="es">es</option>
    </select>
  );
}
