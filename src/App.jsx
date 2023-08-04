
import './App.css'
import Company from './components/Company/Company'
import CriminalCharges from './components/CriminalCharges/CriminalCharges'
import Foundations from './components/Foundations/Foundations'
import Header from './components/Header/Header'

function App() {

  return (
    <div className=''>
      <Header></Header>
      <CriminalCharges></CriminalCharges>
      <Company></Company>
      <Foundations></Foundations>
    </div>
  )
}

export default App
