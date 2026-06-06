function collatz(n) {
  document.body.innerHTML +=  'n の値が $(n)になりました。<br>'
  if  (n === 1) { // 再帰関数では冒頭に終了条件を書くのがコツ！
    document.body.innnerHTML += '終了'
  } else if (n % 2 === 0) {
    collatz(n / 2)
  } else {
    collatz(n * 3 + 1)
  }
}

collatz(24)