import React, { useState, } from 'react'
import StyleSheet, { inputField, } from './StyleSheet'
import './App.css'

const peterDefaultPetition = 'Peter please answer the following question'
const defaultAnswers = [
  'I don\'t know...',
  'I won\'t answer...',
  'Who cares?',
  'You are becoming annoying..',
  'If you don\'t ask properly, I will never answer',
]

function App() {

  const [petition, setPetition,] = useState('')
  const [answer, setAnswer,] = useState('')
  const [isTrickMode, setIsTrickMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [answerToDisplay, setAnswerToDisplay] = useState('')


  const getPetitionCharAt = n => peterDefaultPetition[n] || ' '

  const changedPetition = e => {
    const { target: { value } } = e
    const characterPosition = value.length - 1
    const lastInsertedChar = value[characterPosition]
    const insertedDot = '.' === lastInsertedChar

    if (insertedDot) {
      setIsTrickMode(!isTrickMode)
    }

    if (insertedDot || isTrickMode) {
      const charReplacement = getPetitionCharAt(characterPosition)

      const petitionToDisplay = petition + charReplacement
      if (!insertedDot) {
        const hiddenAnswer = answer + lastInsertedChar
        setAnswer(hiddenAnswer)
      }

      setPetition(petitionToDisplay)
      return
    }

    return setPetition(value)
  }

  const processQuestion = () => {
    setIsLoading(true)
    setAnswerToDisplay('')
    let answerValue = answer

    if(0 === answer.length) {
      const rndAnswer = Math.floor(Math.random() * defaultAnswers.length)
      answerValue = defaultAnswers[rndAnswer]
    }

    setTimeout(() => {
      setIsLoading(false)
      setAnswerToDisplay(answerValue)
    }, 1500)
  }

  return (
    <div className='App'>
      <StyleSheet />

      <header className='App-header'>
        <form>
          <div className='input-group mb-3'>
            <input
              className='form-control'
              style={inputField}
              type='text'
              value={petition}
              onChange={changedPetition}
              disabled={isLoading}
            />
          </div>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              style={inputField}
              disabled={isLoading}
            />
          </div>
          <button
            type='button'
            disabled={isLoading}
            className='btn btn-secondary'
            onClick={processQuestion}>
            Ask
          </button>
        </form>

        {isLoading && <div className='spinner-grow' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>}

        {answerToDisplay && <div>
          <h4 className='.label'>{answerToDisplay}</h4>
        </div>}
      </header>
    </div>
  )
}

export default App
