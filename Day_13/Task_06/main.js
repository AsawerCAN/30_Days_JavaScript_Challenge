import _ from "lodash";

const exampleString = "Convert THIS String to camel Case";

const camelCasedString = _.camelCase(exampleString);

console.log(`Original String: ${exampleString}`);
console.log(`Camel Cased String: ${camelCasedString}`);
