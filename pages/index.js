import {useState} from "react"

export default function Home(){
    const [counter, setCounter] = useState(0)
    const plusFunc = () =>{setCounter(cnt=>cnt+1)}
    return <div><h1>hi {counter}</h1>
    <button onClick={plusFunc}>+</button></div>
}