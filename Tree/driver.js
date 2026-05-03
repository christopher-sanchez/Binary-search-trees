const { Tree, Node } = require('./bst.js');

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) return;
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}

// 1. Create a BST from a random array
const randomArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
);

const tree = new Tree(randomArray);

console.log("Initial tree (balanced):");
prettyPrint(tree.root);

// 2. Confirm the tree is balanced
console.log("Is balanced:", tree.isBalanced());

// 3. Print traversals
console.log("Level order:");
tree.levelOrderForEach((v) => console.log(v));

console.log("Preorder:");
tree.preOrderForEach((v) => console.log(v));

console.log("Inorder:");
tree.inOrderForEach((v) => console.log(v));

console.log("Postorder:");
tree.postOrderForEach((v) => console.log(v));

// 4. Insert numbers that will unbalance the tree
tree.insert(150);
tree.insert(160);
tree.insert(170);
tree.insert(180);

console.log("\nTree after inserting unbalancing values:");
prettyPrint(tree.root);

// 5. Check balance again
console.log("Is balanced:", tree.isBalanced());

// 6. Rebalance the tree
tree.rebalance();

console.log("\nTree after rebalancing:");
prettyPrint(tree.root);

// 7. Confirm balance again
console.log("Is balanced:", tree.isBalanced());

// 8. Print traversals again
console.log("Level order:");
tree.levelOrderForEach((v) => console.log(v));

console.log("Preorder:");
tree.preOrderForEach((v) => console.log(v));

console.log("Inorder:");
tree.inOrderForEach((v) => console.log(v));

console.log("Postorder:");
tree.postOrderForEach((v) => console.log(v));
