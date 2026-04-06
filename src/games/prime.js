import readlineSync from 'readline-sync'
import { mainName } from '../cli.js'

export default () => {
  const Name = mainName
  console.log(`hello, ${Name}`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * 55)
    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question('Your answer: ')

    let correctAnswer
    if (randomNum < 2) {
      correctAnswer = 'no'
    }
    else if (randomNum === 2) {
      correctAnswer = 'yes'
    }
    else if (randomNum % 2 === 0) {
      correctAnswer = 'no'
    }
    else {
      let isPrime = true
      for (let a = 3; a < randomNum; a++) {
        if (randomNum % a === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime === true) {
        correctAnswer = 'yes'
      }
      else {
        correctAnswer = 'no'
      }
    }

    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${Name}`)
      return
    }
  }
  console.log(`Congratulations, ${Name}`)
}
