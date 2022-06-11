function execute<T>(value: T): void {
  console.log("Im executing...", value);
}

class Repository<T> {
  private items: T[] = [];

  create(payload: T): T {
    this.items.push(payload);

    return payload;
  }

  list(): T[] {
    return this.items;
  }
}

interface User {
  name: string;
  age: number;
  username: string;
}

const userRepository = new Repository<User>();

userRepository.create({
  name: "Juan",
  age: 21,
  username: "juan123"
});

userRepository.create({
  name: "Robert",
  age: 50,
  username: "robert321"
});

userRepository.create({
  name: "Fernando",
  age: 25,
  username: "fer000"
});

const names = userRepository.list().map((user) => {
  return user.name;
});

console.log("User names: ", names);

console.log("Users: ", userRepository.list());

interface Post {
  title: string;
  description: string;
}

const postRepository = new Repository<Post>();

postRepository.create({
  title: "One",
  description: "One description"
});

console.log("Posts: ", postRepository.list());
