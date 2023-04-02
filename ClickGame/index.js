var score = 0

function plusOrMinusButton(plusOrMinus) {
  var isScore0 = score <= 0

  if (plusOrMinus == 'plus') {
    score++
  } else if (plusOrMinus == 'minus') {
    if (isScore0) {
      score = 0
    } else {
      score--
    }
  }
  document.getElementById('number').innerText = score;
}
