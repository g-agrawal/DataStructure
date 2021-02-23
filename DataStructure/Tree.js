class Node {
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
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return;
                    } else {
                        currentNode = currentNode.right;
                    } 
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
    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }            
            //Option 3: Right child that has a left child
            } else {
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
}

const tree = new Tree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.insert(30);
tree.remove(20);
//console.log(JSON.stringify(tree));
console.log(tree.lookup(21 ));