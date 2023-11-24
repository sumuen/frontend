function generateRandomIP() {
  // 生成四个随机的 IP 地址段
  const segment1 = Math.floor(Math.random() * 256);
  const segment2 = Math.floor(Math.random() * 256);
  const segment3 = Math.floor(Math.random() * 256);
  const segment4 = Math.floor(Math.random() * 256);

  // 将四个地址段拼接成 IP 地址字符串
  const ip = segment1 + "." + segment2 + "." + segment3 + "." + segment4;

  return ip;
}

// 调用函数生成随机 IP 地址
const randomIP = generateRandomIP();
console.log(randomIP);