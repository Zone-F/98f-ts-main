// 1.请说明如下代码打印顺序和原因
const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((r, reject) => {
    setTimeout(() => {      
      r(1);
    });
    console.log(2);
    r(3);
  });
  resolve(4);
  innerpro.then((res) => console.log(res));

  console.log("yideng");
});
pro.then((res) => console.log(res));
console.log("end");

// 2-->yideng-->end-->3-->4
//首先是栈中的宏任务执行：2-->yideng-->end
//然后是微任务：innerpro先resolve，然后是 pro的resolve，所以微任务执行完后会输出：3-->4
// innerpro中setTimeout里的resolve不会执行了，因为已经r(3)过了



