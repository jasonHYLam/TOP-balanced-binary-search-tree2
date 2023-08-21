import { Tree } from "./BST";
import { buildTree } from "./BST";
import { prettyPrint } from "./prettyPrint";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

console.log(testArray)

buildTree(testArray)
// let newTree = new Tree(testArray)
console.log(newTree)
// prettyPrint(newTree.root)

// newTree.insert(9)
// prettyPrint(newTree.root)

// newTree.delete(323)
// prettyPrint(newTree.root)

// newTree.find(6)
// newTree.find(1)

// // newTree.levelOrderIterative((node) => console.log(node))

// newTree.preOrder()

// newTree.preOrder((node)=> console.log(node.data))

// newTree.inOrder((node)=>console.log(node.data))

// newTree.postOrder()

// newTree.height(5)