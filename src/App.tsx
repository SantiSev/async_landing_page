import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import BodySection from './components/BodySection'
import QuestionsSection from './components/QuestionsSection'

function App() {
  return (
    <>
      <div>
        <NavBar language={''}/>
        <Banner/>
        <BodySection> 
          <QuestionsSection language={''}/>
        
        </BodySection>


      </div>
       
    </>
  )
}

export default App
