// import { node } from "webpack";
import { mergeSort } from "./mergeSort";

import { prettyPrint } from "./prettyPrint";

class Node {
    constructor(value) {
        this.data= value;
        this.left = null;
        this.right = null;
    }
}
export class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }


    // insert(value) {
    //     function recursiveFunction(node, value) {
    //         if (value < node.data && node.left == null) {
    //             const newNode = new Node(value);
    //             node.left = newNode;

    //         } else if (value > node.data && node.right == null) {
    //             const newNode = new Node(value);
    //             node.right = newNode;

    //         } else if (value < node.data) {
    //             return recursiveFunction(node.left, value)

    //         } else if (value > node.data) {
    //             return recursiveFunction(node.right, value)

    //         } else if (value == node.data) {
    //             console.log("value already in tree, try another value")
    //             return
    //         }
    //     }
    //     recursiveFunction(this.root, value)
    // }

    // delete(value) {
    //     function recursiveFunction(node, value) {
    //         // this code requires guard clause: if(node.left), or if(node.right)
    //         // consider at least 4 cases
    //         // Case 1: deleting the leaf node
    //         if (node.left && node.left.data === value && node.left.left === null && node.left.right === null) {
    //             node.left = null;
    //         }
    //         else if (node.right && node.right.data === value && node.right.left === null && node.right.right === null) {
    //             node.right = null;
    //         }
    //         // Case 2: deleting a branch node with one leaf; point the preceding child to the 2nd following child
    //         else if (node.left && node.left.data === value && node.left.left !== null && node.left.left.left === null 
    //             && node.left.left.right === null && node.left.right === null) {
    //                 node.left = node.left.left
    //         }
    //         else if (node.left && node.left.data === value && node.left.right !== null && node.left.right.left === null 
    //             && node.left.right.right === null && node.left.left === null) {
    //                 node.left = node.left.right
    //         }
    //         else if (node.right && node.right.data === value && node.right.left !== null && node.right.left.left === null 
    //             && node.right.left.right === null && node.right.right === null) {
    //                 node.right = node.right.left
    //         }
    //         else if (node.right && node.right.data === value && node.right.right !== null && node.right.right.left === null 
    //             && node.right.right.right === null && node.right.left === null) {
    //                 node.right = node.right.right
    //         }
    //         // TODO: edge case where root is has one leaf (two nodes only in the tree)
    //         // requires checking if node is root, and checking if it only has one leaf

    //         // Case 3: deleting a branch with both leaves; get the next right, then leftmost i think
    //         else if (node.data === value && node.left !== null && node.right !== null) {
    //             let temp = node.right;
    //             let tempParent = temp;
    //             while (temp.left !== null) {
    //                 tempParent = temp;
    //                 temp = temp.left;
    //             }
    //             node.data = temp.data;
    //             tempParent.left = null;
    //         }
    //         // Case 4: console log if the value isn't found
    //         else if (value > node.data && node.right === null) {
    //             console.log(`${value} not found, please try again`);
    //             return;
    //         }
    //         else if (value < node.data && node.left === null) {
    //             console.log(`${value} not found, please try again`);
    //             return;
    //         }
    //         else if (value < node.data) {
    //             return recursiveFunction(node.left, value)
    //         } else if ( value > node.data) {
    //             return recursiveFunction(node.right, value)
    //         }
    //     }
    //     recursiveFunction(this.root, value)
    // }

    // find(value) {
    //     function recursiveFunction(node, value) {
    //         if (node.data === value) {
    //             console.log(node)
    //             return node;
    //         }
    //         // check if the value exists at leaf or the leaf parents
    //         else if (value > node.data && node.right === null) {
    //             console.log(`${value} not found`)
    //             return
    //         }
    //         else if (value < node.data && node.left === null) {
    //             console.log(`${value} not found`)
    //             return
    //         }
    //         else if (value > node.data) {
    //             return recursiveFunction(node.right, value);
    //         }
    //         else if (value < node.data) {
    //             return recursiveFunction(node.left, value);
    //         }
    //     }
    //     recursiveFunction(this.root, value)
    // }

    // levelOrderIterative(helperFunction) {
    //     let queue = []
    //     queue.push(this.root)
    //     while (queue.length !== 0) {
    //         helperFunction(queue[0])
    //         if (queue[0].left) queue.push(queue[0].left)
    //         if (queue[0].right) queue.push(queue[0].right)
    //         queue.shift()
    //     }
    // }

    // preOrder(helperFunction) {
    //     if (helperFunction) {
    //         function recursiveFunction(node) {
    //             helperFunction(node)
    //             if (node.left === null && node.right === null) return
    //             else {
    //                 if (node.left) recursiveFunction(node.left)
    //                 if (node.right) recursiveFunction(node.right)
    //             }
    //         }
    //         recursiveFunction(this.root)
    //     } else {
    //         function recursiveFunction(node) {
    //             let recursiveValue = [node.data];
    //             if (node.left === null && node.right === null) return [node.data]
    //             else {
    //                 if (node.left) recursiveValue = recursiveValue.concat(recursiveFunction(node.left))
    //                 if (node.right) recursiveValue = recursiveValue.concat(recursiveFunction(node.right))
    //                 return recursiveValue;
    //             }
    //         }
    //         console.log(recursiveFunction(this.root))

    //         // cleaner version; base case is not stated, as do not need to state if null
    //         // function recursiveTraversal(node) {
    //         // let array = [node.data]            
    //         // if (node.left) array = array.concat(recursiveTraversal(node.left)) // "connecting" arrays
    //         // if (node.right) array = array.concat(recursiveTraversal(node.right)) // "connecting" arrays
    //         // return array
    //         // }
    //         // console.log(recursiveTraversal(this.root))
    //         // }
    //     }
    // }

    // // traverse the left subtree, then the root, then the right subtree.
    // inOrder(helperFunction) {
    //     if (helperFunction) {
    //         function recursiveFunction(node) {
    //             if (node.left === null && node.right === null) helperFunction(node)
    //             else {
    //                 if (node.left) recursiveFunction(node.left)
    //                 helperFunction(node)
    //                 if (node.right) recursiveFunction(node.right)
    //             }
    //         }
    //         recursiveFunction(this.root)
    //     } else {
    //         function recursiveFunction(node) {
    //             let recursiveValue = [];
    //                 if (node.left) recursiveValue = recursiveValue.concat(recursiveFunction(node.left))
    //                 recursiveValue = recursiveValue.concat([node.data])
    //                 if (node.right) recursiveValue = recursiveValue.concat(recursiveFunction(node.right))
    //                 return recursiveValue;
    //         }
    //         console.log(recursiveFunction(this.root))
    //     }
    // }



    // // traverse the left subtree, then the right subtree, then the root.
    // postOrder(helperFunction) {
    //     if (helperFunction) {
    //         function recursiveFunction(node) {
    //             if (node.left === null && node.right === null) helperFunction(node)
    //             else {
    //                 if (node.left) recursiveFunction(node.left)
    //                 if (node.right) recursiveFunction(node.right)
    //                 helperFunction(node)
    //             }
    //         }
    //         recursiveFunction(this.root)
    //     } else {
    //         function recursiveFunction(node) {
    //             let recursiveValue = [];
    //                 if (node.left) recursiveValue = recursiveValue.concat(recursiveFunction(node.left))
    //                 if (node.right) recursiveValue = recursiveValue.concat(recursiveFunction(node.right))
    //                 recursiveValue = recursiveValue.concat([node.data])
    //                 return recursiveValue;
    //         }
    //         console.log(recursiveFunction(this.root))
    //     }
    // }


    // height; find longest length between this node, and leaf node. how? do i need to use find?
    // height(value) {
    //     //first, need to find the node
    //     // may need to do something like, is counter greater than previous counter? then replace previous counter
    //     function recursiveTraversal(node) {
    //         let counter = 1;
    //         if (node.left) counter += recursiveTraversal(node.left);
    //         return counter;
    //     }
    //     console.log(
    //     recursiveTraversal(find(value))
    //     )
    // }
}


export function buildTree(array) {
    console.log(array)
        let sortedArray = mergeSort(array)
        // let removedDuplicates = [... new Set(sortedArray)]
        // return recursiveBuildTree(removedDuplicates)
}

function recursiveBuildTree(array) {
    if (array.length === 0) {
        return null; // what do i need to return? array? node?
    } else {
        const middleIndex = Math.floor(array.length/2)
        const root = new Node(array[middleIndex])

        root.left = recursiveBuildTree(array.slice(0, middleIndex))
        root.right = recursiveBuildTree(array.slice(middleIndex + 1))
        return root;
    }
}

function insert(value) {
    function recursiveFunction(node, value) {
        if (value < node.data && node.left == null) {
            const newNode = new Node(value);
            node.left = newNode;
        } else if (value > node.data && node.right == null) {
            const newNode = new Node(value);
            node.right = newNode;
        } else if (value < node.data) {
            return recursiveFunction(node.left)
            // create new node, make it the child of the previous node, and the new root of the next nodes
        } else if (value > node.data) {
            return recursiveFunction(node.right)
        } else if (value == node.data) {
            console.log("value already in tree, try another value")
            return
        }
    }
    recursiveFunction()
}