class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  size(): number {
    let count = 0;
    let currentNode = this.head;

    //while there is node we want to make it count in size
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  insertAtBegin(data: T): void {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data: T): void {
    const newNode = new ListNode(data);

    //if list empty then make this node the head node
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //find the node that's next is null/ pointing to null -> insert
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insertAt(index: number, data: T): void {
    //index validation
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    if (index === 0) {
      this.insertAtBegin(data);
    } else {
      const newNode = new ListNode(data);

      //go till index less than 1 -> newNode point to which current are pointing
      //-> point current to newNode

      let currentNode = this.head;
      for (let i = 0; i < index - 1 && currentNode; i++) {
        currentNode = currentNode.next;
      }

      //first point newnode to current's next
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
  }

  removeFirst(): void {
    //if list is empty
    if (!this.head) {
      return;
    }
    //make head to it's  next item
    this.head = this.head.next;
  }

  removeLast(): void {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    //go till 2nd last node of the List and point it to null
    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }

  removeAt(index: number): void {
    if (index > 0 && index <= this.size()) {
      if (index === 0) {
        this.removeFirst();
        return;
      }

      let currentNode = this.head;
      for (let i = 0; i < index - 1 && currentNode; i++) {
        currentNode = currentNode.next;
      }
      if (currentNode && currentNode.next) {
        currentNode.next = currentNode.next.next;
      }
    } else {
      console.error("Invalid Index");
    }
  }

  print(): void {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList<number>();

list.insertAtBegin(10);
list.insertAtEnd(20);
list.insertAt(1, 15);
list.print();

console.log("Size: ", list.size());

list.removeAt(1);
list.print();
