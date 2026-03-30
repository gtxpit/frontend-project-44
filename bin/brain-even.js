import readlineSync from 'readline-sync'
import getName  from '../src/cli.js'


export default () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let randomNum = Math.floor(Math.random() * 51)
    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question(`Your answer: `)
    if (randomNum % 2 === 0 & answer === 'yes') {
        console.log("Correct!")
    }
    else {
        (randomNum && answer !== 2)
        console.log(`yes' is wrong answer ;(. Correct answer was 'no'.Let's try again,petr`)
    }
}

