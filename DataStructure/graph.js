class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
    depthFirstSearch(array) {
        this.search(array, this);         
    }
    search(array, currentNode) {
        array.push(currentNode.name);
        for(const child of currentNode.children) {
            this.search(array, child);
        }  
    }
    breadthFirstSearch(array) {
        const queue = [];
        queue.push(this);
        while(queue.length > 0) {
            const currentNode = queue.shift();
            array.push(currentNode.name);
            for(const child of currentNode.children) {
                queue.push(child);
            }
        }
        return array;
    }
}

const graph = new Node('A').addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].addChild('G').addChild('H');
graph.children[2].children[0].addChild('K');

const result = [];
//graph.depthFirstSearch(result);
graph.breadthFirstSearch(result);
console.log(result);