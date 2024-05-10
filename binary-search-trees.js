class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(array) {
  if (array.length === 0) {
    return null;
  }

  const mid = Math.floor(array.length / 2);
  const root = new Node(array[mid]);

  const queue = [
    [root, [0, mid - 1]],
    [root, [mid + 1, array.length - 1]],
  ];

  return queue;
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = buildTree(array);
  }
}

const node = new Node();
const tree = new Tree(
  [1, 4, 6, 10, 15, 19, 23, 36, 49, 57, 62, 70],
  buildTree([])
);

console.log(tree);
