import { FormattedMessage } from "react-intl";

export function Example() {
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
