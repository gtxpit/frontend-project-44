import readlineSync from 'readline-sync'
import { mainName } from '../cli.js'

export default () => {
  const Name = mainName
  console.log(`hello, ${Name}`)
  console.log('What is the result of the expression?')
  for (let i = 0; i < 3; i++) {
    const expression = ['+', '-', '*']
    const randomNum1 = Math.floor(Math.random() * 50)
    const randomNum2 = Math.floor(Math.random() * 55)
    const randomOperation = expression[Math.floor(Math.random() * expression.length)]
    console.log(`Question: ${randomNum1} ${randomOperation} ${randomNum2}`)
    const answer = readlineSync.question('Your answer: ')

    let correctAnswer
    if (randomOperation === '+') {
      correctAnswer = randomNum1 + randomNum2
    }
    else if (randomOperation === '-') {
      correctAnswer = randomNum1 - randomNum2
    }
    else if (randomOperation === '*') {
      correctAnswer = randomNum1 * randomNum2
    }

    if (Number(answer) === correctAnswer) {
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
