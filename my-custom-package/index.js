import { upperCase } from "upper-case";
export function greet(name) {
  console.log(upperCase(`Hello, ${name}. Welcome to greet`));
}

greet("anew");
