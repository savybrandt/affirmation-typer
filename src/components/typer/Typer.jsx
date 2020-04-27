import React from 'react'

const Typer = ({ value, onChange, onEnter }) => {
  const handleKeyDown = e => {
    if (e.key === 'Enter') onEnter()
  }
  return (
    <input value={value} onChange={onChange} onKeyDown={handleKeyDown}/>
  )
}

export default Typer;