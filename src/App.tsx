import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Calculator } from './Components/Calculator'

function App() {
  return (
    <>
    <div className='container'>
      <Header/>
      <Calculator/>
      <Footer/>
    </div>
    </>
  )
}

export default App
