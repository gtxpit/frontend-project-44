#!/usr/bin/env node
import getName from '../src/cli.js'
import numbers from '../src/even.js'
export default function app() {
  getName()
  numbers()
}

app()
