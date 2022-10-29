const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        // Your code here
        const newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.length;
        }
        this.tail.next = newNode;
        this.tail = newNode;

        return this.length;



        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        // Your code here
        if (!this.head) {
            return null;
        }
        const removeHead = this.head;
        this.head = removeHead.next;
        if(!this.head) this.tail = null;

        this.length--;

        return removeHead.value;


        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
