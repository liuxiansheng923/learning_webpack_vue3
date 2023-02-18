import { Console } from '@/handler/handler_1.js'
;(function() {
    console.log('index function');
    Console('222')
})()
const obj = { a: 'a', b: 'b', c: { d: 'd' } }
const root = document.getElementById('app')
const div = document.createElement('div')
div.innerHTML = '我是动态添加的文本'
root.appendChild(div)
console.log(obj?.f ?? 'hehe');