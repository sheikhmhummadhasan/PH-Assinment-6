import './App.css'
import Active from './Components/Active'
import Footer from './Components/Footer'
import Getstart from './Components/Getstart'
import Header from './Components/Header'
import Hero from './Components/Hero'
import RanderingCard from './Components/RanderingCard'
import ReadytoTransform from './Components/ReadytoTransform'
import Simple_transperent from './Components/Simple_transperent'

function App() {

  return (
    <div className="body">
      <>
        <Header></Header>
        <Hero></Hero>
        <Active></Active>
        <RanderingCard></RanderingCard>
        <Getstart></Getstart>
        <Simple_transperent></Simple_transperent>
        <ReadytoTransform></ReadytoTransform>
        <Footer></Footer>
      </>
    </div>
  )
}

export default App
