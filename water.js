const got = require('got');
const UA = require('./USER_AGENTS').UARAM();
const cookie = 'pt_key=AAJlPJLyADBrGmZ_KnCe7X6Twn_7Mb1LFrcgzZiMa3wsYz9M0j7HLk6SnoED3MEzzTj_6nJy6ls;pt_pin=jd_VXdJhrghwLds;';
const JD_API_HOST = 'https://api.m.jd.com/client.action';
async function request(function_id, body = {}, timeout = 10000) {
    try {
        const options = taskUrl(function_id, body)
        let response = await got.get(options.url, { headers: options.headers, timeout: timeout });
        const data = JSON.parse(response.body);
        if (data) {
            //console.log(data);
            return data;
        } else {
            console.log(`京东服务器返回空数据`);
            return null;
        }
    }
    catch (e) {
        console.log(`${function_id}京东服务器访问数据为空，请检查自身设备网络情况`);
        console.log(e);
        return null;
    }
}
function taskUrl(function_id, body = {}) {
    return {
        url: `${JD_API_HOST}?functionId=${function_id}&body=${encodeURIComponent(JSON.stringify(body))}&appid=wh5`,
        headers: {
            "Host": "api.m.jd.com",
            "Accept": "*/*",
            "Origin": "https://carry.m.jd.com",
            "Accept-Encoding": "gzip, deflate, br",
            "User-Agent": UA,
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Referer": "https://carry.m.jd.com/",
            "Cookie": cookie
        },
        timeout: 10000
    }
}
let count = 0;
const main = async () => {
    try {
        let response = await request("waterGoodForFarm")
        //console.log(response);
        if (response.code === "6") {
            console.log(`已浇满`);
            return;
        }
        count++;
        const randomDelay = 3000 + Math.random() * 2000;
        console.log(`第${count}次请求，延迟${randomDelay}毫秒`);
        setTimeout(main, randomDelay);
    } catch (error) {
        console.error('请求出错:', error);
    }
};
main();