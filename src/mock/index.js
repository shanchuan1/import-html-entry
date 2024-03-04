import {execScripts} from '../index'



// 模拟获取外部脚本内容的函数
function getExternalScripts(scripts, fetch) {
	return Promise.all(scripts.map(fetch));
  }

  // 模拟fetch函数
  function defaultFetch(script) {
	return Promise.resolve(`console.log('Mocked script ${script} executed');`);
  }

  // 模拟执行脚本的函数
  function evalCode(scriptSrc, code) {
	console.log(`Executing script ${scriptSrc}`);
	eval(code);
	console.log(`Script ${scriptSrc} execution completed.`);
  }

  // 模拟函数调用
  execScripts(null, ['/script1.js', '/script2.js', '/script3.js'], {}, {})
	.then(() => console.log('All scripts executed successfully!'))
	.catch(() => console.error('Error occurred while executing scripts'));
