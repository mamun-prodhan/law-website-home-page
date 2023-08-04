
import './App.css'
import Company from './components/Company/Company'
import CriminalCharges from './components/CriminalCharges/CriminalCharges'
import DetailsBanner from './components/DetailsBanner/DetailsBanner'
import DetailsBannerCase from './components/DetailsBannerCase/DetailsBannerCase'
import Foundations from './components/Foundations/Foundations'
import Header from './components/Header/Header'
import HelpLine from './components/HelpLine/HelpLine'
import OurTeam from './components/OurTeam/OurTeam'
import RequestCallback from './components/RequestCallback/RequestCallback'

function App() {

  return (
    <div className=''>
      <Header></Header>
      <CriminalCharges></CriminalCharges>
      <Company></Company>
      <Foundations></Foundations>
      <HelpLine></HelpLine>
      <DetailsBanner></DetailsBanner>
      <DetailsBannerCase></DetailsBannerCase>
      <RequestCallback></RequestCallback>
      <OurTeam></OurTeam>
    </div>
  )
}

export default App
