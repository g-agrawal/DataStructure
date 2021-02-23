class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor( ) {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }
    pop() {
        const currentNode = this.top;
        this.top = this.top.next;
        this.length--;
        return currentNode;
    }
    peek() {
        return this.top;
    }   
    traverse() {
        const arr = [];
        let currentNode = this.top;
        while(currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    } 
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.traverse());
stack.pop();
stack.peek();
stack.push(30);
console.log(stack);