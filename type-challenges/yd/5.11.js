// 使用JavaScript/TypeScript实现树的先中后序遍历（不能使用递归）
const data = {
  val: 50,
  left: {
    val: 10,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 15,
      left: null,
      right: null,
    },
  },
  right: {
    val: 70,
    left: {
      val: 60,
      left: null,
      right: null,
    },
    right: {
      val: 80,
      left: null,
      right: null,
    },
  },
};

// 先序遍历 - 右子树先进栈
function preorderTraverse(root) {
  let stack = [root];
  let result = [];

  while (stack.length) {
    let cur = stack.pop();
    result.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return result;
}
console.log('先序遍历', preorderTraverse(data));

// 中序遍历
function inorderTraverse(root) {
  let stack = [root];
  let result = [];
  let node = root;

  while (stack.length || node !== null) {
    if (node) {
      stack.push(node);
      node = node.left
    } else {
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  }
  return result;
}
console.log('中序遍历', inorderTraverse(data));

// 后序遍历
function postorderTraversal(root) {
  let stack = [root];
  let result = [];

  while (stack.length) {
    let cur = stack.pop();
    result.unshift(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return result;
}
console.log('后序遍历', postorderTraversal(data));
