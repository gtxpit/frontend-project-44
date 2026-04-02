import readlineSync from 'readline-sync'
import { mainName } from '../src/cli.js'

export default () => {
    const name = mainName
    console.log("Find the greatest common divisor of given numbers.")
    for (let i = 0; i < 3; i++) {
        const randomNum1 = Math.floor(Math.random() * 50)
        const randomNum2 = Math.floor(Math.random() * 55)
        console.log(`Question: ${randomNum1} ${randomNum2}`)
        const answer = readlineSync.question(`Your answer: `)
        let correctAnswer = randomNum1
        if (i === 2) {
            console.log(`Congratulations, ${name}`) // name
        }
    }
}