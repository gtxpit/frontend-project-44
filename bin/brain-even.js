import readlineSync from 'readline-sync'
import getName from '../src/cli.js'


export default () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let randomNum = Math.floor(Math.random() * 51)
    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question(`Your answer: `)
    let correctAnswer
    if (randomNum % 2 === 0) {
        correctAnswer = 'yes'
    } else {
        correctAnswer = 'no'
    }

    if (answer === correctAnswer) {
        console.log("Correct!")
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again!,Petr`)
    }
}

