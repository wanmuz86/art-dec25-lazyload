
import React, { Suspense } from 'react'
import './App.css'
// Using React.lazy and dynamic import 
const ComponentA = React.lazy(()=> import('./components/ComponentA'));
const ComponentB = React.lazy(()=> import('./components/ComponentB'));

function App() {
 

  return (
    <>
    <h1>React lazy loading</h1>
    <Suspense fallback={<div>Loading Component A...</div>}>
    <ComponentA/>
    </Suspense>
    <Suspense fallback={<div>Loading Component B...</div>}>
    <ComponentB/>
    </Suspense>
    </>
  )
}

export default App
