class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right=null;
    }

}

class Tree{
    constructor(array){
        this.root = this.buildTree([...new Set(array)].sort((a,b) => a - b));
    }


buildTree(sortedArray) {
    if (sortedArray.length === 0) return null;

    const mid = Math.floor(sortedArray.length / 2);
    const root = new Node(sortedArray[mid]);

    root.left = this.buildTree(sortedArray.slice(0,mid));
    root.right = this.buildTree(sortedArray.slice(mid + 1));
    return root;

}
}

includes(value, node=this.root){
    if(!node) return false;
    if(value === node.data) return true;

    return value < node.data 
    ? this.includes(value,node.left)
    : this.includes(value,node.right);
}