// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        // Your code here
        const newNode = new SinglyLinkedNode(val);
        this.length++;
        newNode.next = this.head;
        this.head = newNode;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        // Your code here
        if (!this.head) {
            return;
        }
        const removedHead = this.head;
        this.head = removedHead.next;
        this.length--;

        return removedHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        // Your code here
        if (!this.head) {
            return;
        }
        let current = this.head;
        let previous
        while (current.next) {
            previous = current;
            current = current.next;
        }
        if (!previous) {
            this.head = null;
        }
        else {
            previous.next = null;
        }
        this.length--;
        return current;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        // Your code here
        if (this.length === 0) {
            return undefined;
        }
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        // Your code here
        if(this.length) {
            let currNode = this.head;
            while(currNode) {
                console.log(currNode.value);
                currNode = currNode.next;
            }
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
