let classes = ['A組', 'B組', 'C組', 'D組'];
for (let grade = 1; grade <= 3; grade++) {
for (let i = 0; i < classes.length; i++) {
  document.body.innerHTML += '<p>' + grade + '年' + classes[i] + '</p>';
  }
}

let scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore = 0;
for (let i = 0; i < scores.length ; i++) {
  if (scores[i] > maxScore) {
    maxScore = scores[i];
  }
}
document.body.append('最高得点は ' + maxScore + '点 です！');

let chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (let i = 0; i < chars.length; i++) {
  for (let j = 0; j < chars.length; j++) {
    document.body.append(chars[i] + chars[j] + ' ');
  }
}