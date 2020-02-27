let arr = [],  	
s = +new Date;  // 将日期对象转换成 number 类型

// 顺便测试下 push
for (let i = 0; i < 70000; i++) {
arr.push(i);    // 入栈操作填充该数组
}

console.log(+new Date - s);    // 差值显示执行时间

// pop 测试
s = +new Date;


for(let i = 0; i < 70000; i++) {
arr.pop();
}

console.log(+new Date - s);

// unshift 测试
s = +new Date;

for(let i = 0; i < 70000; i++) {
arr.unshift(i);
}

console.log(+new Date - s);

// 害顺便也测试一下 shift 吧
s = +new Date;


for(let i = 0; i < 70000; i++) {
arr.shift();
}

console.log(+new Date - s);
