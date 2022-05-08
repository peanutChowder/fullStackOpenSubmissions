import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ count, text}) => (
  <div>{text} {count}</div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text='good'/>
      <Button handleClick={incrementNeutral} text='neutral'/>
      <Button handleClick={incrementBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics count={good} text='good'/>
      <Statistics count={neutral} text='neutral'/>
      <Statistics count={bad} text='bad'/>
    </div>
  )
}

export default App