import { useState } from 'react'
import './App.css'
import Navbar from '/./Components/Navbar'

export default function App() {
  const [text, setText] = useState("enter text");
  
  function onchangeFun(e) {
    setText(e.target.value)
  }
  function UpperText() {
    let uppercase = text.toUpperCase()
    setText({ uppercase }.uppercase)
  }
  function LowerText() {
    let lowerCase = text.toLowerCase()
    setText(lowerCase)
  }
  function ClearText() {
    let CT = ""
    setText(CT)
  }
  function CapitalText() {
    let CapitalCase = () => {
      return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    setText(CapitalCase)
  }
  
  return (
    <main>
      <Navbar title="TextUtils2" />
      <div className="mt-3 container">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onchangeFun} rows="7"></textarea>
        {/* <button className="mt-2 btn btn-primary" onClick={CapitalizeForm()}> Click for Capitalize Text</button> */}
        <button className="mt-2 mx-3 btn btn-primary" onClick={UpperText}> Convert To Upper Case</button>
        <button className="mt-2 mx-3 btn btn-primary" onClick={LowerText}> Convert To Lower Case</button>
        <button className="mt-2 mx-3 btn btn-primary" onClick={CapitalText}> Convert To Capitalize Case</button>
        <button className="mt-2 mx-3 btn btn-danger" onClick={ClearText}> Clear Text</button>
      </div>
      <div className="mt-3 container">
        <h1>
          Your Text Summery
        </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Time For Read Word</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </main>
  )
}
