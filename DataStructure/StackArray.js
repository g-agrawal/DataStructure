class Stack {
    constructor( ) {
        this.arr = [];
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        this.arr.pop();
    }
    peek() {
        this.arr[this.arr.length - 1];
    }    
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.pop();
stack.peek();
stack.push(30);
console.log(stack);