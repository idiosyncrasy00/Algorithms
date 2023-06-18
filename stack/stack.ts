//https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld

interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) { }

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  printElements(): void {
    this.storage.forEach((element) => {
      console.log(element);
    })
  }
}

const stack = new Stack<number>();

console.log("Adding elements.....")
stack.push(2);
stack.push(3);
stack.push(5);
stack.printElements(); //2 3 5

console.log("Popping.....")
stack.pop(); //5
stack.printElements(); //2 3

console.log("Adding elements.....")
stack.push(7);
stack.push(10);
stack.push(15)
stack.printElements(); //2 3 7 10 15

console.log("Popping.....")
stack.pop();//15
stack.pop();//10
stack.printElements();//2 3 7