import { useState } from 'react'
import './App.css'
import Navbar from '/./Components/Navbar'

export default function App() {
  const [text, setText] = useState("enter text");
  function onchangeFun(e) {
   setText(e.target.value) 
  }
  function UpperCaseForm (){
    let uppercase  = text.toUpperCase()
    setText({uppercase}.uppercase)
    console.log(text,{uppercase})
  } 
  function LowerCaseForm (){
    let lowerCase = text.toLowerCase()
    setText(lowerCase)
  }
  function CapitalizeCaseForm(){
    
  }
  return (
    <main>
      <Navbar title="TextUtils2" />
      <div className="mt-3 container">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onchangeFun} rows="7"></textarea>
        {/* <button className="mt-2 btn btn-primary" onClick={CapitalizeForm()}> Click for Capitalize Text</button> */}
        <button className="mt-2 mx-3 btn btn-primary" onClick={UpperCaseForm}> Convert To Upper Case</button>
        <button className="mt-2 mx-3 btn btn-primary" onClick={LowerCaseForm}> Convert To Lower Case</button>
        <button className="mt-2 mx-3 btn btn-primary" onClick={CapitalizeCaseForm}> Convert To Capitalize Case</button>
      </div>
    </main>
  )
}
