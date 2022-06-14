# typescript-basics

This is a repository that contains fundamental features about Typescript with their respective examples.

# ❔ Generics

Generics are a fundamental feature of statically typed languages, allowing developers to pass types as parameters to another type, function, or other structure.

See the other examples [here](/src/generics.ts)

### ✅ Generics syntax

Generic types are written with a greater than and less than symbol, where the passed type is represented. Note that generics work the same way when passing to a function. Note that generics work the same way when we pass to a function, so function, method, class, etc; you know which type you should accept.

Generics can appear in functions, types, classes, and interfaces. But in the following example we will be working with a function.

```ts
function execute<T>(value: T): T {
  return value;
}

console.log(execute("I love generics!"));
// I love generics!
````

**Explanation**

1. First, we define a `function`
2. Add the corresponding parameter of type `<T>`, this will condition the type that is passed to the function.
3. And finally the function returns the passed value.

See the other examples [here](/src/generics.ts)

### Using Generics in Function

```ts
function execute<T>(value: T): T {
  return value;
}
```

### Using Generics in Interfaces and Types

```ts
type Identity<T> = T;

interface Service<T> {
  create(data: T): Promise<T>;
  list(): Promise<T[]>;
  get(id: Identity<string>): Promise<T>;
  update(id: string, data: T): Promise<T>;
  remove(id: string): Promise<T>;
}

interface Address<T> {
  country: T;
  street: string;
}
```

### Using Generics with classes

```ts
class Repository<T> {
  items: T[] = [];

  create(data: T) {
    this.items.push(data);
  }
}

interface User {
  name: string;
  email: string;
  username: string;
}

const repository = new Repository<User>();

repository.create({
  name: "Ivan",
  email: "abc@domain.com",
  username: "ivan123"
});

repository.create({
  name: "Juan",
  email: "xyz@domain.com",
  username: "juan000"
});

console.log(repository.items.length);
// output: 2
```
