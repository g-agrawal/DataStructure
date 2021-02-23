class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value);
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(value, index) {
        let prevIndex = 0;
        let currentNode = this.head;
        while(prevIndex < index - 1) {
            currentNode = currentNode.next;
            prevIndex++;
        }
        let newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
    }
    remove(index) {
        let prevIndex = 0;
        let currentNode = this.head;
        while(prevIndex < index - 1) {
            currentNode = currentNode.next;
            prevIndex++;
        }
        let nodeToRemove = currentNode.next;
        currentNode.next = nodeToRemove.next;
        this.length--;
    }
    traverse() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const linkedList = new LinkedList(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insert(15, 2);
linkedList.remove(2);
console.log(linkedList.traverse());
console.log(linkedList);