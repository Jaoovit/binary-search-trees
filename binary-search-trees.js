class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*

function buildTree(array) {
  const mid = array.length / 2;
  return array[mid];
}

*/

class Tree {
  constructor(array) {
    this.array = array;
    this.root = buildTree(array);
  }
}

const node = new Node();
const tree = new Tree(
  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324],
  buildTree([])
);

console.log(node);
console.log(tree);
