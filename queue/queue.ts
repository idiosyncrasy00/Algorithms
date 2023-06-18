//https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld

interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
}

class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) { }

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
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

const queue = new Queue<number>();

console.log("Enqueue elements.....")
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.printElements(); //2 3 5

console.log("Dequeue.....")
queue.dequeue(); //2
queue.printElements(); //3 5

console.log("Adding elements.....")
queue.enqueue(7);
queue.enqueue(10);
queue.enqueue(15)
queue.printElements(); //3 5 7 10 15

console.log("Dequeue.....")
queue.dequeue();//3
queue.dequeue();//5
queue.printElements();//7 10 15