(this["webpackJsonpelectron-playground"]=this["webpackJsonpelectron-playground"]||[]).push([[26],{1334:function(n,e,o){n.exports=["# \u534f\u8bae\u81ea\u52a8\u5524\u8d77\u5e94\u7528\u4e0e\u81ea\u5b9a\u4e49\u534f\u8bae\n\n## 1. \u534f\u8bae: \u4ece\u7f51\u9875\u7aef\u5524\u8d77Electron\u5e94\u7528\n\n### 1.1 \u534f\u8bae\u5524\u8d77\u793a\u4f8b:\n\n","![]("+o(1335)+")","\n\n\n### 1.2 \u4ec0\u4e48\u662f\u534f\u8bae\n\nelectron\u6ce8\u518c\u7684\u534f\u8bae, electron\u4f1a\u5c06\u534f\u8bae\u6ce8\u518c\u5230\u7cfb\u7edf\u7684\u534f\u8bae\u5217\u8868\u4e2d\uff0c\u5b83\u662f\u7cfb\u7edf\u5c42\u7ea7\u7684API\uff0c\u53ea\u80fd\u5728\u5f53\u524d\u7cfb\u7edf\u4e0b\u4f7f\u7528, \u5176\u4ed6\u672a\u6ce8\u518c\u534f\u8bae\u7684\u7535\u8111\u4e0d\u80fd\u8bc6\u522b\u3002\n\nElectron\u7684app\u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5904\u7406\u534f\u8bae\u7684\u65b9\u6cd5, \u8fd9\u4e9b\u65b9\u6cd5\u5141\u8bb8\u60a8\u8bbe\u7f6e\u534f\u8bae\u548c\u53d6\u6d88\u534f\u8bae, \u6765\u8ba9\u4f60\u7684\u5e94\u7528\u6210\u4e3a\u9ed8\u8ba4\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\n\n### 1.3 \u534f\u8bae\u7684\u4f5c\u7528\n\n\u6ce8\u518c\u4e00\u4e2a\u534f\u8bae\u5230\u7cfb\u7edf\u534f\u8bae\u4e2d, \u5f53\u901a\u8fc7\u5176\u4ed6\u5e94\u7528/\u6d4f\u89c8\u5668\u7f51\u9875\u7aef**\u6253\u5f00\u65b0\u534f\u8bae\u7684\u94fe\u63a5\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u68c0\u6d4b\u8be5\u534f\u8bae\u6709\u6ca1\u6709\u5728\u7cfb\u7edf\u534f\u8bae\u4e2d, \u5982\u679c\u8be5\u534f\u8bae\u6ce8\u518c\u8fc7\uff0c\u7136\u540e\u5524\u8d77\u534f\u8bae\u7684\u9ed8\u8ba4\u5904\u7406\u7a0b\u5e8f(\u6211\u4eec\u7684\u5e94\u7528)**\u3002\n\n### 1.4 \u6ce8\u518c\u534f\u8bae: app.setAsDefaultProtocolClient\n\n\u534f\u8bae\u9700\u8981\u5728ready\u4e8b\u4ef6\u540e\u6ce8\u518c\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b.\n\n```js\n// @@code-renderer: runner\n// @@code-props: { height: '400px' }\n// \u6ce8\u518c\u81ea\u5b9a\u4e49\u534f\u8bae\nconst { app } = require('electron')\nconst path = require('path')\n\n// \u6ce8\u518c\u81ea\u5b9a\u4e49\u534f\u8bae\nfunction setDefaultProtocol() {\n  const agreement = 'electron-playground-code' // \u81ea\u5b9a\u4e49\u534f\u8bae\u540d\n  let isSet = false // \u662f\u5426\u6ce8\u518c\u6210\u529f\n\n  app.removeAsDefaultProtocolClient(agreement) // \u6bcf\u6b21\u8fd0\u884c\u90fd\u5220\u9664\u81ea\u5b9a\u4e49\u534f\u8bae \u7136\u540e\u518d\u91cd\u65b0\u6ce8\u518c\n  // \u5f00\u53d1\u6a21\u5f0f\u4e0b\u5728window\u8fd0\u884c\u9700\u8981\u505a\u517c\u5bb9\n  if (process.env.NODE_ENV === 'development' && process.platform === 'win32') {\n    // \u8bbe\u7f6eelectron.exe \u548c app\u7684\u8def\u5f84\n    isSet = app.setAsDefaultProtocolClient(agreement, process.execPath, [\n      path.resolve(process.argv[1]),\n    ])\n  } else {\n    isSet = app.setAsDefaultProtocolClient(agreement)\n  }\n  console.log('\u662f\u5426\u6ce8\u518c\u6210\u529f', isSet)\n}\n\nsetDefaultProtocol()\n```\n\n### 1.5 \u4f7f\u7528\u534f\u8bae\n\n\u4f7f\u7528\u65b9\u5f0f: \u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u6ce8\u518c\u597d\u7684\u534f\u8bae\uff0c\u5373\u53ef\u5524\u8d77\u5e94\u7528\u3002 \n\n\u534f\u8bae\u5524\u8d77\u7684\u94fe\u63a5\u683c\u5f0f: \u81ea\u534f\u8bae\u540d\u79f0://\u53c2\u6570\n\n\u6bd4\u5982\u4e0a\u6587\u6ce8\u518c: `electron-playground-code`\u534f\u8bae,\u89e6\u53d1\u65f6\u4f1a\u9ed8\u8ba4\u5e26\u4e0a`://`\u3002\n\n\u5728\u4f7f\u7528\u7684\u65f6\u5019, \u9700\u8981\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165: \n\n```js\nelectron-playground-code://1234 // 1234\u662f\u53c2\u6570 \u53ef\u6839\u636e\u4e1a\u52a1\u81ea\u884c\u4fee\u6539\n```\n\n#### 1.6 \u6ce8\u518c\u534f\u8bae\u5e76\u901a\u8fc7\u6d4f\u89c8\u5668\u5524\u8d77\u540e\u53f0\u5e94\u7528\u7684gif\u793a\u4f8b:\n\n","![]("+o(1336)+")","\n\n### 1.7 \u76d1\u542c\u5e94\u7528\u7a0b\u5e8f\u88ab\u5524\u8d77\n\n\u5e94\u7528\u7a0b\u5e8f\u5524\u8d77\uff0cmac\u7cfb\u7edf\u4f1a\u89e6\u53d1open-url\u4e8b\u4ef6\uff0cwindow\u7cfb\u7edf\u4f1a\u89e6\u53d1second-instance\u4e8b\u4ef6\u3002\n\n```js\n// @@code-renderer: runner\n// @@code-props: { height: '450px' }\n// \u6ce8\u518c\u81ea\u5b9a\u4e49\u534f\u8bae\nconst { app, dialog } = require('electron')\nconst agreement = 'electron-playground-code' // \u81ea\u5b9a\u4e49\u534f\u8bae\u540d\n// \u9a8c\u8bc1\u662f\u5426\u4e3a\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u94fe\u63a5\nconst AGREEMENT_REGEXP = new RegExp(`^${agreement}://`)\n\n// \u76d1\u542c\u81ea\u5b9a\u4e49\u534f\u8bae\u5524\u8d77\nfunction watchProtocol() {\n  // mac\u5524\u9192\u5e94\u7528 \u4f1a\u6fc0\u6d3bopen-url\u4e8b\u4ef6 \u5728open-url\u4e2d\u5224\u65ad\u662f\u5426\u4e3a\u81ea\u5b9a\u4e49\u534f\u8bae\u6253\u5f00\u4e8b\u4ef6\n  app.on('open-url', (event, url) => {\n    const isProtocol = AGREEMENT_REGEXP.test(url)\n    if (isProtocol) {\n      console.log('\u83b7\u53d6\u534f\u8bae\u94fe\u63a5, \u6839\u636e\u53c2\u6570\u505a\u5404\u79cd\u4e8b\u60c5')\n      dialog.showMessageBox({\n        type: 'info',\n        message: 'Mac protocol \u81ea\u5b9a\u4e49\u534f\u8bae\u6253\u5f00',\n        detail: `\u81ea\u5b9a\u4e49\u534f\u8bae\u94fe\u63a5:${url}`,\n      })\n    }\n  })\n  // window\u7cfb\u7edf\u4e0b\u5524\u9192\u5e94\u7528\u4f1a\u6fc0\u6d3bsecond-instance\u4e8b\u4ef6 \u5b83\u5728ready\u6267\u884c\u4e4b\u540e\u624d\u80fd\u88ab\u76d1\u542c\n  app.on('second-instance', (event, commandLine) => {\n    // commandLine \u662f\u4e00\u4e2a\u6570\u7ec4\uff0c \u5524\u9192\u7684\u94fe\u63a5\u4f5c\u4e3a\u6570\u7ec4\u7684\u4e00\u4e2a\u5143\u7d20\u653e\u5728\u8fd9\u91cc\u9762\n    commandLine.forEach(str => {\n      if (AGREEMENT_REGEXP.test(str)) {\n        console.log('\u83b7\u53d6\u534f\u8bae\u94fe\u63a5, \u6839\u636e\u53c2\u6570\u505a\u5404\u79cd\u4e8b\u60c5')\n        dialog.showMessageBox({\n          type: 'info',\n          message: 'window protocol \u81ea\u5b9a\u4e49\u534f\u8bae\u6253\u5f00',\n          detail: `\u81ea\u5b9a\u4e49\u534f\u8bae\u94fe\u63a5:${str}`,\n        })\n      }\n    })\n  })\n}\n\n// \u5728ready\u4e8b\u4ef6\u56de\u8c03\u4e2d\u76d1\u542c\u81ea\u5b9a\u4e49\u534f\u8bae\u5524\u8d77\nwatchProtocol()\nconsole.log('\u76d1\u542c\u6210\u529f')\n```\n\n### 1.8 \u5524\u8d77\u5e94\u7528\u6267\u884c\u56de\u8c03\u793a\u4f8b\n\n","![]("+o(1337)+")","\n\n\n### 1.9 \u5e94\u7528\u573a\u666f\n\n1. \u5355\u7eaf\u5524\u9192\u5e94\u7528\n\n    \u53ea\u9700\u6ce8\u518c\u534f\u8bae\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u6253\u5f00\u5e94\u7528\u3002\n    \u8868\u73b0\uff1a\u5982\u679c\u5e94\u7528\u672a\u6253\u5f00\u5c06\u6253\u5f00\u5e94\u7528\uff0c\u5982\u679c\u5e94\u7528\u5df2\u7ecf\u6253\u5f00\u5e94\u7528\u5c06\u4f1a\u6fc0\u6d3b\u5e94\u7528\u7a97\u53e3\u3002\n\n2. \u6839\u636e\u534f\u8bae\u94fe\u63a5\u7684\u53c2\u6570\u8fdb\u884c\u5404\u79cd\u64cd\u4f5c\n\n   \u5982\u4e0a\u9762\u7684\u5f39\u7a97\u6f14\u793a, **\u5728\u76d1\u542c\u534f\u8bae\u94fe\u63a5\u6253\u5f00\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u534f\u8bae\u94fe\u63a5**\u3002\n\n   \u6211\u4eec\u53ef\u4ee5\u6839\u636e\u534f\u8bae\u94fe\u63a5\u6765\u8fdb\u884c\u5404\u79cd\u4e1a\u52a1\u64cd\u4f5c\u3002\n\n   \u6bd4\u5982\u8df3\u8f6c\u6307\u5b9a\u94fe\u63a5\u5730\u5740\uff0c\u6bd4\u5982\u5224\u65ad\u662f\u5426\u767b\u5f55\u518d\u8fdb\u884c\u8df3\u8f6c\uff0c\u6bd4\u5982\u4e0b\u8f7d\u6307\u5b9a\u6587\u4ef6\u7b49\u3002\n\n### 1.10 \u4e00\u4e9b\u5176\u4ed6API\n\n**app.removeAsDefaultProtocolClient(protocol)** \u5220\u9664\u6ce8\u518c\u7684\u534f\u8bae, \u8fd4\u56de\u662f\u5426\u6210\u529f\u5220\u9664\u7684Boolean\n\n**Mac: app.isDefaultProtocolClient(protocol)** \u5f53\u524d\u7a0b\u5e8f\u662f\u5426\u4e3a\u534f\u8bae\u7684\u5904\u7406\u7a0b\u5e8f\u3002\n\n**app.getApplicationNameForProtocol(url)** \u83b7\u53d6\u8be5\u534f\u8bae\u94fe\u63a5\u7684\u5e94\u7528\u5904\u7406\u7a0b\u5e8f\n\n\n\u53c2\u6570\u8bf4\u660e: \n\nprotocol \u4e0d\u5305\u542b:// \u6ce8\u518c\u7684\u534f\u8bae\u540d\u3002\n\nurl \u5305\u542b://\n\n\n```js\n// @@code-renderer: runner\n// @@code-props: { height: '200px' }\n// \u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u5176\u4ed6\u76f8\u5173API\nconst { app } = require('electron')\nconst agreement = 'electron-playground-code' // \u81ea\u5b9a\u4e49\u534f\u8bae\u540d\n\nconsole.log('\u81ea\u884c\u6ce8\u91ca\uff0c\u81ea\u7531\u5c1d\u8bd5')\nconst isApp = app.isDefaultProtocolClient(agreement)\nconsole.log('\u5f53\u524d\u7a0b\u5e8f\u662f\u5426\u4e3a\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u5904\u7406\u7a0b\u5e8f: ', isApp)\n\nconst AgreementAppName = app.getApplicationNameForProtocol(`${agreement}://`)\nconsole.log('\u83b7\u53d6\u8be5\u81ea\u5b9a\u4e49\u534f\u8bae\u94fe\u63a5\u7684\u5e94\u7528\u5904\u7406\u7a0b\u5e8f\u7684\u540d\u5b57', AgreementAppName)\n\nconst isDelete = app.removeAsDefaultProtocolClient(agreement)\nconsole.log('\u5220\u9664\u81ea\u5b9a\u4e49\u534f\u8bae', isDelete)\n```\n\n## 2. \u81ea\u5b9a\u4e49\u534f\u8bae\n\n\u6ce8\u518c\u81ea\u5b9a\u4e49\u534f\u8bae\uff0c\u62e6\u622a\u57fa\u4e8e\u73b0\u6709\u534f\u8bae\u7684\u8bf7\u6c42\uff0c\u6839\u636e\u6ce8\u518c\u7684\u81ea\u5b9a\u4e49\u534f\u8bae\u7c7b\u578b\u8fd4\u56de\u5bf9\u5e94\u7c7b\u578b\u7684\u6570\u636e\u3002\n\n\u5728\u8be5\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u5730\u5740: electron-playground/app/protocol, \u53ef\u4ee5\u8fd0\u884c\u9879\u76ee\u8c03\u8bd5\u4e00\u4e0b\u770b\u770b\u6548\u679c\u3002\n\n### 2.1 protocol.registerSchemesAsPrivileged\n\n\u5c06\u534f\u8bae\u6ce8\u518c\u6210\u6807\u51c6\u7684scheme, \u65b9\u4fbf\u540e\u7eed\u8c03\u7528\u3002\n\n**\u6ce8\u610f**\uff1a \u5b83\u5fc5\u987b\u5728ready\u4e8b\u4ef6\u52a0\u8f7d\u4e4b\u524d\u8c03\u7528\uff0c\u5e76\u4e14\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\u3002\n\n```js\nprotocol.registerSchemesAsPrivileged([\n  { scheme: 'myscheme', privileges: { bypassCSP: true } },\n])\n```\n\n### 2.2 protocol.registerFileProtocol\n\n\u62e6\u622a\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u8bf7\u6c42\u56de\u8c03\uff0c\u91cd\u65b0\u5904\u7406\u540e\u518d\u8bf7\u6c42\u8def\u5f84\u3002\n\n**\u793a\u4f8b**\n\n```js\nprotocol.registerFileProtocol(\n  'myscheme',\n  (request, callback) => {\n    // \u62fc\u63a5\u7edd\u5bf9\u8def\u5f84\u7684url\n    const resolvePath = path.resolve(__dirname, '../../playground')\n    let url = request.url.replace( `${myScheme}://`, '' )\n    url = `${resolvePath}/${url}`\n    return callback({ path: decodeURIComponent(url) })\n  },\n  error => {\n    if (error) console.error('Failed to register protocol')\n  },\n)\n```\n\nPS: \u5728[\u6587\u6863](https://www.electronjs.org/docs/api/protocol)\u4e0a\u63d0\u4f9b\u4e86\u4e0d\u540c\u79cd\u7c7b\u7684\u52a0\u8f7dAPI\uff0c\u8fd9\u91cc\u53ea\u6f14\u793a\u5176\u4e2d\u7684\u4e00\u79cd\u3002\n\n\n### 2.3 \u4f7f\u7528\u65b9\u5f0f\n\n\u5728html\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u534f\u8bae\u8bf7\u6c42\u6587\u4ef6\uff0c\u5373\u53ef\u81ea\u52a8\u62e6\u622a\u3002\n\n```html\n <img src={\"myscheme://page/protocol/wakeUp.jpg\"} alt=\"wakeUp\"/>\n```\n\n### 2.4 protocol\u5176\u4ed6API\n\n```js\nprotocol.unregisterProtocol(scheme) // \u53d6\u6d88\u5bf9\u81ea\u5b9a\u4e49scheme\u7684\u6ce8\u518c\nprotocol.isProtocolRegistered(scheme) // \u81ea\u5b9a\u4e49\u534f\u8bae\u662f\u5426\u5df2\u7ecf\u62e6\u622a\nprotocol.uninterceptProtocol(scheme) // \u79fb\u9664\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u62e6\u622a\u5668\n// \u5404\u79cd\u7528\u65b0\u7684\u62e6\u622a\u5668\u66ff\u6362\u539f\u6709\u7684\u62e6\u622a\u5668\nprotocol.interceptFileProtocol(scheme, handler)\nprotocol.interceptStringProtocol(scheme, handler)\nprotocol.interceptBufferProtocol(scheme, handler)\nprotocol.interceptHttpProtocol(scheme, handler)\nprotocol.interceptStreamProtocol(scheme, handler)\n```\n"].join("")},1335:function(n,e,o){n.exports=o.p+"static/media/wakeUp.f9ab6eac.jpg"},1336:function(n,e,o){n.exports=o.p+"static/media/setProtocol.0d02261d.gif"},1337:function(n,e,o){n.exports=o.p+"static/media/protocolWatch.f9df387a.gif"}}]);