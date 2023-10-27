const got = require('got');

let count = 0;
const url = `https://api.m.jd.com/client.action?functionId=waterGoodForFarm&body=%7B%22type%22%3A%22%22%2C%22version%22%3A25%2C%22channel%22%3A1%2C%22babelChannel%22%3A%22522%22%2C%22lat%22%3A%2230.321309%22%2C%22lng%22%3A%22120.389036%22%7D&appid=signed_wh5&area=15_1213_71707_71732&osVersion=14.8.1&screen=414*736&networkType=wifi&timestamp=1698411387473&d_brand=iPhone&d_model=iPhone9%2C2&wqDefault=false&client=iOS&clientVersion=11.8.0&partner=&build=168646&openudid=00fee5b5f9b960f46cdf3e529101e3af04b4aab7&adid=&x-api-eid-token=jdd03RXLZFCWX7SZSCCHGWLUJU2PFWENVAYHYPPR5XJE7IWNLL3ETOD2Q6FWBXADFXF4PHTMXSYOAK4JERQY2XJKGRBIMXQAAAAMLOEZD75IAAAAAD7RMKLW44FGA3UX&uemps=0-2-999&ext=%7B%22prstate%22%3A%220%22%7D&h5st=20231027205627504%3Bzz3wiagtmz3i3w05%3B0c010%3Btk03wdbfc1d7118nLbSMfDGgmwAX1kc5SatphJDmlz85emYky9TbaArjxfYqhhr3AiTFXtkKYzJcZdIhAFlVKlagB7Hd%3Be4a9f83b302ce056840ec45bf9d57cf7a7d34305cadd1439dd3cffdab6545f79%3B4.2%3B1698411387504%3B19b8793aa1a5eded15af3184736e1b667736a6adae452e88d0007c36fbce9cf332654d5d5d0b4cba7a64450757259a3f955702b2a6f279f3b832e7a2f7527ac6471d90de2b923a932e826f9b433513478080693361cbf152115bbcec56bb446050b7e8f2a156d26c44d2425b33eb412c164df6768e970a0fd0ec0c2fe48d2ac09979a10074914f195d880e54d8d2c233335b7c0f51aa715dce63ceb771a436f7fa24ad837dc7f060e1b450804a2038cea46739b59b9b4ed892e60b52f3ca0830165e6ab10b0bf61e3e9b1d87ba9c4d2fbd35361d39903b6fb7afab49e74fba983b2a8323fd5cf0a5956d2730d27b0abdd08395c872426858a0af8b7cf0fc71c52ba6c1d42126a97977e63b31412f4b40ce78039be116747239908cce3bff8a5b`;
const method = `GET`;
const headers = {
    'Accept': `*/*`,
    'Accept-Encoding': `gzip, deflate, br`,
    'Origin': `https://carry.m.jd.com`,
    'x-referer-page': `https://carry.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html`,
    'Cookie': `pt_key=app_openAAJlO74-ADD1cqGpybwKpNYKrHtH3aMtj3pPM5YIEigAXPzTTRUEktNphX2My1mcWrQ_AQkSXWg;pt_pin=jd_417d9d90caeed;`,
    'Host': `api.m.jd.com`,
    'Connection': `keep-alive`,
    'User-Agent': `jdapp;iPhone;11.8.0;;;M/5.0;appBuild/168646;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CNLwZWU1YtVwEWS5DtLwDNZtZQYzZJUyEJOmCWUzYWYmDQS0YWPsDm%3D%3D%22%2C%22sv%22%3A%22CJGkEM4n%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1698411238%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 14_8_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`,
    'Referer': `https://carry.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html?babelChannel=522&sid=8fa9dac03cb3a4763499395e5f62a67w&un_area=15_1213_71707_71732`,
    'Accept-Language': `en-us`,
    'x-rp-client': `h5_1.0.0`
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
//initialDelay fist request delay
const initialDelay = 2000 + Math.random() * 2000;
setTimeout(makeRequest, initialDelay);
console.log(initialDelay);
