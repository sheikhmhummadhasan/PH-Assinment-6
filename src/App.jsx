import { Suspense, useState } from 'react'
import './App.css'
import Active from './Components/Active'
import Footer from './Components/Footer'
import Getstart from './Components/Getstart'
import Header from './Components/Header'
import Hero from './Components/Hero'
import RanderingCard from './Components/RanderingCard'
import Simple_transperent from './Components/Simple_transperent'
import ReadytoTransform from './Components/ReadytoTransform'

function App() {

  let fetchingdata = async () =>{
    let res = await fetch('/Jsondata.json')
    let prom = await res.json();
    return prom
  }
  const data = fetchingdata()

  const [toggel,setToggel] = useState('Product')

  return (
    <div className="body">
      <>
        <Header></Header>
        <Hero></Hero>
        <Active></Active>
        <Suspense fallback={<h1>Data is Loading...</h1>}>
          <RanderingCard toggel={toggel} setToggel={setToggel} data={data}></RanderingCard>
        </Suspense>
        <Getstart></Getstart>
        <Simple_transperent></Simple_transperent>
        <ReadytoTransform></ReadytoTransform>
        <Footer></Footer>
      </>
    </div>
  )
}

export default App
