import readlineSync from 'readline-sync'
import { mainName } from '../cli.js'

const gcd = (a, b) => {
  let x = a
  let y = b
  while (y !== 0) {
    x %= y;
    [x, y] = [y, x]
  }
  return x
}
export default () => {
  const Name = mainName
  console.log(`Hello, ${Name}`)
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    const randomNum1 = Math.floor(Math.random() * 50)
    const randomNum2 = Math.floor(Math.random() * 55)
    console.log(`Question: ${randomNum1} ${randomNum2}`)
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = gcd(randomNum1, randomNum2)
    if (answer === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${Name}!`)
      return
    }
  }

  console.log(`Congratulations, ${Name}!`)
}
