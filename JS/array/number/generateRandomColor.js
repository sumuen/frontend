function generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // return `rgb(${r},${g},${b})`;
    return `#${((r<<16 | g<<8 |b).toString(16)).padStart(6,'0')}`;
}

function hexToRgb(hex) {
  // 去除十六进制颜色字符串中的 #
  hex = hex.replace("#", "");

  // 将十六进制颜色字符串拆分为红、绿、蓝三个部分
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // 返回包含RGB颜色值的对象
  return { r: r, g: g, b: b };
}

for (let i = 0; i < 10; i++) {
    let color = generateRandomColor();
    let rgb = hexToRgb(color);
    console.log(`${color} \n${JSON.stringify(rgb)}`);
}