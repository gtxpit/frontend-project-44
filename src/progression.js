import readlineSync from 'readline-sync'
import { mainName } from './cli.js'

export default () => {
  const name = mainName
  console.log('What number is missing in the progression?')
  for (let i = 0; i < 3; i++) {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100))
    }
    console.log(`Question: ${arr}`)
  }
  if (i === 2) {
    console.log(`Correct!/nCongratulations, ${name}`)
  }
  return
}
