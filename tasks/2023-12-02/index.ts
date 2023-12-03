interface heapNode {
  index: number;
  value: string | IgiftName;
  insertionOrder: number;
}

interface IgiftName {
  giftName: string;
}

export class ChristmasQueue<T> {
  private heap: heapNode[] = [];
  private nextInsertionOrder: number = 0;

  constructor() {
    this.heap = [];
  }

  enqueue(value: string | IgiftName, priority: number) {
    this.heap.push({ index: priority, value, insertionOrder: this.nextInsertionOrder++ });
    this.heap.sort((a, b) => {
      if (a.index === b.index) {
        return a.insertionOrder - b.insertionOrder;
      } else {
        return b.index - a.index;
      }
    });
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("There are no letters in the queue!");
    }
    return this.heap.shift()?.value;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
