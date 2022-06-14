// First example.
// 
// Function that receives a generic type parameter and 
// returns the value.

function execute<T>(value: T): T {
  return value;
}

console.log("---- Return value ----");

console.log(execute<string>("Im developer"));

console.log(execute<number>(100));

console.log(execute<boolean>(true));

// Second example.
// 
// Function responsible for concatenating arrays.

interface LanguageProgramming {
  name: string;
}

function getArray<T>(items : T[]) : T[] {
  return new Array().concat(items);
}

console.log("---- Concatenate Arrays ----");

console.log(
  getArray<LanguageProgramming>([
    { name: "Typescript" },
    { name: "Python" },
    { name: "PHP" }
  ])
);

console.log(getArray<string>(["Ivan", "Josue", "Alberto"]))

console.log(getArray<number>([10, 20, 30]));

console.log(getArray<boolean>([true, false, true]));

// Third example.
// 
// Function responsible for selecting properties of an object.

function pickProperties<T, K extends keyof T>(payload: T, keys: K[]) {
  return Object.assign(
    {},
    ...keys.map((key) => ({ [key]: payload[key] }))
  );
}

interface User {
  name: string;
  age: number;
  country: string;
  username: string;
}

interface Post {
  title: string;
  slug: string;
  description: string;
}

const user: User = {
  name: "Ivan",
  age: 21,
  country: "El Salvador",
  username: "thebug404"
}

const post: Post = {
  title: "Learning Typescript Generics",
  description: "Some description",
  slug: "https://domain.com/posts/learning-typescript-generics"
}

console.log("---- Pick Properties ----");

console.log(pickProperties(user, ["name", "username"]));

console.log(pickProperties(post, ["title", "slug"]));
