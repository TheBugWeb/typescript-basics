class Repository<T extends { id: number }> {
  private readonly items: T[] = [];

  create(payload: Partial<T>): T {
    const data = {
      ...payload,
      id: this.items.length + 1
    };

    this.items.push(data as T);

    return data as T;
  }

  list(): T[] {
    return this.items;
  }

  delete(id: number): T {
    const index = this.items.findIndex((item) => item.id === id);

    const entity = this.items.at(index);
    
    if (!entity) throw new Error("Item does not exist");

    this.items.splice(index, 1);

    return entity;
  }
}

interface User {
  id: number;
  name: string;
  age: number;
  username: string;
}

const userRepository = new Repository<User>();

userRepository.create({
  name: "The Bug",
  age: 21,
  username: "thebug404"
});

userRepository.create({
  name: "Juan",
  age: 22,
  username: "juan1234"
});

console.log(userRepository.list());

userRepository.delete(1);

console.log(userRepository.list());

interface Post {
  id: number;
  title: string;
  description: string;
}

const postRepository = new Repository<Post>();

postRepository.create({
  title: "One",
  description: "One description"
});

postRepository.create({
  title: "Two",
  description: "Two description"
});

console.log(postRepository.list());

postRepository.delete(2);

console.log(postRepository.list());

