class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let currentNode = this;
        const newNode = new BST(value);
        while(true) {
            if(value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                } else {
                    currentNode = currentNode.left; 
                }                
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                } else {
                    currentNode = currentNode.right; 
                }  
            }
        }
    }

    contains(value) {
        let currentNode = this;
        while(currentNode) {
            if(value === currentNode.value) {
                return true;
            } else if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(value) {
        
        return this;
    }
}

const bst = new BST(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);
bst.insert(14);

console.log(bst.contains(15));