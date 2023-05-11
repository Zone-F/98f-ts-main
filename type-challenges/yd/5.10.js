// 使用JavaScript/TypeScript实现树的深度优先遍历和广度优先遍历~
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

// 深度优先
let result = [];
function traverseTree(node) {
  if (!node) return;
  result.push(node.name);
  if (node.children?.length) {
    // 所有叶子节点分别递归
    node.children.map((child) => traverseTree(child));
  }
  return result;
}
traverseTree(data);
console.log('深度优先:',result);

// 广度优先
let result2 = [];
function traverseTree2(node) {
  let queen = [node]
  while(queen.length){
    let cur = queen.shift();
    result2.push(cur.name);
    cur.children && cur.children.forEach(child=>{
      queen.push(child)
    })
  }
  return result;
}
traverseTree2(data)
console.log('广度优先:',result2);
