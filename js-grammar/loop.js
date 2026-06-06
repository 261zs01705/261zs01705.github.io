for (let i = 1;  i <= 500; i++) {
  if (i % 15 === 0) { //　3で割り切れる
  document.body.append('FizzBuzz ')
  } else if (i % 5 === 0 ) {
    document.body.append('Buzz ')
  } else if (i % 3 === 0 ) {
    document.body.append('Fizz ')
  } else {
    document.body.append(i + ' ')
  }
}