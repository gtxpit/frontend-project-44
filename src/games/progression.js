import readlineSync from 'readline-sync'
import { mainName } from '../cli.js'

export default () => {
  const Name = mainName
  console.log(`hello, ${Name}`)
  console.log('What number is missing in the progression?')
  for (let a = 0; a < 3; a++) {
    let start = Math.floor(Math.random() * 11) + 1
    let step = Math.floor(Math.random() * 6) + 1
    let length = Math.floor(Math.random() * 7) + 5
    const arr = []
    for (let i = 0; i < length; i++) {
      let currentElement = start + i * step
      arr.push(currentElement)
    }
    let hideIndex = Math.floor(Math.random() * length)
    let correctAnswer = arr[hideIndex]
    arr[hideIndex] = '..'

    console.log(`Question: ${arr.join(' ')}`)
    const answer = readlineSync.question('Your answer: ')
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
