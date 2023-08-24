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

function printTreeOrders(tree) {
    console.log(
        'level order',
        tree.levelOrderIterative(),
        'pre order',
        tree.preOrder(),
        'post order',
        tree.postOrder(),
        'in order',
        tree.inOrder()
    )
}


let newTree = new Tree(createRandomArray())
console.log(
    newTree.isBalanced()
)


unbalanceTree(newTree)

printTreeOrders(newTree)

prettyPrint(newTree.root)

console.log(newTree.isBalanced())

newTree.rebalance()

console.log(newTree.isBalanced())

prettyPrint(newTree.root)

printTreeOrders(newTree)