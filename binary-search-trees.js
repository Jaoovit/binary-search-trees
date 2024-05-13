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

  while (queue.length > 0) {
    const [parent, [left, right]] = queue.shift();

    if (left <= right && parent != null) {
      const mid = Math.floor((left + right) / 2);
      const child = new Node(array[mid]);

      if (array[mid] < parent.val) {
        parent.left = child;
      } else {
        parent.right = child;
      }

      queue.push([child, [left, mid - 1]]);
      queue.push([child, [mid + 1, right]]);
    }
  }

  return root;
}

function printBST(root) {
  if (root === null) {
    return;
  }

  console.log(root.val + " ");
  printBST(root.left);
  printBST(root.right);
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
