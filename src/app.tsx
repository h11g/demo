import React from 'react'
import './index.less'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className='app'>
      <div>hello</div>
      <span>{`Hello! I am ${name}, ${age} years old.`}</span>
    </div>
  )
}

export default App
