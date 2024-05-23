import React, {useState} from 'react'

export default function Texrform(props) {
  const handleUpClick = () => {
    console.log("Uppercase is Clicked")
    setText('You have Capitalized')
  }

  const [text, setText] = useState('Enter Text Here');

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} rows="8"></textarea>  {/* Form control is predifined class which expands horizontal width  */}
    </div> <br/>
    <button className='btn btn-primary' onClick={handleUpClick}>Capitalize</button> {/* btn btn-primary adds colourful button*/}
    </>
  )
}

