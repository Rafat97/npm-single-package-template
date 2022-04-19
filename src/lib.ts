
export interface IHelloWorld {
  hello: string;
  world: string;
}

export function helloWorld(): string {
  console.log("Hello World");
  return "Hello World";
}
