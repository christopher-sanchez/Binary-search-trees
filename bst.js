class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class Tree {
    constructor(array) {
        this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
    }


    buildTree(sortedArray) {
        if (sortedArray.length === 0) return null;

        const mid = Math.floor(sortedArray.length / 2);
        const root = new Node(sortedArray[mid]);

        root.left = this.buildTree(sortedArray.slice(0, mid));
        root.right = this.buildTree(sortedArray.slice(mid + 1));
        return root;

    }


includes(value, node = this.root){
    if (!node) return false;
    if (value === node.data) return true;

    return value < node.data
        ? this.includes(value, node.left)
        : this.includes(value, node.right);
}

insert(value, node = this.root){
    if (!node) return new Node(value);

    if (value === node.data) return node;

    if (value < node.data) {
        node.left = this.insert(value, node.left);
    } else {
        node.right = this.insert(value, node.right);
    }
    return node;
}

deleteItem(value, node = this.root) {
    if (!node) return null;

    if (value < node.data) {
        node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
        node.right = this.deleteItem(value, node.right);
    } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let successor = node.right;
        while (successor.left) successor = successor.left;

        node.data = successor.data;
        node.right = this.deleteItem(successor.data, node.right);
    }
    return node;
}

levelOrderForEach(callback){
    if(!callback) throw new Error("Callback required");

    const queue = [this.root];

    while(queue.length){
        const node = queue.shift();
        callback(node.data);
        
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}

inOrderForEach(callback, node=this.root){
    if(!callback) throw new Error
}


}
