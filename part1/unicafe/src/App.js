import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, quantity}) => (
  <tr>
    <td>{text}</td> 
    <td>{quantity}</td>
  </tr>
)

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral
  if (all === 0) {
    return (
      <div>No StatisticsLine given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text='good' quantity={good}/>
        <StatisticsLine text='neutral' quantity={neutral}/>
        <StatisticsLine text='bad' quantity={bad}/>
        <tr>
          <td>all</td> 
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(good - bad) / all}</td>
        </tr>
        <tr>
          <td>positive</td> 
          <td>{good / all * 100}%</td>
        </tr>
      </tbody>
    </table>
  )
}

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
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App