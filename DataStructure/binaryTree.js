class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;        
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new BinaryTree(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            const queue = [];
            queue.push(this.root);
            while(true) {
                let currentNode = queue.shift();
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                } else {
                    queue.push(currentNode.left);
                }  
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                } else {
                    queue.push(currentNode.right);
                }               
            }
        }
    }
    lookup(value) {
        let currentNode = this.root;
        while(currentNode) {
            if(value === currentNode.value) {
                return currentNode;
            } else {
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return undefined;
    }
}
const tree = new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(10);
console.log(JSON.stringify(tree.root));

