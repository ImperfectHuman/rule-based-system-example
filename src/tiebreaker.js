const randEntry = arr => arr[Math.floor(Math.random() * arr.length)];

async function tiebreaker(rules) {
  const options = rules.flatMap((rule, index) => {
    if (rule.tiebreakweight && rule.tiebreakweight > 1) {
      return Array.from(Array(rule.tiebreakweight).keys()).map(i => index);
    } else {
      return [ index ];
    }
  });
  return randEntry(options);
}

export default tiebreaker;
