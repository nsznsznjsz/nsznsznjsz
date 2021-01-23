(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{389:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linear-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linear-list"}},[t._v("#")]),t._v(" Linear List")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#adt"}},[t._v("ADT")])]),s("li",[s("a",{attrs:{href:"#顺序储存-数组"}},[t._v("顺序储存(数组)")])]),s("li",[s("a",{attrs:{href:"#链式储存"}},[t._v("链式储存")]),s("ul",[s("li",[s("a",{attrs:{href:"#循环链表"}},[t._v("循环链表")])]),s("li",[s("a",{attrs:{href:"#双向链表"}},[t._v("双向链表")])]),s("li",[s("a",{attrs:{href:"#静态链表"}},[t._v("静态链表")])])])]),s("li",[s("a",{attrs:{href:"#查找"}},[t._v("查找")])]),s("li",[s("a",{attrs:{href:"#应用"}},[t._v("应用")])]),s("li",[s("a",{attrs:{href:"#实现"}},[t._v("实现")]),s("ul",[s("li",[s("a",{attrs:{href:"#链队列"}},[t._v("链队列")])]),s("li",[s("a",{attrs:{href:"#循环队列-数组实现"}},[t._v("循环队列 (数组实现)")])])])]),s("li",[s("a",{attrs:{href:"#应用"}},[t._v("应用")])]),s("li",[s("a",{attrs:{href:"#实现"}},[t._v("实现")]),s("ul",[s("li",[s("a",{attrs:{href:"#顺序栈"}},[t._v("顺序栈")])]),s("li",[s("a",{attrs:{href:"#链栈"}},[t._v("链栈")])])])])])]),s("p"),t._v(" "),s("p",[s("strong",[t._v("定义")]),t._v(": 在数据元素的非空有限集合中, 除第一个元素无直接前驱, 最后一个元素无直接后继节点外, 每个元素都有唯一的直接前驱和直接后继节点.")]),t._v(" "),s("h2",{attrs:{id:"adt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adt"}},[t._v("#")]),t._v(" ADT")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"顺序储存-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序储存-数组"}},[t._v("#")]),t._v(" 顺序储存(数组)")]),t._v(" "),s("ul",[s("li",[t._v("可索引")]),t._v(" "),s("li",[t._v("插入, 删除慢")]),t._v(" "),s("li",[t._v("长度受限")])]),t._v(" "),s("h2",{attrs:{id:"链式储存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链式储存"}},[t._v("#")]),t._v(" 链式储存")]),t._v(" "),s("ul",[s("li",[t._v("插入, 删除快")]),t._v(" "),s("li",[t._v("无法索引")]),t._v(" "),s("li",[t._v("查询慢")])]),t._v(" "),s("h3",{attrs:{id:"循环链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环链表"}},[t._v("#")]),t._v(" 循环链表")]),t._v(" "),s("ul",[s("li",[t._v("将最后一个指针指向表头节点")]),t._v(" "),s("li",[t._v("从每个节点都可以访问整个列表")]),t._v(" "),s("li",[t._v("查找前驱节点复杂度为 O(n)")])]),t._v(" "),s("h3",{attrs:{id:"双向链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[t._v("#")]),t._v(" 双向链表")]),t._v(" "),s("ul",[s("li",[t._v("每个节点都保存指向前驱节点和后继节点的指针")]),t._v(" "),s("li",[t._v("查找前驱节点复杂度为 O(1)")])]),t._v(" "),s("h3",{attrs:{id:"静态链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态链表"}},[t._v("#")]),t._v(" 静态链表")]),t._v(" "),s("ul",[s("li",[t._v("适用于没有指针/引用的语言")]),t._v(" "),s("li",[t._v("用大数组模拟内存分配, 记录下一个节点的 index")])]),t._v(" "),s("h2",{attrs:{id:"查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找"}},[t._v("#")]),t._v(" 查找")]),t._v(" "),s("ol",[s("li",[t._v("顺序查找法")])]),t._v(" "),s("p",[s("code",[t._v("Data data[SIZE + 1]")]),t._v("\ndata[0] 为监视哨, 存放查找元素关键字")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("二分法")]),t._v(" "),s("ul",[s("li",[t._v("顺序结构存储")]),t._v(" "),s("li",[t._v("按大小有序排列")])])]),t._v(" "),s("li",[s("p",[t._v("分块查找法")]),t._v(" "),s("ul",[s("li",[t._v("块内无序")]),t._v(" "),s("li",[t._v("块与块之间有序")])])])]),t._v(" "),s("h1",{attrs:{id:"queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),s("p",[t._v("限定性线性表, FIFO")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHead")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("p",[t._v("打印杨辉三角")]),t._v(" "),s("p",[s("strong",[t._v("优先队列是二叉堆实现")])]),t._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("队头指针: front")]),t._v(" "),s("p",[t._v("队尾指针: rear")]),t._v(" "),s("h3",{attrs:{id:"链队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链队列"}},[t._v("#")]),t._v(" 链队列")]),t._v(" "),s("p",[t._v("特殊情况: front === rear")]),t._v(" "),s("h3",{attrs:{id:"循环队列-数组实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环队列-数组实现"}},[t._v("#")]),t._v(" 循环队列 (数组实现)")]),t._v(" "),s("p",[t._v("当 rear < front 时, 说明出现循环")]),t._v(" "),s("p",[t._v("push 时, 当 rear + 1 === MAX_SIZE 时, 令 rear = 0")]),t._v(" "),s("h1",{attrs:{id:"stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stack"}},[t._v("#")]),t._v(" Stack")]),t._v(" "),s("p",[t._v("栈是一种限定性线性表, 遵循 LIFO")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"应用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用-2"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("ul",[s("li",[t._v("Hanoi")]),t._v(" "),s("li",[t._v("递归调用栈 (优化: TCO, 蹦床函数)")]),t._v(" "),s("li",[t._v("表达式求值")])]),t._v(" "),s("h2",{attrs:{id:"实现-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("h3",{attrs:{id:"顺序栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序栈"}},[t._v("#")]),t._v(" 顺序栈")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("Stack_Size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Element data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Stack_Size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"链栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链栈"}},[t._v("#")]),t._v(" 链栈")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("Stack_Size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Element data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  StackNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" StackNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);