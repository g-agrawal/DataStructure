class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor( ) {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        const removeNode = this.first;
        this.first = this.first.next;
        this.length--;
        return removeNode;
    }
    peek() {
        return this.first;
    }   
    traverse() {
        const arr = [];
        let currentNode = this.first;
        while(currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    } 
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.traverse());
queue.dequeue();
queue.peek();
queue.enqueue(30);
console.log(queue);