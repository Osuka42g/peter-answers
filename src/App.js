import React, { useState, } from 'react'
import StyleSheet, { answerStyle, } from './StyleSheet'
import './App.css'
import { Header, Form, Input, Button, Spinner, Intro, Hint, } from './Components/CollectionComponents'

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

  const determineAnswer = () => {
    if (0 === answer.length) {
      const rndAnswer = Math.floor(Math.random() * defaultAnswers.length)
      return defaultAnswers[rndAnswer]
    }

    return answer
  }

  const updatedPetition = e => {
    const { target: { value } } = e
    const characterPosition = value.length - 1
    const lastInsertedChar = value[characterPosition]
    const didInsertedDot = '.' === lastInsertedChar

    let updatedPetition = value

    if (didInsertedDot) {
      setIsTrickMode(!isTrickMode)
    }

    if (didInsertedDot || isTrickMode) {
      updatedPetition = petition + getPetitionCharAt(characterPosition)

      const hiddenAnswer = didInsertedDot
        ? answer
        : answer + lastInsertedChar
      setAnswer(hiddenAnswer)
    }

    return setPetition(updatedPetition)
  }

  const processQuestion = () => {
    setIsLoading(true)
    setAnswerToDisplay('')

    const answerValue = determineAnswer()

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
        <Intro>
          Anything you can see, Peter can see. Ask Peter any prove of being here, he will answer...
          <Hint>
            Be polite, start petition with <strong><i>{peterDefaultPetition}</i></strong>...
          </Hint>
        </Intro>
        <Form>
          <Input
            disabled={isLoading}
            onChange={updatedPetition}
            title={'Petition'}
            value={petition}
          />
          <Input
            disabled={isLoading}
            title={'Question'}
          />
          <Button
            disabled={isLoading}
            onClick={processQuestion}
            text={'Ask'}
          />
      </Form>
      <Spinner disabled={!isLoading} />
      <div>
          <h4 style={answerStyle}>{answerToDisplay}</h4>
      </div>
      </Header>
    </div>
  )
}

export default App
