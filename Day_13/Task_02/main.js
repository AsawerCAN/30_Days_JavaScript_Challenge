import { person } from "./person.js";
console.log(person.introduce());

person.birthday();
console.log(`After birthday: ${person.introduce()}`);
