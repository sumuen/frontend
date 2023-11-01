const got = require('got');

let count = 0;
const url = `https://api.m.jd.com/client.action?functionId=waterGoodForFarm&body=%7B%22type%22%3A%22%22%2C%22version%22%3A25%2C%22channel%22%3A1%2C%22babelChannel%22%3A%22522%22%2C%22lat%22%3A%2230.321309%22%2C%22lng%22%3A%22120.389036%22%7D&appid=signed_wh5&area=15_1213_71707_71732&osVersion=14.8.1&screen=414*736&networkType=wifi&timestamp=1698411387473&d_brand=iPhone&d_model=iPhone9%2C2&wqDefault=false&client=iOS&clientVersion=11.8.0`;
const headers = {
    'Accept': `*/*`,
    'Origin': `https://carry.m.jd.com`,
    'Cookie': `pt_key=app_openAAJlQcwhADAtlLr_PlLePpLXIDCphOfZYIm_4HYLejlsCOfFsW_Jw1IMfBAkT2vhSg9hCh-nlqs;pt_pin=jd_TIbwDNOEahue;`,
    'Host': `api.m.jd.com`,
    'User-Agent': `jdapp;iPhone;11.8.0;;;M/5.0;appBuild/168646;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CNLwZWU1YtVwEWS5DtLwDNZtZQYzZJUyEJOmCWUzYWYmDQS0YWPsDm%3D%3D%22%2C%22sv%22%3A%22CJGkEM4n%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1698411238%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 14_8_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`,
};

const myRequest = {
    url: url,
    headers: headers,
};
const makeRequest = async () => {
    try {
        let response = await got.get(myRequest);
        console.log(response.body);
        response = JSON.parse(response.body);
        if (response.code === "6") {
            console.log(`已浇满`);
            return;
        }

        count++;
        if (count >= 600) {
            return;
        }

        const randomDelay = 3000 + Math.random() * 2000;
        console.log(`第${count}次请求，延迟${randomDelay}毫秒`);
        setTimeout(makeRequest, randomDelay);

    } catch (error) {
        console.error('请求出错:', error);
    }
};
makeRequest();

