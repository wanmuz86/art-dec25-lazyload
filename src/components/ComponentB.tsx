import React from 'react'

const ComponentB:React.FC = () => {
    throw new Error("to simulate error in COmponent B")
  return (
    <div>Component B Loaded</div>
  )
}

export default ComponentB