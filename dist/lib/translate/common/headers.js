"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xtend = require("xtend");
exports.UserAgent = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/63.0.3239.84 Safari/537.36'
};
exports.Form = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
};
exports.QQ_HEADERS_SIMPLE = xtend({
    'Host': 'm.fanyi.qq.com',
    'Origin': 'http://m.fanyi.qq.com'
}, exports.UserAgent, exports.Form);
exports.YOUDAO_HEADERS_SIMPLE = xtend({
    'Host': 'fanyi.youdao.com',
    'Origin': 'http://fanyi.youdao.com',
    'Referer': 'http://fanyi.youdao.com/'
}, exports.UserAgent);
exports.YOUDAO_HEADERS_FORM = xtend({}, exports.YOUDAO_HEADERS_SIMPLE, exports.Form);
exports.BAIDU_HEADERS_SIMPLE = xtend({
    'Host': 'fanyi.baidu.com',
    'Origin': 'fanyi.baidu.com',
    'Referer': 'fanyi.baidu.com'
}, exports.UserAgent);
exports.BAIDU_HEADERS_SIMPLE_PARMS = xtend({}, exports.BAIDU_HEADERS_SIMPLE, {
    'Referer': 'http://fanyi.baidu.com/#zh/en/%E4%B8%AD%E5%9B%BDg'
});
exports.BAIDU_HEADERS_SIMPLE_FORM = xtend({}, exports.BAIDU_HEADERS_SIMPLE, exports.Form);
//# sourceMappingURL=headers.js.map