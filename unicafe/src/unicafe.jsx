import { useState } from "react"
export const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = [good, neutral, bad]
    const total = all.reduce((acc, i) => acc + i, 0)



    return (
        <div>
            <h1>Unicafe Project</h1>

            <h2>Give Feedback</h2>
            <Button onClick={() => setGood(good + 1)} text="Good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
            <Button onClick={() => setBad(bad + 1)} text="Bad" />

            <Statistics good={good} neutral={neutral} bad={bad} total={total} />

        </div>
    )
}



const Statistics = (props) => {
    return (
        <>
            <h2>Statistics</h2>

           { (props.good !=0|| props.bad != 0|| props.neutral != 0)?
            <div>
            <StatisticLine text="Good" value={props.good} />

            <StatisticLine text="Neutral" value={props.neutral} />

            <StatisticLine text="Bad" value={props.bad} />

            <StatisticLine text="All" value={props.total}/>

            <StatisticLine text="Average" value={props.total/3} />

            <StatisticLine text="Positive" value={(props.good / props.total) * 100} />

            </div>:
            <p>No feedback given</p>
        }
        </>

    )

}

const StatisticLine = ({text, value}) =>{
    return (
     <p>{text ==="Positive" ? `${text} : ${value}%` : `${text} ${value}`}</p>
    )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>