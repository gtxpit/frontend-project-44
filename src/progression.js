import readlineSync from 'readline-sync'
import { mainName } from './cli.js'

export default () => {
  const name = mainName
  console.log('What number is missing in the progression?')
  for (let i = 0; i < 3; i++) {
    let start = Math.floor(Math.random() * 11)
    let index = Math.floor(Math.random() * (6 - 1) + 1)
    let step = Math.floor(Math.random() * (6 - 1) + 1)
    let length = Math.floor(Math.random() * (11 - 5) + 5)
    let hide = Math.floor(Math.random() * (length - 0) + 0)
    const arr = []
    for (let i = 0; i < length; i++) {
      let currentElement = start + index * step
      arr.push(currentElement)
      index += step
    }

    let correctAnswer = arr[hide]
    console.log(`Правильный ответ: ${correctAnswer}`)
    arr[hide] = '..'
    console.log(`Question: ${arr}`)
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) === correctAnswer) {
      console.log(`Correct!`)
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
    }
    return
  }
}