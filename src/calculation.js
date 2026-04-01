import readlineSync from 'readline-sync'
import { mainName } from '../src/cli.js'

export default () => {
    const name = mainName
    for (let i = 0; i < 3; i++) {
        const expression = ['+', '-', '*']
        const randomNum1 = Math.floor(Math.random() * 50)
        const randomNum2 = Math.floor(Math.random() * 55)
        const randomOperation = expression[Math.floor(Math.random() * expression.length)]
        console.log('What is the result of the expression?')
        console.log(`Question: ${randomNum1} ${randomOperation} ${randomNum2}`)
        const answer = readlineSync.question(`Your answer: `)
        let correctAnswer
        if (randomOperation === '+') {
            return randomNum1 + randomNum2;
        } else if (randomOperation === '-') {
            return randomNum1 - randomNum2;
        } else if (randomOperation === '*') {
            return randomNum1 * randomNum2;
        } else {
            console.log("I don't know what kind of operation this is.")
        }
    }
    return
}
