// from https://github.com/formatjs/formatjs/blob/main/packages/cli/src/formatters/transifex.ts#L24
export const compileFromTransifexToIntl = (msgs) => {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = msg.string;
  }
  return results;
};
