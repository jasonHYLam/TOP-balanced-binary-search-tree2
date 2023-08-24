import { Tree } from "./BST";
import { buildTree } from "./BST";
import { prettyPrint } from "./prettyPrint";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

function createRandomArray() {
    let randomArray = []
    const numElements = 10
    const maxNum = 100

    for (let i = 0; i < numElements; i++) {
        randomArray.push(Math.floor(Math.random() * maxNum))
    }
    return randomArray
}

function unbalanceTree(tree) {
    const extraNumElements = 10
    const maxNum = 999

    for (let i = 0; i < extraNumElements; i++) {
        tree.insert(Math.floor(Math.random() * maxNum) + 100)
    }
}


// console.log(testArray)

// buildTree(testArray)
// let newTree = new Tree(testArray)
let newTree = new Tree(createRandomArray())
console.log(
    newTree.isBalanced()
)

console.log(
    'level order',
    newTree.levelOrderIterative()
)
console.log(
    'pre order',
    newTree.preOrder()
)
console.log(
    'post order',
    newTree.postOrder()
)
console.log(
    'in order',
    newTree.inOrder()
)

unbalanceTree(newTree)

// newTree.insert(9)
prettyPrint(newTree.root)

newTree.rebalance()

console.log(
    newTree.isBalanced()
)

prettyPrint(newTree.root)
// newTree.delete(323)
// prettyPrint(newTree.root)

newTree.find(6)
newTree.find(1)
newTree.find(5)

// newTree.levelOrderIterative((node) => console.log(node))

newTree.levelOrderIterative();
newTree.preOrder()

// newTree.preOrder((node)=> console.log(node.data))

// newTree.inOrder((node)=>console.log(node.data))

newTree.postOrder()

// console.log(
//     newTree.h,eight(50)
// )

// console.log(
//     newTree.height(6345)
// )



// console.log(
//     newTree.isBalanced()
// )

// newTree.insert(999)
// newTree.insert(322)
// newTree.insert(321)
// newTree.insert(320)
// newTree.insert(0)
// prettyPrint(newTree.root)
// console.log(
//     newTree.height(32477)
// )
// console.log(
//     newTree.depth(320)
// )
// console.log(
//     newTree.height(5)
// )
// console.log(
//     newTree.isBalanced2()
// )
// console.log(
//     newTree.isBalanced()
// )

// newTree.rebalance();