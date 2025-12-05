import React from 'react'

const ComponentA:React.FC = () => {
    
    // The sum.ts function will be lazy load when the button is pressed
    const handleClick = () => {
        import('../utils/sum').then(({sum})=> {
            const sumResult = sum(3,5);
            alert(`The result is ${sumResult}`);
        })

    }
  return (
    <div>
        <h3>Component A Loaded</h3>
        <p><button onClick={handleClick}>Click me</button></p>

    </div>
  )
}

export default ComponentA