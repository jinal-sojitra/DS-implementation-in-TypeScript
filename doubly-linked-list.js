"use strict";
class DoublyListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    insertAtBegin(data) {
        const newNode = new DoublyListNode(data);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }
    insertAtLast(data) {
        //if list empty
        if (!this.head) {
            this.insertAtBegin(data);
            return;
        }
        const newNode = new DoublyListNode(data);
        let currentNode = this.head;
        //find a node which is pointing to null
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        newNode.prev = currentNode;
        currentNode.next = newNode;
    }
    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
    insertAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }
        if (index === 0) {
            this.insertAtBegin(data);
            return;
        }
        const newNode = new DoublyListNode(data);
        let currentNode = this.head;
        for (let i = 0; i < index - 1 && currentNode; i++) {
            currentNode = currentNode.next;
        }
        //always point newNode to required nodes first,
        newNode.prev = currentNode;
        if (currentNode) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        if (newNode.next) {
            newNode.next.prev = newNode;
        }
    }
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let currentNode = this.head;
        //1 2 3
        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            console.error("Invalid Index");
            return;
        }
        if (index === 0) {
            this.removeFirst();
        }
        let currentNode = this.head;
        for (let i = 0; i < index - 1 && currentNode; i++) {
            currentNode = currentNode.next;
        }
        if (currentNode && currentNode.next) {
            currentNode.next = currentNode.next.next;
            //checking again because we have assigned another node to it, now it can be null also
            if (currentNode.next) {
                currentNode.next.prev = currentNode;
            }
        }
    }
    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}
const list = new DoublyLinkedList();
list.insertAtBegin(10);
list.insertAtLast(20);
list.insertAt(1, 15);
list.insertAtLast(30);
list.insertAt(2, 25);
list.print();
console.log("Size: ", list.size());
