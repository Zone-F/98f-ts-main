// 使用JavaScript/TypeScript实现树的先中后序遍历（不能使用递归）
const data = {
  name: "A",
  children: [
    {
      name: "B1",
      children: [
        {
          name: "C1",
          children: [
            {
              name: "D",
              children: [
                {
                  name: "D1",
                  children: [{ name: "F1 " }, { name: "F2" }],
                },
                { name: "D2" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "B2",
      children: [{ name: "C2" }, { name: "C3" }],
    },
  ],
};

// 先序遍历 - 右子树先进栈
function preorderTraverse(root) {
  let stack = [root];
  let result = [];

  while (stack.length) {
    let cur = stack.pop();
    result.push(cur.name);
    cur.children && stack.push(cur.children);
  }
  return result
}
console.log('先序遍历', preorderTraverse(data));

// 中序遍历
function inorderTraverse() {

}
// 后序遍历
function postorderTraversal() {

}