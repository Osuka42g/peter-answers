import React, { useState, } from 'react'
import StyleSheet from './StyleSheet'
import './App.css'
import { Header, Form, Input, Button, Spinner, } from './Components/CollectionComponents'

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
  const resetAnswer = () => setAnswer('')

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

    if (0 === answer.length) {
      const rndAnswer = Math.floor(Math.random() * defaultAnswers.length)
      answerValue = defaultAnswers[rndAnswer]
    }

    setTimeout(() => {
      setIsLoading(false)
      setAnswerToDisplay(answerValue)
      resetAnswer()
    }, 1500)
  }

  return (
    <div className='App'>
      <StyleSheet />
      <Header>
        <Form>
          <Input
            disabled={isLoading}
            onChange={changedPetition}
            value={petition}
          />
          <Input
            disabled={isLoading}
          />
          <Button
            disabled={isLoading}
            onClick={processQuestion}
            text={'Ask'}
          />
      </Form>
      <Spinner disabled={!isLoading} />

      {answerToDisplay && <div>
        <h4>{answerToDisplay}</h4>
      </div>}
      </Header>
    </div>
  )
}

export default App
