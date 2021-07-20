import React, { useState } from 'react'
import _ from 'lodash'

let time = 0

const Debounce = () => {
  const [count, setCount] = useState(0)

  const handleClick = (value: number, time: number) => {
    console.log('%c [ value ]', 'font-size:13px; background:pink; color:#bf2c9f;', value, time)
    setCount(value)
  }

  const debounce = _.debounce(handleClick, 500, { leading: false, trailing: true, maxWait: 1000 })

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          debounce.cancel()
          console.log('time', time)
          debounce(count + 1, time)
          time++
        }}
      >
        Click
      </button>
    </div>
  )
}

export default Debounce
