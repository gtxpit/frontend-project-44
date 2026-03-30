#!/usr/bin/env node
import getName from '../src/cli.js'
import numbers from '../bin/brain-even.js'
export default function app() {
  console.log('Welcome to the Brain Games!')
  getName()
  numbers()
}

app()

