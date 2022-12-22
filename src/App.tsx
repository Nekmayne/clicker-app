import React, { useEffect, useState } from "react";
import './App.css'
import logo from '/clown.png'

function App() {

  
  type Point = {
    x: number,
    y: number
  }

  const [clicks, setCLicks] = useState<Point[]>([])
  const [count, setCount] = useState(1)

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { clientX, clientY } = e;
      setCLicks([...clicks, {
      x: clientX,
      y: clientY,
    },])
    setCount(count + 1)
    console.log(clicks)
  }

  const deleteClick = () => {
    const newClicks = [...clicks]
    newClicks.pop()
    setCLicks(newClicks)
    setCount(count - 1)
  }

  const deleteAllClicks = () => {
    clicks.splice(0, clicks.length);
    setCount(0)
  }
  
  let clickColor = "blue";

  if (count >= 6 && count <= 10) {
    clickColor = "green"
  } else if (count >= 10 && count <= 15) {
    clickColor = "red"
  } else {
    clickColor = "blue"
  }

  return (
   
    <div className='container'>
  
      <div className='nav'>
        <button style={{marginRight: "15px"}} disabled={clicks.length === 0} onClick={deleteClick}>Delete</button>
        <button disabled={clicks.length === 0} onClick={deleteAllClicks}>Delete ALL</button>
      </div>

      <div className="App" onClick={handleClick} style={{backgroundColor: clickColor}}>
        {clicks.map((click, i) => (
        <div className='click'
          key={i} 
          style={{
            left: click.x -  24 + "px", 
            top: click.y - 24 + "px",
        }}
       ><img className="logo" src={logo}></img></div>
      ))}
    </div>
    
    </div>
    
  )
}

export default App
