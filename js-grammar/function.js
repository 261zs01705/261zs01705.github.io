function areaOfCircle(r) {
  let area =r * r * 3.14;
  return  area
}

document.body.innerHTML += '<p>半径 5cm の円の面積は ' + areaOfCircle(5) + ' です。</p>';
document.body.innerHTML += '<p>半径 10cm の円の面積は ' + areaOfCircle(10) + ' です。</p>';
document.body.innerHTML += '<p>半径 15cm の円の面積は ' + areaOfCircle(15) + ' です。</p>';

let nextChristmas = new Date('2026=12-25 00:00')
function updateParagraph() {
let now = new Date()
let seconds = (nextChristmas.getTime() - now.getTime()) / 1000; //必要秒数
document.getElementById("next-christsmas").innerText =
  '次のクリスマスまで' + Math.floor(seconds) + '秒。 '
}
setInterval(updateParagraph, 50);