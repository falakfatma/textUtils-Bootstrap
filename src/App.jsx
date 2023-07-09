import { useState } from 'react'
import './App.css'
import Navbar from '/./Components/Navbar'

export default function App() {
  const [text, setText] = useState("enter text");
  function onchangeFun(e) {
    console.log("on change")
    console.log(e.target.value)
    // console.log(e)
  }
  function CapitalizeForm ()
  {
    // let capitalize  = text.c
    // setText("")
  } 
  function UpperCaseForm ()
  {
    // let capitalize  = text.c
    // setText("")
  } 
  return (
    <main>
      <Navbar title="TextUtils2" />
      <div className="mt-3 container">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onchangeFun} rows="7"></textarea>
        <button className="mt-2 btn btn-primary" onClick={CapitalizeForm()}> Click for Capitalize Text</button>
        <button className="mt-2 mx-3 btn btn-primary" onClick={UpperCaseForm()}> Click for Upper Case Text</button>
      </div>
    </main>
  )
}
