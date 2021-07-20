import React, { useState } from 'react'
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.scss'

const TransitionDemo = () => {
  const [transitionProp, setTransitionProp] = useState(false)
  const [list, setList] = useState<string[]>([])

  const defaultStyle = {
    transition: `opacity ${500}ms ease-in-out`,
  }

  const transitionStyles: { [key: string]: any } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <>
      <Transition in={transitionProp} timeout={500}>
        {(state) => {
          console.log('%c [ state ]', 'font-size:13px; background:pink; color:#bf2c9f;', state)
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {"I'm a fade Transition!"}
            </div>
          )
        }}
      </Transition>
      <button
        onClick={() => {
          setTransitionProp(!transitionProp)
        }}
      >
        click to enter
      </button>

      <TransitionGroup>
        {list.map((key) => {
          return (
            <CSSTransition
              unmountOnExit
              key={key}
              // in={cssTransitionProp}
              timeout={500}
              classNames='my-node'
              onEnter={() => {
                console.log('enter')
              }}
              onExited={() => {
                console.log('exited')
              }}
            >
              <div>{"I'm a fade CSSTransition!"}</div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
      <button
        onClick={() => {
          setList([...list, Math.random().toString()])
        }}
      >
        click to enter
      </button>
    </>
  )
}

export default TransitionDemo
