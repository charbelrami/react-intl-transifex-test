import { FormattedMessage } from "react-intl";

function App() {
  return (
    <>
      <FormattedMessage
        id="myMessage"
        defaultMessage="Hoje é {ts, date, ::yyyyMMdd}"
        values={{ ts: Date.now() }}
      />
      <FormattedMessage id="hello" defaultMessage="Olá!" />
    </>
  );
}

export default App;
