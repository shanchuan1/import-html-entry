

/* evalCode 执行js文件代码 */
const evalCache = {};
function evalCode(scriptSrc, code) {
	const key = scriptSrc;
	if (!evalCache[key]) {
		const functionWrappedCode = `(function(){${code}})`;
		evalCache[key] = (0, eval)(functionWrappedCode);
	}
	const evalFunc = evalCache[key];
	evalFunc.call(window);
}

const scriptSrc = "http://localhost:2222/js/chunk-vendors.js"
// const code = "console.log('今天吃什么')"
const code = "const add = () => {return 1+1}; const res = add(); console.log(res);"

evalCode(scriptSrc, code)
console.log('🚀 ~ evalCache:', evalCache)


