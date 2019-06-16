import React, { useState, useEffect, } from 'react'
import StyleSheet from './StyleSheet'
import './App.css'

const peterDefaultPetition = 'Peter please answer the following question'
const defaultAnswers = [
  'I don\'t know...',
  'I won\'t answer...',
  'Who cares?',
  'You are becoming annoying..',
]

function App() {

  const [petition, setPetition,] = useState('')
  const [question, setQuestion,] = useState('')
  const [answer, setAnswer,] = useState('')
  const [isTrickMode, setIsTrickMode] = useState(false)

  const getPeterPetitionCharAt = n => peterDefaultPetition[n] || ''

  const changedPetition = e => {
    const { target: { value } } = e
    const characterPosition = value.length - 1
    const lastInsertedChar = value[characterPosition]
    const insertedDot = '.' === lastInsertedChar

    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    if (insertedDot) {
      setIsTrickMode(!isTrickMode)
    }

    if (insertedDot || isTrickMode) {
      const charReplacement = getPeterPetitionCharAt(characterPosition)
      return setPetition(petition + charReplacement)
    } else {
      return setPetition(value)
    }
  }
  const changedQuestion = (event, second) => {

  }

  return (
    <div className='App'>
      <StyleSheet />

      <header className='App-header'>
        <form>
          <div className='input-group mb-3'>
            <input
              className='form-control'
              type='text'
              value={petition}
              onChange={changedPetition}
            />
          </div>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
            />
          </div>
          <button type='button' className='btn btn-secondary'>Ask</button>

        </form>
        <div>
          <h4 className='.label'>Answer: {answer}</h4>
        </div>
      </header>
    </div>
  )
}

export default App
